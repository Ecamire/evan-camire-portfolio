// Selected implementation excerpt. Type declarations below make the excerpt inspectable in isolation.
import { createHmac, timingSafeEqual } from "node:crypto";

export type ApprovalClaim = { artifactId: string; action: "approve" | "reject"; exp: number };
declare const env: { APPROVAL_SIGNING_SECRET?: string };
function sign(payload: string, secret: string): string {
  return createHmac("sha256", secret).update(payload).digest().toString("base64url");
}

export function verifyToken(
  token: string,
  now = new Date(),
): ApprovalClaim | null {
  if (!env.APPROVAL_SIGNING_SECRET) return null;
  const dot = token.lastIndexOf(".");
  if (dot === -1) return null;
  const payload = token.slice(0, dot);
  const sig = token.slice(dot + 1);
  const expected = sign(payload, env.APPROVAL_SIGNING_SECRET);
  const a = Buffer.from(sig);
  const b = Buffer.from(expected);
  if (a.length !== b.length || !timingSafeEqual(a, b)) return null;
  let claim: ApprovalClaim;
  try {
    claim = JSON.parse(Buffer.from(payload, "base64url").toString("utf8"));
  } catch {
    return null;
  }
  if (
    typeof claim.artifactId !== "string" ||
    (claim.action !== "approve" && claim.action !== "reject") ||
    typeof claim.exp !== "number"
  ) {
    return null;
  }
  if (claim.exp <= now.getTime()) return null;
  return claim;
}

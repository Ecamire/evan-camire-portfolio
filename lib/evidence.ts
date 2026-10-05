export type CodeEvidence = {
  slug: string;
  filename: string;
  title: string;
  context: string;
  decision: string;
  code: string;
  checks: string[];
  testResult: string;
  download: string;
  scope: string;
};

export const evidence: CodeEvidence[] = [
  {
    slug: "marketing-workflow",
    filename: "approval-token.ts",
    title: "Verify an approval before accepting it.",
    context:
      "An approval link carries one artifact, one action, and an expiry. The backend verifies the signature and claim before the workflow accepts the approval.",
    decision:
      "The approval endpoint displays a confirmation page on GET and requires POST to change state. That matters because email scanners can prefetch links without a person clicking them.",
    code: 'export function verifyToken(\n  token: string,\n  now = new Date(),\n): ApprovalClaim | null {\n  if (!env.APPROVAL_SIGNING_SECRET) return null;\n  const dot = token.lastIndexOf(".");\n  if (dot === -1) return null;\n  const payload = token.slice(0, dot);\n  const sig = token.slice(dot + 1);\n  const expected = sign(payload, env.APPROVAL_SIGNING_SECRET);\n  const a = Buffer.from(sig);\n  const b = Buffer.from(expected);\n  if (a.length !== b.length || !timingSafeEqual(a, b)) return null;\n  let claim: ApprovalClaim;\n  try {\n    claim = JSON.parse(Buffer.from(payload, "base64url").toString("utf8"));\n  } catch {\n    return null;\n  }\n  if (\n    typeof claim.artifactId !== "string" ||\n    (claim.action !== "approve" && claim.action !== "reject") ||\n    typeof claim.exp !== "number"\n  ) {\n    return null;\n  }\n  if (claim.exp <= now.getTime()) return null;\n  return claim;\n}',
    checks: [
      "Accept a valid signed claim",
      "Reject an expired claim",
      "Reject a changed action under the original signature",
      "Reject truncated tokens and missing configuration",
    ],
    testResult: "8 tests passed in the original approval-token suite",
    download: "/code/approval-token.ts",
    scope:
      "Selected from the client implementation. Client comments are omitted; the function logic is unchanged.",
  },
  {
    slug: "pricing-workflow",
    filename: "pricing-bounds.ts",
    title: "Keep prices inside configured bounds.",
    context:
      "A recommendation passes through application code before it can become a price. This function enforces the floor and ceiling, including a separate weekend floor.",
    decision:
      "A missing maximum can serialize from Infinity to null. Treating that value as a numeric ceiling could turn a valid rate into zero. The code checks finite bounds before clamping.",
    code: "export function clampToBounds(\n  guardrails: Guardrails,\n  listingId: string,\n  nightly: number,\n  weekendFloor?: number,\n): number {\n  const b = guardrails.bounds[listingId];\n  const baseFloor = b && Number.isFinite(b.floor) ? b.floor : 40;\n  const floor = weekendFloor !== undefined ? Math.max(baseFloor, weekendFloor) : baseFloor;\n  const ceiling = b && Number.isFinite(b.ceiling) ? b.ceiling : Infinity;\n  return Math.min(ceiling, Math.max(floor, nightly));\n}",
    checks: [
      "Keep weekday prices inside the configured range",
      "Apply a weekend floor while preserving the ceiling",
      "Handle an unset ceiling without producing a zero rate",
      "Fall back safely when a floor is non-finite",
    ],
    testResult: "14 tests passed in the original pricing-guardrail suite",
    download: "/code/pricing-bounds.ts",
    scope:
      "Selected from the client implementation. Client comments are omitted; the function logic is unchanged.",
  },
];

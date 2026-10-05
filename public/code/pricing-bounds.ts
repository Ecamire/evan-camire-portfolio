// Selected implementation excerpt. Only the bounds portion of the application type is included.
export type Guardrails = { bounds: Record<string, { floor: number; ceiling: number }> };

export function clampToBounds(
  guardrails: Guardrails,
  listingId: string,
  nightly: number,
  weekendFloor?: number,
): number {
  const b = guardrails.bounds[listingId];
  const baseFloor = b && Number.isFinite(b.floor) ? b.floor : 40;
  const floor = weekendFloor !== undefined ? Math.max(baseFloor, weekendFloor) : baseFloor;
  const ceiling = b && Number.isFinite(b.ceiling) ? b.ceiling : Infinity;
  return Math.min(ceiling, Math.max(floor, nightly));
}

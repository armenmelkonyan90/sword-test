export function fixTaxId(tax: string): string {
  if (!tax?.includes('-')) return tax;
  return tax?.replace(/-/g, '');
}

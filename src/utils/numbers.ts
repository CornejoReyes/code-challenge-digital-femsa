export function formatNumberAsQuantity(value: number): string {
  const formatter = new Intl.NumberFormat('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  return formatter.format(value);
}

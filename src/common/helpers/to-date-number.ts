export function toDateNumber(date: string): number {
  return new Date(date).getTime();
}

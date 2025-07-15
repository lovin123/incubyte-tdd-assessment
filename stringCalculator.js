// String Calculator implementation

export function add(numbers) {
  if (!numbers) return 0;
  return numbers
    .split(",")
    .map((n) => n.trim())
    .filter((n) => n.length > 0)
    .map(Number)
    .reduce((sum, n) => sum + n, 0);
}

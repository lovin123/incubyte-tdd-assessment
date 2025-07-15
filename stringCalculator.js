export function add(numbers) {
  if (!numbers) return 0;

  const numberList = numbers
    .split(",")
    .map((n) => n.trim())
    .filter((n) => n.length > 0)
    .map(Number);

  return numberList.reduce((sum, n) => sum + n, 0);
}

export function add(numbers) {
  if (!numbers) return 0;

  // default delimiter
  let delimiter = ",";
  let numString = numbers;

  // check for custom delimiter
  if (numbers.startsWith("//")) {
    delimiter = numbers[2];
    numString = numbers.slice(4);
  }

  // replace newlines with commas and split by delimiter
  const unified = numString.replace(/\n/g, ",").split(delimiter).join(",");

  const numberList = unified
    .split(",")
    .map((n) => n.trim())
    .filter((n) => n.length > 0)
    .map(Number);

  // check for negatives
  const negatives = numberList.filter((n) => n < 0);
  if (negatives.length > 0) {
    throw new Error(`negatives not allowed: ${negatives.join(",")}`);
  }

  // Ignore numbers greater than 1000
  const filtered = numberList.filter((n) => n <= 1000);

  return filtered.reduce((sum, n) => sum + n, 0);
}

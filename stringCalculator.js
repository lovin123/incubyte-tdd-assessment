export function add(numbers) {
  if (!numbers) return 0;

  let delimiter = ","; // default delimiter
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

  return numberList.reduce((sum, n) => sum + n, 0);
}

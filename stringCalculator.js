export function add(numbers) {
  if (!numbers) return 0;

  // default delimiter
  let delimiters = [","];
  let numString = numbers;

  // check for custom delimiter (multi or single)
  if (numbers.startsWith("//")) {
    if (numbers[2] === "[") {
      // multiple delimiters
      const delimiterSectionEnd = numbers.indexOf("\n");
      const delimiterSection = numbers.slice(2, delimiterSectionEnd);
      delimiters = Array.from(
        delimiterSection.matchAll(/\[(.*?)\]/g),
        (m) => m[1]
      );
      numString = numbers.slice(delimiterSectionEnd + 1);
    } else {
      // single-character delimiter
      delimiters = [numbers[2]];
      numString = numbers.slice(4);
    }
  }

  // replace newlines with commas
  let unified = numString.replace(/\n/g, ",");
  // replace all delimiters with commas
  for (const delim of delimiters) {
    unified = unified.split(delim).join(",");
  }

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

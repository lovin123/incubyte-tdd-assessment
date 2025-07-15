# String Calculator TDD Assessment

## Setup

1. Install dependencies:
   ```sh
   npm install
   ```
2. Run tests:
   ```sh
   npm test
   ```

## Description

This project implements a String Calculator using Test Driven Development (TDD) in Node.js with Jest.

### Function Signature

```js
// add(numbers: string): number
```

- Input: a string of numbers separated by delimiters
- Output: an integer, sum of the numbers

## Features

- **Empty string returns 0**
- **Single number returns itself**
- **Two or more numbers, comma/newline delimited**
- **Custom single-character delimiter:**
  - Format: `//[delimiter]\n[numbers...]`
  - Example: `//;\n1;2` returns 3
- **Custom multi-character delimiter:**
  - Format: `//[***]\n1***2***3` returns 6
- **Multiple delimiters (any length):**
  - Format: `//[delim1][delim2]\n[numbers...]`
  - Example: `//[*][%]\n1*2%3` returns 6
  - Example: `//[***][%%][abc]\n1***2%%3abc4` returns 10
- **Negative numbers throw an exception:**
  - Message: `negatives not allowed: -2,-3`
- **Numbers > 1000 are ignored:**
  - Example: `2,1001` returns 2

## Usage Examples

```js
add(""); // 0
add("1"); // 1
add("1,2"); // 3
add("1\n2,3"); // 6
add("//;\n1;2"); // 3
add("//[***]\n1***2***3"); // 6
add("//[*][%]\n1*2%3"); // 6
add("//[***][%%][abc]\n1***2%%3abc4"); // 10
add("2,1001"); // 2
// Throws: negatives not allowed: -2,-3
add("1,-2,-3,4");
```

## TDD Approach

- Start with the simplest test (empty string)
- Add tests incrementally for each new requirement
- Refactor after each passing test

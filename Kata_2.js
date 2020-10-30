const numbers = [5, 8, 12, 19, 22];

function sumTwoSmallestNumbers(numbers) {
  const twoLowestNumbers = numbers
    .sort((a, b) => (a > b ? 1 : -1))
    .splice(0, 2)
    .reduce((cur, acc) => cur + acc);

  return twoLowestNumbers;
}

const result = sumTwoSmallestNumbers(numbers);

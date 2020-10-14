const numbers = [19, 5, 5, 42, 2, 77];

function sumTwoSmallestNumbers(numbers) {
  const twoLowestNumbers = numbers
    .filter((number, i, src) => (src[i] < src[i + 1] ? number : null))
    .reduce((cur, acc) => cur + acc);

  return twoLowestNumbers;
}

const result = sumTwoSmallestNumbers(numbers);

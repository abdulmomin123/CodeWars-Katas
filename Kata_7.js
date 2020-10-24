const [sampleOne, sampleTwo] = [
  [false, 1, 0, 1, 2, 0, 1, 3, 'a'],
  [1, 2, 0, 1, 0, 1, 0, 3, 0, 1],
];

const moveZeros = function (arr) {
  const indexOfZero = [];

  arr.forEach((el, i) => {
    if (el === 0) indexOfZero.push(i);
  });

  indexOfZero.forEach((el, i) => {
    //
  });

  return indexOfZero;
};

const result = moveZeros(sampleOne);

console.log(result);

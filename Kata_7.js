const [sampleOne, sampleTwo] = [
  [false, 1, 0, 1, 2, 0, 1, 3, 'a'],
  [1, 2, 0, 1, 0, 1, 0, 3, 0, 1],
];

const moveZeros = function (arr) {
  const indexOfZero = [];

  const newArr = arr.filter((el, i, src) => {
    el === 0 ? indexOfZero.push(i) : null;
  });

  return indexOfZero;
};

const result = moveZeros(sampleOne);

console.log(result);

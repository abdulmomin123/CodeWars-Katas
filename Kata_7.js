const [sampleOne, sampleTwo] = [
  [false, 1, 0, 1, 2, 0, 1, 3, 'a'],
  [1, 2, 0, 1, 0, 1, 0, 3, 0, 1],
];

const moveZeros = function (arr) {
  return arr.sort(a => (a === 0 ? 1 : -1)).sort(a => (a === 0 ? 1 : -1));
};

const result = moveZeros(sampleOne);

console.log(result);

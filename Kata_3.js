const sample = 1071225; // 45
const sampleTwo = 91716553919377; // -1
let guess = 1;
let curGuess = guess;
let iterations = guess;
const arr = [];

function findNb(m) {
  if (iterations < 1) return;

  arr.push(iterations ** 3);
  iterations--;

  findNb(sample);
}
findNb(sample);

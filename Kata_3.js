const sample = 1071225; // 45
const sampleTwo = 91716553919377; // -1
let guess = 45;

function findNb(m) {
  let n = guess;
  const sum = (n ** 2 * (n + 1) ** 2) / 4;
  console.log(sum);
}
findNb(sample);

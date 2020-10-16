const sample = 464480414784; // 45
const sampleTwo = 91716553919377; // -1
let guess = 1;

function findNb(m) {
  if ((guess ** 2 * (guess + 1) ** 2) / 4 === m) {
    return guess;
  } else if ((guess ** 2 * (guess + 1) ** 2) / 4 < m) {
    guess++;
    findNb(m);
  } else {
    return -1;
  }
}
findNb(sample);

const sample = 1071225; // 45
const sampleTwo = 91716553919377; // -1
let guess = 1;
let curGuess = guess;
let iterations = guess;
let arr = [];
let timer;

function findNb(m) {
  timer = setInterval(() => {
    if (iterations < 1) {
      guess++;
      curGuess = guess;
      iterations = guess;

      const result = arr.reduce((cur, acc) => cur + acc);

      if (result === m) {
        clearInterval(timer);
        return guess;
      } else if (result > m) {
        return;
      } else {
        arr = [];
      }
    }

    arr.push(iterations ** 3);
    iterations--;
  }, 1);
}
findNb(sample);

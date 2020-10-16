const sample = 135440716410000; // 45
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

/*
Define a function that takes one integer argument and returns 
logical value true or false depending on if the integer is a prime.
*/

function isPrime(num) {
  if (num < 2) return false;
  if (num === 2) return true;

  const maxDivider = Math.sqrt(num) + 1;

  for (let i = 2; i < maxDivider; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

const result = isPrime(3);

console.log(result);

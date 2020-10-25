/*
Define a function that takes one integer argument and returns 
logical value true or false depending on if the integer is a prime.
*/

function isPrime(num) {
  if (num < 2) return false;

  let result = false;

  for (i = 2; i < 11; i++) {
    num % i === 0 ? (result = true) : (result = false);
  }

  return result;
}

const result = isPrime(10);

console.log(result);

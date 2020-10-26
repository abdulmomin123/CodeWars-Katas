/*
Define a function that takes one integer argument and returns 
logical value true or false depending on if the integer is a prime.
*/

function isPrime(num) {
  if (num < 2) return false;

  let result = true;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      result = false;
      return result;
    }
  }

  return result;
}

const result = isPrime(2);

console.log(result);

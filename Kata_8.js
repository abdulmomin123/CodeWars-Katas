/*
Complete the solution so that it splits the string into pairs of two
 characters. If the string contains an odd number of characters then 
 it should replace the missing second character of the final pair with
  an underscore ('_').
*/

const [sampleOne, sampleTwo] = ['abcd', 'abcd'];

function solution(str) {
  const newArr = str.split(/([a-z])/gi);

  return newArr;
}

const result = solution(sampleOne);

console.log(result);

/*
Complete the solution so that it splits the string into pairs of two
 characters. If the string contains an odd number of characters then 
 it should replace the missing second character of the final pair with
  an underscore ('_').
*/

const [sampleOne, sampleTwo] = ['abc', 'abcd'];

function solution(str) {
  if (str === '') return [];
  if (str.length % 2 !== 0) str = `${str}_`;
  let newArr = str.split(/(..)/gi);
  newArr = newArr.filter(el => el !== '');
  return newArr;
}

const result = solution(sampleOne);

console.log(result);

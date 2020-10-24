/*
Complete the solution so that it splits the string into pairs of two
 characters. If the string contains an odd number of characters then 
 it should replace the missing second character of the final pair with
  an underscore ('_').
*/

const [sampleOne, sampleTwo] = ['abc', 'abcd'];

function solution(str) {
  let newArr = str.split(/(..)/gi);
  newArr = newArr.filter(el => el !== '');

  if ([...newArr[newArr.length - 1]].length > 1) {
    return newArr;
  } else {
    newArr[newArr.length - 1] = newArr[newArr.length - 1] + '_';
    return newArr;
  }
  console.log([...newArr[newArr.length - 1]].length);
}

const result = solution(sampleOne);

console.log(result);

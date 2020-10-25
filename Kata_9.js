/*
What is an anagram? Well, two words are anagrams of each other 
if they both contain the same letters. For example:
*/

const word = 'abba',
  words = ['aabb', 'abcd', 'bbaa', 'dada'];

function anagrams(word, words) {
  const sortedWord = [...word].sort((a, b) => (a > b ? 1 : -1));

  return sortedWord;
}

const result = anagrams(word, words);

console.log(result);

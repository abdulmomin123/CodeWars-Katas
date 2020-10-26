/*
Implement a function likes :: [String] -> String, which must take in 
input array, containing the names of people who like an item. It must 
return the display text as shown in the examples:
*/

const samples = [
  ['Peter'],
  ['Jacob', 'Alex'],
  ['Max', 'John', 'Mark'],
  ['Alex', 'Jacob', 'Mark', 'Max'],
];

function likes(names) {
  if (names.length === 0) return 'no one likes this';

  if (names.length === 1) return `${names[0]} likes this`;

  if (names.length === 2) return 2;
}

const result = likes(samples[0]);

console.log(result);

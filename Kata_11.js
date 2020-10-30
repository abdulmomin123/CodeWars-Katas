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

  if (names.length === 2) return `${names[0]} and ${names[1]} like this`;

  if (names.length === 3)
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  else
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
}

const result = likes(samples[3]);

console.log(result);

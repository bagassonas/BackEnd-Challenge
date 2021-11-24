/**
 * Direction:
 * Find prefix of the word from array of string
 *
 * Expected Result:
 * fl
 */
const words = ['flower', 'flow', 'flight'];

function result(words) {
  // Your Code Here
  return [words[0].split(''), words[1].split(''), words[2].split('')].reduce((a, b) => a.filter(c => b.includes(c)));
}

console.log(result(words));

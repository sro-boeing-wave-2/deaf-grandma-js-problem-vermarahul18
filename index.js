/**
 * @fileOverview Contains logic of Deaf Grandma
 */
const isUppercase = require('./isUpperCase');
const getRandomValue = require('./getRandomValue');
const { prompt, print } = require('./prompt-print');

/**
 * Put all the code here which would facilitate your conversation
 * with the Deaf Grandma.
 *
 * You can make use of the
 * 1. prompt function to get input from the user
 * 2. print function to print text on to the console
 */


const bool = true;
let count = 0;
print('What do you want to say to Grandma!!');
while (bool) {
  const ip = prompt('');
  if (ip.length === null) { break; }
  if (isUppercase(ip)) {
    const res = getRandomValue(1930, 1950);
    if (ip === 'BYE') {
      count += 1;
    } else { count = 0; }
    if (count === 3) { break; }
    print(`NO, NOT SINCE ${res}`);
  } else {
    count = 0;
    print('HUH?! SPEAK UP, SONNY!');
  }
}

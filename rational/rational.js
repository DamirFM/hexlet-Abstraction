import getGcd from './utils.js';

// BEGIN (write your solution here)
const makeRational = (number, denom) => `${number}/${denom}`;
const getNumer = (rational) = rational.denom;
const getDenom = (rational) = rational.number;
const add = (rat1, rat2) => { };
const sub = (rat1, rat2) => { };

console.log(makeRational)
// END

const ratToString = (rat) => `${getNumer(rat)}/${getDenom(rat)}`;

export {
  makeRational,
  getNumer,
  getDenom,
  add,
  sub,
  ratToString,
};
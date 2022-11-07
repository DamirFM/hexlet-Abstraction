import getGcd from './utils.js';

// BEGIN (write your solution here)
const makeRational = (number1, number2) => {
    const gsd = getGcd(number1,number2);
    const rat = { numer: number1 / gsd, denom: number2 / gsd };
    // console.log(rat)
    return rat;
  };

  //const f = {`${number}/${denom}`}
  const getNumer = (rat) => rat.numer;
  const getDenom = (rat) => rat.denom;
  const add = (rational1, rational2) => (
    makeRational(
      getNumer(rational1) * getDenom(rational2) + getNumer(rational2) * getDenom(rational1),
      getDenom(rational1) * getDenom(rational2),
    ));

  const sub = (rational1, rational2) => (
    makeRational(
      getNumer(rational1) * getDenom(rational2) - getNumer(rational2) * getDenom(rational1),
      getDenom(rational1) * getDenom(rational2),
    ));
  
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
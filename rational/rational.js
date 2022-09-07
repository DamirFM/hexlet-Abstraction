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
  const add = (rat1, rat2) => {
 
    const result = { 'numer': getNumer(rat1) + getNumer(rat2), 'denom': getGcd(rat1.denom, rat2.denom) };
    console.log(result)
    return result;
  };
  const sub = (rat1, rat2) => { 
    const result = { 'numer': (getNumer(rat1) - getNumer(rat2)) / getGcd(rat1.denom, rat2.denom), 'denom': getGcd(rat1.denom, rat2.denom) / getGcd(rat1.denom, rat2.denom) };
    console.log(result)
    return result;
  };
  
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
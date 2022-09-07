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
    const result = makeRational(rat1,rat2)
    //const result = { numer: (rat1.numer * getGcd(rat1.numer, rat1.denom)) + (rat2.numer * getGcd(rat2.numer, rat2.denom)), denom: (rat1.denom * rat2.denom) };
    console.log(result)
    return result;
  };
  const sub = (rat1, rat2) => { };
  
  
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
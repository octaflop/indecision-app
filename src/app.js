// import thing, { square, add } from './utils.js';
//
// console.log('app.js is still running!!!');
// console.log(square(4.5));
// console.log(add(4, 100));
// console.log(thing(4, 100));

import isSenior, { isAdult, canDrink } from './person.js';

console.log('isSenior', isSenior(65));
console.log('isSenior', isSenior(68));
console.log('isAdult', isAdult(17));
console.log('isAdult', isAdult(21));
console.log('canDrink', canDrink(19));
console.log('canDrink', canDrink(23));

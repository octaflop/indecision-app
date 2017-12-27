// install → import → use
import validator from 'validator';

console.log(validator.isEmail('f'));
console.log(validator.isEmail('f@example.com'));
console.log(validator.isEmail('f@example.cöm'));


function square(x) {
  return x * x;
}

// verbose syntax
// const squareArrow = (x) => {
//   return x * x;
// }

// arrowfunction expression syntax

// the expression is implicitly returned
const squareArrow = (x) => x * x;

// console.log(square(2));
// console.log(squareArrow(9));

const getFirstName = (fullName) => fullName.split(' ')[0];

console.log(getFirstName('Faris Chebib'));

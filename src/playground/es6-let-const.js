// var
var nameVar = 'Faris';
// can be re-defined
// which can lead to errors
var nameVar = 'Chebib';
console.log('nameVar', nameVar);

// let
let nameLet = 'Let Faris';
nameLet = 'Let Chebib';
// but you can't redefine it!
// let nameLet = 'Let Chebib';
console.log('nameLet', nameLet);

// const
const nameConst = 'Const Faris';
// you can't redefine
// const nameConst = 'Const Chebib';
// and you can't reassign!
// nameConst = 'Const Chebib';
console.log('nameConst', nameConst);

// Scoping
function getPetName() {
  const petName = 'Hal';
  return petName;
}

getPetName()
// petName not available in parent global scope
// not as var, let, or const
// console.log(petName);

// Block Scoping

var fullName = 'Faris Chebib';
if (fullName) {
  var firstName = fullName.split(' ')[0];
  console.log(firstName);
}
// var based is function-scoped
console.log(firstName);

if (fullName) {
  const constFirstName = fullName.split(' ')[0];
  console.log(constFirstName);
}
// fails
// console.log(constFirstName);
if (fullName) {
  let letFirstName = fullName.split(' ')[0];
  console.log(letFirstName);
}
// fails
console.log(letFirstName);

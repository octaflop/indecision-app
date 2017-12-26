// arguments object - no longer bound with arrow

const add = (a, b) => {
  // referenceError
  // console.log(arguments);
  return a + b;
};

console.log(add(55, 1, 1001));

// this keyword is no longer bound

const user = {
  name: 'Faris',
  cities: ['Atlanta', 'New York', 'Vancouver', 'Salt Lake City'],
  // printPlacesLived: function () {
  // new syntax
  printPlacesLived() {
    return this.cities.map((city) => this.name + ' has lived in ' + city);
    // this.cities.forEach(function (city){
      // this is no longer bound in the loop!
      // usually we do: const that = this above
      // console.log(this.name + ' has lived in ' + city);
    // });
    // arrow function does work
    // this.cities.forEach((city) => {
    //   console.log(this.name + ' has lived in ' + city);
    // });
  }
};

console.log(user.printPlacesLived());

// Challenge

const multiplier = {
  // numbers - array of numbers to multiply
  // multiplyBy - single number
  // multiply - return a new array where the numbers have been mutlplied
  numbers: [5, 10, 12, 15, 245],
  multiplyBy: 3.4,
  multiply() {
    return this.numbers.map((number) => number * this.multiplyBy);
  }
};

console.log(multiplier.multiply());

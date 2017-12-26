'use strict';

// arguments object - no longer bound with arrow

var add = function add(a, b) {
  // referenceError
  // console.log(arguments);
  return a + b;
};

console.log(add(55, 1, 1001));

// this keyword is no longer bound

var user = {
  name: 'Faris',
  cities: ['Atlanta', 'New York', 'Vancouver', 'Salt Lake City'],
  // printPlacesLived: function () {
  // new syntax
  printPlacesLived: function printPlacesLived() {
    var _this = this;

    return this.cities.map(function (city) {
      return _this.name + ' has lived in ' + city;
    });
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

var multiplier = {
  // numbers - array of numbers to multiply
  // multiplyBy - single number
  // multiply - return a new array where the numbers have been mutlplied
  numbers: [5, 10, 12, 15, 245],
  multiplyBy: 3.4,
  multiply: function multiply() {
    var _this2 = this;

    return this.numbers.map(function (number) {
      return number * _this2.multiplyBy;
    });
  }
};

console.log(multiplier.multiply());

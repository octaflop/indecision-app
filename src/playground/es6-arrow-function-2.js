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
    console.log(this.name);
    console.log(this.cities);

    this.cities.forEach(function (city){
      // this is no longer bound in the loop!
      // usually we do: const that = this above
      // console.log(this.name + ' has lived in ' + city);
    });
    // arrow function does work
    this.cities.forEach((city) => {
      console.log(this.name + ' has lived in ' + city);
    });
  }
};

user.printPlacesLived();

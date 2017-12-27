console.log('utils.js is running');

const square = (x) => x * x;

const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

// named exports
// order isn't important, name is important
export { square, add, subtract as default };  // not an object definition

// exports - default export or named exports

/**
 * Rewrite the following `greet` function as an arrow function
 */
// function greet(name) {
//   return `Hello ${name}`;
// }

let greet = (name) => {
  return `Hello ${name}`;
};
greet();
/**
 * sum(a, b):
 * - revieces two numbers
 * - returns their sum
 * - write it as an arrow function
 */
let sum = (a, b) => {
  sum = a + b;
  // Your code here
  return sum;
};

/**
 * square(n):
 * - receives a number n
 * - returns the square of the number
 * - write it as an arrow function
 *
 * e.g.
 * square(4) -> 16
 * sqaure(10) -> 100
 */
let square = (n) => {
  n = n ** 2;
  return n;
  // Your code here
};

/**
 * 🌶️🌶️
 * sqaures(numbers):
 * - receives an array numbers
 * - returns an array of the squares of the numbers
 * - write it as an arrow function
 *
 * e.g.
 * squares([1, 2, 3]) -> [1, 4, 9]
 */
function squares(numbers) {
  // Your code here
}

module.exports = {
  greet,
  sum,
  square,
  squares,
};

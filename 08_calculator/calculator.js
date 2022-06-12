const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const sum = (array) => array.reduce((total, number) => total + number, 0);

const multiply = (array) => array.reduce((total, number) => total * number);

const power = (a, n) => a ** n;

const factorial = (a) => {
  if (a === 0) {
    return 1;
  } else {
    const array = [];
    for (let i = 1; i <= a; i++) {
      array.push(i);
    }
    return multiply(array);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};

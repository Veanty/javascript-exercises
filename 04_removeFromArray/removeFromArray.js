const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function removeFromArray(...args) {
  const array = args[0];
  return array.filter((value) => !args.includes(value));
}

// Do not edit below this line
module.exports = removeFromArray;

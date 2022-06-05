const removeFromArray = function (...args) {
  const array = args[0];
  return array.filter((value) => {
    return !args.includes(value);
  });
};

// Do not edit below this line
module.exports = removeFromArray;

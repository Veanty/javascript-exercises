const removeFromArray = (array, ...args) => {
  return array.filter((item) => !args.includes(item));
};
// Do not edit below this line
module.exports = removeFromArray;

const reverseString = function (text) {
  const textToChar = text.split("");
  const arrayReversed = textToChar.reverse();
  const reversed = arrayReversed.join("");
  return reversed;
};

// Do not edit below this line
module.exports = reverseString;

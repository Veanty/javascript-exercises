const repeatString = function (text, number) {
  if (number < 0) {
    return "ERROR";
  } else {
    return text.repeat(number);
  }
};

// Do not edit below this line
module.exports = repeatString;

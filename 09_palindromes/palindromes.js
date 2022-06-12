const palindromes = (text) => {
  if (!text) {
    return true;
  }
  const cleanText = text
    .toLowerCase()
    .replace(/[.,/#!$%^&*;:{}=-_`~() ]/g, "")
    .replace(/s{2,}/g, " ");
  const charArray = cleanText.split("");
  return charArray.join() === charArray.reverse().join();
};

// Do not edit below this line
module.exports = palindromes;

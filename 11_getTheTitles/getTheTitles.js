const books = [
  {
    title: "Book",
    author: "Name",
  },
  {
    title: "Book2",
    author: "Name2",
  },
];

const getTheTitles = (array) => {
  const titles = array.map((item) => item.title);
  return titles;
};

// Do not edit below this line
module.exports = getTheTitles;

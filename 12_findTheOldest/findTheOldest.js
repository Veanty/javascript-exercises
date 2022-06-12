const people = [
  {
    name: "Carly",
    yearOfBirth: 1066,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
];

// const theOldest = people.sort((a, b) => {
//   const aAge = a.yearOfDeath - a.yearOfBirth;
//   const bAge = b.yearOfDeath - b.yearOfBirth;
//   if (aAge > bAge) {
//     return -1;
//   } else {
//     return 1;
//   }
// });

// console.table(theOldest);

const findTheOldest = function (array) {
  let currentYear = new Date().getFullYear();
  const theOldest = array
    .map((person) => {
      let age = person.yearOfDeath - person.yearOfBirth;
      if (isNaN(age)) {
        age = currentYear - person.yearOfBirth;
      }
      return {
        name: person.name,
        age: age,
      };
    })
    .sort((a, b) => {
      if (a.age > b.age) {
        return -1;
      } else {
        return 1;
      }
    });
  return theOldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;

const findTheOldest = function (array) {
  const currentYear = new Date().getFullYear();
  let oldest = array.reduce(function (first, second) {
    const firstAge = (first.yearOfDeath || currentYear) - first.yearOfBirth;
    const secondAge = (second.yearOfDeath || currentYear) - second.yearOfBirth;

    if (secondAge > firstAge) {
      return second;
    } else {
      return first;
    }
  });
  return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
/*
get array and put into function
create a variable to get the current year a date of death isnt given
use the reduce function to take first 2 people from the array
create 2 more variables to calculate their ages
make a if statement comparing the ages
return whoever is older and rinse and repeat until out of people
return whoever the oldest person is
*/

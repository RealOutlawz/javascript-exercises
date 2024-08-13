const getTheTitles = function (array) {
  let titleSort = array.map(function (object) {
    return object.title;
  });
  return titleSort;
};
// Do not edit below this line
module.exports = getTheTitles;
/*
Import an array into our function.
create a function expression
use map() to create a new array named TitleSort
look through objects to find what property title is
return it value
return TitleSort
*/

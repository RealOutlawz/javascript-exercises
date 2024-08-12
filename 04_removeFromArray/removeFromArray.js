const removeFromArray = function (array, ...args) {
  let filteredArray = [];
  let greatFilter = array.filter(function (num) {
    if (!args.includes(num)) {
      filteredArray.push(num);
    }
  });
  return filteredArray;
};
removeFromArray([1, 2, 3, 4], 3);
// Do not edit below this line
module.exports = removeFromArray;

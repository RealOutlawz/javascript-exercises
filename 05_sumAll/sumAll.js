const sumAll = function (num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "ERROR";
  } else if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
    return "ERROR";
  }

  if (num1 < 0 || num2 < 0) {
    return "ERROR";
  }

  let sum = 0;
  let bigger;
  let smaller;

  if (num1 > num2) {
    bigger = num1;
    smaller = num2;
  } else {
    bigger = num2;
    smaller = num1;
  }
  for (let i = smaller; i <= bigger; i++) {
    sum += i;
  }
  return sum;
};
sumAll(1, 4);
//returns ERROR with negative numbers
//(-10, 4) yes
// returns ERROR with non-integer parameters
//(2.5, 4) no
// returns ERROR with non-number parameters
//(10, "90")yes
// returns ERROR with non-number parameters
//(10, [90, 1]) haven't tested this yet
// Do not edit below this line
module.exports = sumAll;

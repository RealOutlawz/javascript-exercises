const add = function (num, num2) {
  return num + num2;
};

const subtract = function (num, num2) {
  return num - num2;
};

const sum = function (array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
};

const multiply = function (array) {
  let total = 1;
  for (let i = 0; i < array.length; i++) {
    total *= array[i];
  }
  return total;
};

const power = function (num, num2) {
  let power = 1;
  for (let i = 0; i < num2; i++) {
    power *= num;
  }
  return power;
};

const factorial = function (num) {
  let number = 1;
  if (num == 0) {
    return number;
  }
  while (num > 0) {
    number *= num;
    num--;
  }
  return number;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};

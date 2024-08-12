const convertToCelsius = function (num) {
  const conversion = ((num - 32) * 5) / 9;
  return parseFloat(conversion.toFixed(1));
};

const convertToFahrenheit = function (num) {
  const conversion = (num * 9) / 5 + 32;
  return parseFloat(conversion.toFixed(1));
};

convertToCelsius(32); // fahrenheit to celsius, should return 0
convertToFahrenheit(0); // celsius to fahrenheit, should return 32
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};

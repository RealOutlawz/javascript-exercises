const leapYears = function (num) {
  let year = num;
  if (year % 100 === 0) {
    if (year % 400 === 0) {
      return true;
    } else {
      return false;
    }
  } else if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
};
leapYears(2000);
leapYears(1985);
// Do not edit below this line
module.exports = leapYears;
/* 
works with non century years 
 - (1996)
works with non century years 
 - (1997)
works with ridiculously futuristic non century years
 - (34992)
 works with century years
 - (1900)
works with century years
- (1600)
works with century years
 - (700)
 100
 400 && 4?
*/

/*
import a number for year
run it through a function to test if it is divisible 
by 100, 
if yes then test if divisible by 400
    if its not divisible by 400 then return false
    if its is then its a leap year
if no then test if divisible by 4
    if its not divisible by 4 then return false
    if it is then its a leap year
*/

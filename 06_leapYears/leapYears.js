const leapYears = function (num) {
  if (num % 100 === 0) {
    if (num % 400 === 0) {
      return true;
    } else {
      return false;
    }
  } else if (num % 4 === 0) {
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
 - (1996) true
works with non century years 
 - (1997) false
works with ridiculously futuristic non century years
 - (34992) true
 works with century years
 - (1900)
works with century years
- (1600) true
works with century years
 - (700)
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
works but could be optimized
return num % 4 === 0 && (num % 100 !== 0 || num % 400 === 0);
^ most efficient solution
*/

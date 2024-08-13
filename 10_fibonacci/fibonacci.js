const fibonacci = function (num) {
  if (num == 0) {
    return (num = 0);
  } else if (num < 0) {
  } else {
    let prevNum = 0;
    let currentNum = 1;
    let sum = 1;
    for (let i = 1; i < num; i++) {
      sum = prevNum + currentNum;
      prevNum = currentNum;
      currentNum = sum;
    }
    return sum;
  }
};
fibonacci(4); // returns the 4th member of the series: 3  (1, 1, 2, 3)
fibonacci(6); // returns 8
// Do not edit below this line
module.exports = fibonacci;
/*
4th fibonacci number is 3
6th fibonacci number is 8
10th fibonacci number is 55
15th fibonacci number is 610
25th fibonacci number is 75025
0th fibonacci number is 0
doesn\'t accept negatives
- "OOPS"
DOES accept strings
- "0" 0
- "1" 1 x
- "2" 1
- "8" 21
*/

/*
Import Number
create if statement to check if number is 0
create if statement to check if number is negative
create a for loop that iterates from 1 to the number
create the variables prevNum, currentNum, and sum
prev num = 0
current num = 1
sum = 1
in the loop 
sum = prevNum + currentNum
prevnum = currentNum
current num = sum
current num = 1
prev num = 1
sum = 2
prevnum = 1
current num = 2
sum = 3
prevnum = 2
curenet num = 3
sum = 5
prevnum = 3
current num = 5
sum = 8
prev num = 5
curennt num = 8
sum = 13
*/

const palindromes = function (str) {
  let noExtra = function (str) {
    return str.replace(/[!.,]/g, "");
  };
  let fixedStr = noExtra(str);
  fixedStr = fixedStr.toLowerCase().replace(/\s/g, "");
  let reversed = fixedStr.split("").reverse().join("");
  if (reversed === fixedStr) {
    return true;
  } else {
    return false;
  }
};
palindromes("racecar"); // true
palindromes("tacos"); // false
// Do not edit below this line
module.exports = palindromes;
/*
works with multiple words xx
- A car, a man, a maraca. true
- Animal loots foliated detail of stool lamina true
doesn't just always return true x
- ZZZZ car, a man, a maracaz. false
works with numbers in a string x
- rac3e3car true
works with unevenly spaced numbers in a string x
- r3ace3car false
*/

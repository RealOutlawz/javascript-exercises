const repeatString = function(str, num) {
    let word = "";
    if(num < 0){
        return "ERROR"
    }
    for(let i = 0; i < num; i++){
        word += str;
    }
    return word;
};
repeatString("hey", 3);
// Do not edit below this line
module.exports = repeatString;

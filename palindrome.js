let myPali = "racecar"

function palidrome(string) {
    for(let i = 0; i < (string.length - 1) / 2; i++) {
        let firstChar = string[i];
        let lastChar = string[string.length - 1 - i];
        if(firstChar !== lastChar) {
            return false;
        }
    }
    return true;
}

console.log(palidrome(myPali));


// i  < string.length - 1 - i 
// i + i < string.length - 1
// 2 * i < string.length - 1
// i < (string.length - 1) / 2

// i < j
// -i > -j




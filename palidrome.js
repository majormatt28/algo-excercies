let myPali = "racecar"

function palidrome(string) {
    for(let i = 0; i <string.length - 1; i++) {
        let firstChar = string[i];
        let lastChar = string[string.length - 1 - i];
        if(firstChar !== lastChar) {
            return false;
        }
    }
    return true;
}

palidrome(myPali);

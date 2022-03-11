let myString = "UUUUUUUUIKDCKWWWWW"

function runLengthEncoding (string) {
    let encodedString = "";
    let counter = 1;
    let letter = string[1];
    for(let i = 1; i < string.length - 1; i++) {
        let currentLetter = string[i];
        if(currentLetter === letter) {
            console.log("this is current letter:",currentLetter);
            console.log("this is the letter:", letter);
            counter++;
            console.log("this is counter", counter);
        } else {
            encodedString += (counter + letter);
            console.log("this is letter", letter);
            console.log("this is current letter", currentLetter);
            counter = 1;
            letter = currentLetter;
            console.log("this is encoded", encodedString);
        }
    }
    encodedString += (counter + letter);
    return encodedString;
}

let encoded = runLengthEncoding(myString);
console.log("final string:", encoded);


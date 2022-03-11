let myString = "UUUUUUUUIKDCKWWWWW"

function runLengthEncoding (string) {
    let encoded = "";
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
            encoded += (counter + letter);
            console.log("this is encoded", encoded);
        }
    }
    return encoded;
}

let encoded = runLengthEncoding(myString);
console.log("final string:", encoded);


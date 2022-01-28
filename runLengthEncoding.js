let myString = "UUUUUUUUIKDCKWWWWW"

function runLengthEncoding(string) {
   let encodedString = "";
   let counter = 1;
   let letter = string[0];

    for(let i = 1; i < string.length - 1; i++) {
        console.log(string[i]);
        if(string[i] === letter) {
           
            counter++;
        } else {
            encodedString += (counter + letter);
        }
    }
    return encodedString;
}

let encoded = runLengthEncoding(myString);
console.log("final string:", encoded);
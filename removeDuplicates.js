// let myArray = ["a", "b", "b", "c", "d", "d", "e"]

// function removeDuplicates(a) {
//     let i = 0;
//     let results = [];

//     while (i < a.length) {
//         if (a[i] !== a[i + 1]) {
//             results.push(a[i]);
//             i++;
//         } else {
//             i++;
//         }
//     }

//     return results;
// }

// console.log("Final:", removeDuplicates(myArray));


// let myString = "abbcddefefgg";

// function removeDuplicates(string) {
//     let newString = "";

//     for(let i = 0; i < string.length; i++) {
//         let myChar = string[i];
//         if(!newString.includes(myChar)) {
//             newString += myChar;
//         }
//     }
//     return newString;
// }

// console.log(removeDuplicates(myString));

let myArray = ["a","b","b","c","d","d","e","f","e","f","g","g"];
let array2 = ["a","d","c","e"];

console.log([... new Set(myArray)]);
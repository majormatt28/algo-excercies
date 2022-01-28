const myString = "practice";
const myArray = myString.split("");
console.log("myString:", myString);
console.log("myArray:", myArray);

// function reversedString(string) {
//     let newStr = "";
//     for (let i = 0; i < string.length; i++) {
//         newStr += string[string.length - 1 - i];
//     }
//     return newStr;
// }
// console.log(reversedString(myString));

// function reversedArray(array) {
//     let newArr = [];
//     for (let i = 0; i < array.length; i++) {
//         newArr.push(array[array.length - 1 - i]);
//     }
//     return newArr;
// }

// console.log(reversedArray(myArray));

// function reverseArrayInPlace(array) {
//     for (let i = 0; i < array.length / 2; i++) {
//         let j = array.length - 1 - i;
//         let temp = array[i];
        
//         array[i] = array[j];
//         array[j] = temp;
//     }
// }

// reverseArrayInPlace(myArray);
// console.log(myArray);

function reverseArrayInPlace(array) {
    let i = 0;
       
    while (i < array.length / 2) {
        let j = array.length - 1 - i;
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        i++;
    }
}

reverseArrayInPlace(myArray);
console.log(myArray);

const array = [3, 5, 5, 5, 7, 8, 8, 13, 21];

// Expect [21, 13, 8, 7, 5, 3]

function reversedRemoveDuplicates(a) {
   
    let i = a.length - 1;
    let results = [];
     
     while (i >= 0) {
         if(a[i] !== a[i - 1]) {
             results.push(a[i]);
             i--;
         } else {
             i--;
         }
     }
     return results
}
console.log("Output", reversedRemoveDuplicates(array));

// function removeDuplicates(a) {
//     let i = 0;
//     let results = [];

//     while( i < a.length) {
//         if(a[i] !== a[i + 1]) {
//             results.push(a[i]);
//             console.log(i);
//             i++;
//         } else {
//             i++;
//         }
//         console.log(a[i]);
//         console.log(results);
//     }
    
//     return results;
// }

// console.log("Final:", removeDuplicates(array));

// let i = a.length - 1;

// while (i > -1) {
    
//     console.log(i);
//     console.log(a[i]);
//     i--;
//     console.log("index",i);
// }

// let i = 0;
// while(i < a.length) {
//     console.log(a[i]);
//     i = i + 2;
// }

// let i = a.length - 1
// while (i >= 0) {
//     console.log(a[i]);
//     i = i - 2;
// }
//   x    | -2   -1   0   1   2   3   4  ... a.length - 1
// x > ?  | F    F    T   T   T   T   T  ...  T
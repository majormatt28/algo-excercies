// remove duplictes

let array = ["a", "b", "b", "c", "d", "d", "e"]

function removeDuplicates(a) {
    let i = 0;
    let results = [];

    while( i < a.length) {
        if(a[i] !== a[i + 1]) {
            results.push(a[i]);
            console.log(i);
            i++;
        } else {
            i++;
        }
        console.log(a[i]);
        console.log(results);
    }
    
    return results;
}

console.log("Final:", removeDuplicates(array));

/* ----------------------------------------------- */

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

/* ----------------------------------------------- */

// reversed removed duplicates

// function reversedRemoveDuplicates(a) {
   
//     let i = a.length - 1;
//     let results = [];
     
//      while (i >= 0) {
//          if(a[i] !== a[i - 1]) {
//              results.push(a[i]);
//              i--;
//          } else {
//              i--;
//          }
//      }
//      return results
// }
// console.log("Output", reversedRemoveDuplicates(array));

/* ----------------------------------------------- */

// find smallest number

// let myArray = [1, 4, 5, 8, 9, 2]

// function findSmallestNumber(array) {
//     let smallestNum = array[0]

//     for(let i = 0; i < array.length; i++) {
//         if (array[i] < smallestNum) {
//             smallestNum = array[i];
//         }
//     }
//     return smallestNum;
// }

// console.log("Final:", findSmallestNumber(myArray));

/* ----------------------------------------------- */

// reversing a string

// let myString = "Mathew";

// function reverseString(string) {
//     let newString = "";

//     for (let i = string.length - 1; i >= 0; i--) {
//         newString += string[i];
//         // console.log(newString);
//     }
//     return newString;
// }
// console.log("final answer:",reverseString(myString));

/* ----------------------------------------------- */

// Selection sort

// let myArray = [9, 4, 5, 7, 2, 3, 4]

// function selectionSort(array) {
//     let firstIdx = 0;

//     while (firstIdx < array.length - 1) {
//         let smallIndx = smallestIndex(array, firstIdx);
//         swap(array, smallIndx, firstIdx);
//         firstIdx++;
//     }
// }

// function swap(array, i, j) {
//     let temp = array[i];
//     array[i] = array[j];
//     array[j] = temp;
// }

// function smallestIndex(array, startIdx) {
//     let length = array.length;
//     let smallIdx = startIdx;
    
//     for(let i = startIdx + 1; i < length; i++) {
//         if(array[smallIdx] > array[i]) {
//             smallIdx = i;
//         }
//     }
//     return smallIdx;
// }

// selectionSort(myArray);
// console.log('new array:', myArray);

/* ----------------------------------------------- */
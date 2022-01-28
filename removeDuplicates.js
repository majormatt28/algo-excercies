let myArray = ["a", "b", "b", "c", "d", "d", "e"]

function removeDuplicates(a) {
    let i = 0;
    let results = [];

    while (i < a.length) {
        if (a[i] !== a[i + 1]) {
            results.push(a[i]);
            i++;
        } else {
            i++;
        }
    }

    return results;
}

console.log("Final:", removeDuplicates(myArray));

// function reversedRemoveDuplicates(array) {
//     let i = array.length - 1;
//     let results = [];

//     while (i >= 0) {
//         if(array[i] !== array[i - 1]) {
//             results.push(array[i]);
//             i--;
//         } else {
//             i--;
//         }
//     }
//     return results;
// }

// console.log("Final:", reversedRemoveDuplicates(myArray));
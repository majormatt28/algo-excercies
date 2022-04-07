let myArray1 = [1,2,4];
let myArray2 = [3,5,6,7,8];

function mergeTwoSortedArrays(array1, array2) {
    let results = [];
    results = array1.concat(array2);
    // console.log(results);
    results.sort();
    return results;
}

console.log(mergeTwoSortedArrays(myArray1,myArray2));
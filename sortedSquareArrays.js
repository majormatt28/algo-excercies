let myArray = [-4,1,2,3,5,6]

// outcome = [1,4,9,16,25,36]

function sortedSquareArray(array) {
    let newArray = [];
    for(let i = 0; i < array.length; i++) {
        let smallValue = 0;
        let largeValue = array[array.length - 1];
        let result = array[i] * array[i];
        newArray.push(result);
        console.log(newArray);
    }
    return newArray;
}
console.log(sortedSquareArray(myArray));
console.log("this console.log",myArray);


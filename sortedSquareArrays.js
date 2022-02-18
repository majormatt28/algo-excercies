let myArray = [-4,1,2,3,5,6]

// outcome = [1,4,9,16,25,36]

function sortedSquareArray(array) {
    let newArray = [];
    for(let i = 0; i < array.length; i++) {
        // let smallValue = 0;
        // let largeValue = array[array.length - 1];
        // console.log({largeValue});
        let result = array[i] * array[i];
        // smallValue < largeValue
        newArray.unshift(result);
        newArray.sort();
    
        console.log("what is the new array: ",newArray);
    }
    return newArray;
}
console.log(sortedSquareArray(myArray));
console.log("this console.log",myArray);


let myArray = [1, 4, 5, 8, 9, 2]

function findSmallestNumber(array) {
    let smallestNum = array[0]

    for(let i = 0; i < array.length; i++) {
        if (array[i] < smallestNum) {
            smallestNum = array[i];
        }
    }
    return smallestNum;
}

console.log("Final:", findSmallestNumber(myArray));
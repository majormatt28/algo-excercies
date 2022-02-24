let myArray = [-4,1,2,3,5,6]

// outcome = [1,4,9,16,25,36]

function sortedSquareArray(array) {
    const results = new Array(array.length);
    let smallerIndex = 0;
    let largerIndex = array.length - 1;
    for(let i = array.length - 1; i >= 0; i--) {
       const smallerNumber = array[smallerIndex];
       const largerNumber = array[largerIndex];

       if (Math.abs(smallerNumber) > Math.abs(largerNumber)) {
           results[i] = smallerNumber * smallerNumber
           smallerIndex++;
       } else {
           results[i] = largerNumber * largerNumber
           largerIndex--;
       }
    }
    return results;
}
console.log(sortedSquareArray(myArray));
// console.log("this console.log",myArray);


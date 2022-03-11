let myArray = [1,2,3,4,5,6,7,8,9,10]

function fizzBuzz(array) {
    for(let i = 1; i <= array.length; i++) {
        if (i % 3 && i % 5) {
            console.log('FizzBuzz');
        } else if(i % 3) {
            console.log("Fizz");
        } else if(i % 5) {
            console.log("Buzz");
        } 
    }
}

console.log(fizzBuzz(myArray));
let myArray = [8, 0, 3, 5, 4.5, 1, 6]

function insertionSort(array) {
    let firstIndex = 1;
    for(let i = firstIndex; i < array.length; i++) {
        insert(array, i);
    }
}

function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

function insert(array, endOfSorted) {
    for(let i = endOfSorted; i > 0; i--) {
        if(array[i] < array[i - 1]) {
            swap(array, i, i - 1);
        } else {
            break;
        }
        console.log(array);
    }
}

insertionSort(myArray)
console.log("final answer:", myArray);
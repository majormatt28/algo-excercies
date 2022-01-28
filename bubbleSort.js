let myArray = [0, 4, 9, 6, 5, 2, 1]

function bubbleSort(array) {
    let isSorted = false;
    let counter = 0;

    while(!isSorted) {
        isSorted = true;
        for (let i = 0; i < array.length - 1 - counter; i++) {
            if (array[i] > array[i + 1]) {
                swap(array, i, i + 1);
                isSorted = false;
            }
            // todo: write down the console log for these two
            console.log(i,counter);
            console.log(array);
        }
        counter++;
    }
}

function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

bubbleSort(myArray);
console.log("final array:", myArray);
let myArray = [9, 4, 5, 7, 2, 3, 4]

function selectionSort(array) {
    let firstIdx = 0;

    while (firstIdx < array.length - 1) {
        let smallIndex = smallestIndex(array, firstIdx);
        swap(array, smallIndex, firstIdx);
        firstIdx++;
    }
}

function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

function smallestIndex(array, startIdx) {
   let length = array.length;
   let smallIdx = startIdx;

   for (let i = startIdx + 1; i < length; i++) {
       if (array[smallIdx] > array[i]) {
           smallIdx = i;
       }
   }
   return smallIdx;
}

selectionSort(myArray);
console.log('new array:', myArray);


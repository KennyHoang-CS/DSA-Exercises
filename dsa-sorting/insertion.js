
function insertionSort(array) {
    // O(n^2) sorting algorithm... 

    for(let i = 1; i < array.length; i++) {

        let currentElem = array[i]; 
        let j = i - 1; 
        // shift previous elements to the right if they're greater than currentElem. 
        while (j >= 0 && array[j] > currentElem) {
            array[j + 1] = array[j];
            --j;
        }
        array[j + 1] = currentElem;
    }
    return array; 
}







module.exports = insertionSort;
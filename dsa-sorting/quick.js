/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/

function pivot(){}


function swap(arr, a, b) {
    let temp = arr[a]; 
    arr[a] = arr[b]; 
    arr[b] = arr[temp]; 
}


/*
quickSort accepts an array, left index, and right index
*/

let arr = [4, 20, 12, 10, 7, 9];

function quickSort(arr) {
    let leftItem; 
    let rightItem; 
    let pivot = Math.floor(arr.length / 2);

    console.log('pivot', pivot);

    // swap pivot and last index.
    swap(arr, arr[pivot], arr[arr.length-1]);

    return arr;
}

console.log(quickSort(arr));

module.exports = quickSort;
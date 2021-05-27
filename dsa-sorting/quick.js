/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/

function pivot(){}


function swap(arr, a, b) {
    let temp = arr[a]; 
    arr[a] = arr[b];
    arr[b] = temp;
}

function partition(arr, left, right, pivot) {

}

/*
quickSort accepts an array, left index, and right index
*/

let arr = [7,2,1,6,8,5,3,4];

function quickSort(arr) {


    return arr;
}

console.log(quickSort(arr));

module.exports = quickSort;
/*
Given an array of 1s and 0s which has all 1s first followed by all 0s, 
write a function called countZeroes, which returns the number of zeroes in the array.

countZeroes([1,1,1,1,0,0]) // 2
countZeroes([1,0,0,0,0]) // 4
countZeroes([0,0,0]) // 3
countZeroes([1,1,1,1]) // 0

*/

function countZeroes(arr) {

    let firstZero = findFirstZero(arr);

    if (firstZero === -1) return 0; 

    return arr.length - firstZero; 
}

function findFirstZero(arr, left = 0, right = arr.length - 1) {

    if (right >= left) {
        let mid = left + Math.floor(( right - left ) / 2);

        if ((mid === 0 || arr[mid - 1] === 1) && arr[mid] === 0) {
            return mid;  // found first zero. 
        } else if (arr[mid] === 1) { // next index will be new LEFT. 
            return findFirstZero(arr, ++mid, right);
        } else if (arr[mid] === 0) { 
            // landed on a zero, but it isn't the first zero
            // so previous index will be the new RIGHT. 
            return findFirstZero(arr, left, --mid);
        }
    }

    return -1; // if no zeroes exist.
}

module.exports = countZeroes
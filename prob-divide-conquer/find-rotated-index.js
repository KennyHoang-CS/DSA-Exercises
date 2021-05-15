/*

Write a function called findRotatedIndex which accepts a rotated array of 
sorted numbers and an integer. The function should return the index of num 
in the array. If the value is not found, return -1.

Constraints:

Time Complexity: O(log N)

Examples:

findRotatedIndex([3,4,1,2],4) // 1
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8) // 2
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3) // 6
findRotatedIndex([37,44,66,102,10,22],14) // -1
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12) // -1
*/

function findRotatedIndex(arr, num) {
    
    let pivotIndex = Math.floor((arr.length - 1) / 2);
    let firstHalf = binarySearch(arr, num, left = 0, pivotIndex);
    let secondHalf = binarySearch(arr, num, pivotIndex, arr.length - 1);
    
    return Math.max(firstHalf, secondHalf);
}

function binarySearch(arr, num, left = 0, right) {

    if (right >= left) {
        let mid = Math.floor(( right + left ) / 2);
        if (arr[mid] === num) { // did we find num?
            return mid; 
        }
        else if (arr[mid] < num) {  // look in the right side
            return binarySearch(arr, num, ++mid, right);
        } else {    // look in the left side
            return binarySearch(arr, num, left, --mid);
        }
    }
    
    return -1;
}

module.exports = findRotatedIndex
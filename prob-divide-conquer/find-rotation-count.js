/*
    Write a function called findRotationCount which accepts an array 
    of distinct numbers sorted in increasing order. 
    The array has been rotated counter-clockwise n number of times. 
    Given such an array, find the value of n.

Constraints:

Time Complexity: O(log N)

Examples:

findRotationCount([15, 18, 2, 3, 6, 12]) // 2
findRotationCount([7, 9, 11, 12, 5]) // 4
findRotationCount([7, 9, 11, 12, 15]) // 0
*/

function findRotationCount(arr) {
    let result = findPivot(arr);

    return result;
}

function findPivot(arr, left = 0, right = arr.length - 1) {

    if (right >= left) {
        let mid = Math.floor(( right + left ) / 2);
        
        if (arr[mid] < arr[mid - 1]) {
            return mid; 
        } else {
            return findPivot(arr, ++mid, right);
        }
    }

    return 0;
}

module.exports = findRotationCount
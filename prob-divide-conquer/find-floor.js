/*
Write a function called findFloor which accepts a sorted array and a value x, 
and returns the floor of x in the array. The floor of x in an array is the 
largest element in the array which is smaller than or equal to x. 
If the floor does not exist, return -1.

Examples:

findFloor([1,2,8,10,10,12,19], 9) // 8
findFloor([1,2,8,10,10,12,19], 20) // 19
findFloor([1,2,8,10,10,12,19], 0) // -1

Constraints

Time Complexity: O(log N)

*/


function findFloor(arr, num) {
    let result = getFloor(arr, num);

    return result; 
}

function getFloor(arr, num, left = 0, right = arr.length - 1) {

    if (right >= left) {
        let mid = Math.floor((right + left) / 2);
        if (arr[right] < num) {
            return arr[right];
        }
        else if (arr[mid] < num) {
            return arr[mid];
        } 
        else if (arr[mid] > num ) { // disregard the right side of mid. 
            return getFloor(arr, num, left, --mid);
        } 
    }

    return -1;
}

module.exports = findFloor
/*

Given a sorted array and a number, write a function called sortedFrequency that 
counts the occurrences of the number in the array

Constraints:

Time Complexity: O(log N)

Examples:

sortedFrequency([1,1,2,2,2,2,3],2) // 4
sortedFrequency([1,1,2,2,2,2,3],3) // 1
sortedFrequency([1,1,2,2,2,2,3],1) // 2
sortedFrequency([1,1,2,2,2,2,3],4) // -1

*/

function sortedFrequency(arr, num) {
    
    let first = firstGap(arr, num);
    if (first === -1) return -1;
    let second = secondGap(arr, num);
    if (second === -1) return -1; 

    return second - first + 1; 
}

function firstGap(arr, num, left = 0, right = arr.length - 1) {
    if(right >= left) {
        let mid = Math.floor(( right + left ) / 2);
        if((mid === 0 || arr[mid - 1] < num) && arr[mid] === num) {
            return mid; // found the first gap!
        } else if (num > arr[mid]) {
            return firstGap(arr, num, ++mid, right);
        } else {
            return firstGap(arr, num, left, --mid);
        }
    }
    
    return -1; 
}

function secondGap(arr, num, left = 0, right = arr.length - 1) {
    // sortedFrequency([1,1,2,2, [2, '2', 3] ],2)
    if (right >= left) {
        let mid = Math.floor((left + right) / 2);
        if((mid === arr.length - 1 || arr[mid + 1] > num) && arr[mid] === num) {
            return mid; 
        }
        else if (num < arr[mid]) {
            return secondGap(arr, num, left, --mid);
        } else {
            return secondGap(arr, num, ++mid, right);
        }
    }

    return -1;
}

console.log(sortedFrequency([1,1,2,2,2,2,3],2));

module.exports = sortedFrequency;
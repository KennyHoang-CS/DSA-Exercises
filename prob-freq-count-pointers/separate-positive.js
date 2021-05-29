
function separatePositive(arr) {

    let right = arr.length - 1;
    let left = 0; 
    let foundPositive = true; 
    let foundNegative = true;

    while(left < right - 1) {

        // find positive number on right. 
        if(arr[right] >= 0 && foundPositive) {  // lock the right pointer. 
            foundPositive = false; 
        } else {    // increment the right pointer. 
            --right;
        }

        // find negative number on left.
        if(arr[left] < 0 && foundNegative) { // lock the left pointer. 
            foundNegative = false; 
        } else {    // increment left pointer. 
            ++left;
        }

        // if both left and right pointers are locked, we found a swap. 
        if (!(foundNegative === false && foundPositive === false)) {
            swap(arr, left, right);
            foundPositive = true;
            foundNegative = true;
        }
    }

    return arr;
}

function swap(arr, a, b) {
    let temp = arr[a]
    arr[a] = arr[b];
    arr[b] = temp;
}

module.exports = separatePositive;
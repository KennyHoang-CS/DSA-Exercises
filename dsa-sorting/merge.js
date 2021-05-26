/*
let arr1 = [1,3,4,5];
let arr2 = [2,4,6,8];
merge(arr1,arr2) // [1,2,3,4,4,5,6,8]
*/

function merge(arr1, arr2) {
    
    let result = []; 
    let i = 0;
    let j = 0; 
    while(i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            ++i;
        } else {
            result.push(arr2[j]);
            ++j;
        }
    }
    // push in any remaining values from arr1 or arr2. 
    while (i < arr1.length) {
        result.push(arr1[i]);
        ++i;
    }
    while (j < arr2.length) {
        result.push(arr2[j]);
        ++j;
    }

    return result; 
}

function mergeSort(newArr) {
    //([4, 20, 12, 10, 7, 9]))
    // base case.
    if (newArr.length <= 1) return newArr; 
    // break array in half.
    let midpt = Math.floor(newArr.length / 2); 
    // keep breaking the 1st half of array until they become single array elements.
    let arr1 = mergeSort(newArr.slice(0, midpt)); 
    // keep breaking the 2nd half of array until they become single array elements. 
    let arr2 = mergeSort(newArr.slice(midpt));     // get 2nd half of array.
    
    return merge(arr1, arr2); 
}

/*  Example: mergeSort([4, 20, 12, 10, 7, 9])

            [4, 20, 12]   |   [10, 7, 9]
             [4] | [20, 12]   [10] | [7, 9] 
               [20] | [12]           [7] [9]
                 [12, 20]          [7, 9]
            [4] | [12, 20]       [10] | [7, 9]                  
            [4,12,20]     |     [7, 9, 10]
                [4,7,9,10,12,20]

*/

module.exports = { merge, mergeSort};
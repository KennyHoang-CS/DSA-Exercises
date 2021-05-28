// add whatever parameters you deem necessary
function averagePair(arr, target) {
     
    if (arr.length === 0) return false;

    // averagePair([1, 2, 3], 2.5)
    let i = 1;
    let start = 0; 
    while(start !== arr.length - 1) {
        
        // did we find target value? 
        if ((arr[start] + arr[i]) / 2 === target) return true; 

        // did we reach end of the array? 
        if (i % arr.length - 1 === 0) {
            ++start; 
            i = start + 1; 
        } 
        ++i;
    }

    return false; 
}

module.exports = averagePair;
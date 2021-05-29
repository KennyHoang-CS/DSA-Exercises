function averagePair(arr, target) {
    
    if (arr.length === 0) return false;

    let current = 0; 
    let next = 1; 
    while (current !== arr.length - 1) {
        // did we find target value?
        if ((arr[current] + arr[next]) / 2 === target) return true;
 
        // did next pointer reach end of array? 
        if (arr.length - 1 === next) {
            ++current;                  // re-align current and next pointers. 
            next = current + 1; 
        } else {
            // increment next pointer. 
            ++next;
        }
    }

    return false; // if not found in while-loop. 
}







module.exports = averagePair;
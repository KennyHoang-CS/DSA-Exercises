function bubbleSort(arr) {

    // [4, 20, 12, 10, 7, 9]

    let temp;  
    let swapped; 
    for(let i = 0; i < arr.length; i++) {
        swapped = false;
        for(let j = 0; j < arr.length - i; j++) {
            if (arr[j + 1] < arr[j]) {
                temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
                swapped = true; 
            }
        }
        if(!swapped) break;
    }
    
    return arr; 
}

module.exports = bubbleSort;

// i I                
// 1 5 2 3 4 5 6
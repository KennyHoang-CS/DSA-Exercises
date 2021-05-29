// add whatever parameters you deem necessary
function longestFall(numbers) {
    let left = 0;
    let right = numbers.length - 1;
    let countDesc = 0; 

    if (numbers.length === 0) return 0;
    if (numbers.length === 1) return 1;

    while(left < right) {

     //   console.log(`${numbers[left+1]} < ${numbers[left]}`)
        if (numbers[left+1] < numbers[left]) ++countDesc; 
        ++left; 
    }
    if (countDesc === 0) return 1; 
    return countDesc; 
}

console.log(longestFall([2, 2, 1])) // 3

module.exports = longestFall;
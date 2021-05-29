// add whatever parameters you deem necessary
function isSubsequence(substr, string) {
    
    // convert the two strings into arrays. 
    let mySubStr = substr.split('');
    let stringToCompare = string.split('');
    
    // create left and right pointers. 
    let left = 0;
    let right = stringToCompare.length - 1;
    let item1 = mySubStr.pop();
    
    // going to traverse from the end of string and pop mySubStr stack if
    // we found a match. 
    while(left < right) {
        
        // pop the mySubStr stack if we find a character match. 
        if (item1 === stringToCompare[right]) {
            item1 = mySubStr.pop(); 
        } else {
            --right;
        }

    }
    
    // if mySubStr length is 0, then substring is in the string. 
    if (mySubStr.length === 0) {
        return true; 
    } else { // if mySubStr still has items remaining in the stack, then substr failed. 
        return false; 
    }
}

module.exports = isSubsequence;

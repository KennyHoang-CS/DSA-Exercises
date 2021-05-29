// add whatever parameters you deem necessary
function sameFrequency(digits1, digits2) {

    let num1 = digits1.toString();
    let num2 = digits2.toString();
    
    // make freq object of num1.
    let num1Freq = {};
    for(let i = 0; i < num1.length; i++) {
        if (num1Freq[num1[i]]) {
            num1Freq[num1[i]] += 1;
        } else {
            num1Freq[num1[i]] = 1;
        }
    }

    // make freq object of num2.
    let num2Freq = {};
    for(let i = 0; i < num2.length; i++) {
        if (num2Freq[num2[i]]) {
            num2Freq[num2[i]] += 1;
        } else {
            num2Freq[num2[i]] = 1;
        }
    }

    // compare the two freq objects: num1 and num2.
    for(const key in num1Freq) {
        if (!(num1Freq[key] === num2Freq[key])) return false; 
    }
    
    return true; // if we didnt return false from comparing results, it's LEGIT. 
}

module.exports = sameFrequency;
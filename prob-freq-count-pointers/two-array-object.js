// add whatever parameters you deem necessary
function twoArrayObject(arrToKeys, arrToValues) {

    // IN: ['a', 'b', 'c'] , [1, 2, 3]
    // OUT: { 'a': 1, 'b': 2, 'c': 3}
    // make object of keys 
    
    let obj = {}; 
    for(let i = 0; i < arrToKeys.length; i++) {
        obj[arrToKeys[i]] = arrToValues[i] || null;
    }
    return obj;
}

module.exports = twoArrayObject;
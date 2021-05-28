// add whatever parameters you deem necessary
function constructNote(msg, letters) {

    // create freq object of msg. 
    let msgFreq = {}; 
    for (let i = 0; i < msg.length; i++) {
        if (msgFreq[msg[i]]) {
            msgFreq[msg[i]] += 1;
        } else  {
            msgFreq[msg[i]] = 1; 
        }
    }

    // create freq object of letters.
    let letterFreq = {}
    for (let i = 0; i < letters.length; i++) {
        if (letterFreq[letters[i]]) {
            letterFreq[letters[i]] += 1;
        } else  {
            letterFreq[letters[i]] = 1; 
        }
    }

    // validate if message can be built via letters. 
    for(const key in msgFreq) {
        if (!letterFreq[key]) return false; 
        if (msgFreq[key] > letterFreq[key]) return false; // handles dups 
    }

    // Upon reaching this point, if we didn't return false from the previous 
    // loop, then the message is valid since it didn't return false. 
    return true;
}

module.exports = constructNote;
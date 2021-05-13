/** product: calculate the product of an array of numbers. 
 * 
 *  product([2, 3, 4])   // 24
*/

function product(nums, i = 0) {
  if (nums.length === i) return 1; 

  return nums[i] * product(nums, ++i);
}

/** longest: return the length of the longest word in an array of words.
 * 
 * longest(["hello", "hi", "hola"])  // 5
 */

function longest(words, i = 0, longestWord = 0) {

  // base case 
  if (words.length === i) return longestWord;

  longestWord = Math.max(words[i].length, longestWord);

  // progressive case
  return longest(words, ++i, longestWord);
}

/** everyOther: return a string with every other letter. 
 * 
 * everyOther("hello")  // "hlo"
*/

function everyOther(str, i = 0, newStr = '') {
  
  // base case
  if (i >= str.length) return newStr;

  newStr += str[i];
  
  // progressive case
  return everyOther(str, i + 2, newStr);

}

/** isPalindrome: checks whether a string is a palindrome or not. 
 * 
 * isPalindrome("tacocat")  // true
 * isPalindrome("tacodog")  // false
*/

function isPalindrome(str, idx = 0) {
  
  let leftIdx = idx;
  let rightIdx = str.length - idx - 1; 

  // base case 
  if (leftIdx >= rightIdx) return true; 

  if (str[leftIdx] !== str[rightIdx]) return false;

  // progressive case. 
  return isPalindrome(str, ++idx);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). 
 * Example: let animals = ["duck", "cat", "pony"];
 * 
 * findIndex(animals, "cat");  // 1
 * findIndex(animals, "porcupine");   // -1
 * 
*/

function findIndex(arr, val, idx = 0) {

  // base case
  if (arr.length === idx) return -1;

  if (arr[idx] === val) return idx; 

  // progressive case
  return findIndex(arr, val, ++idx);

}

/** revString: return a copy of a string, but in reverse. 
 *  
 *  revString("porcupine") // 'enipucrop'
*/

function revString(str, newStr = '', idx = 0) {
  
  let tempIdx = str.length - idx - 1; 

  // base case 
  if (tempIdx === -1) return newStr;
  
  newStr += str[tempIdx];

  // progressive case
  return revString(str, newStr, ++idx);
}


/** gatherStrings: given an object, return an array of all of the string values. 
 * 
 * let nestedObj = {
    firstName: "Lester",
    favoriteNumber: 22,
    moreData: {
      lastName: "Testowitz"
    },
    funFacts: {
      moreStuff: {
      anotherNumber: 100,
      deeplyNestedString: {
        almostThere: {
          success: "you made it!"
        }
      }
    },
    favoriteString: "nice!"
  }
  };

  gatherStrings(nestedObj) // ["Lester", "Testowitz", "you made it!", "nice!"];
*/

function gatherStrings(obj) {
  let arr = [];
  for (let key in obj) {
    if (typeof obj[key] === 'string') arr.push(obj[key]);
    if (typeof obj[key] === 'object') arr.push(...gatherStrings(obj[key]));
  }
  return arr;
}


/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left = 0, right = arr.length) {

  if (left > right) return -1;

  let middleIdx = Math.floor((left + right) / 2);

  if (arr[middleIdx] === val) { // we found it!
    return middleIdx;
  } else if (arr[middleIdx] > val) {
    return binarySearch(arr, val, left = 0, right = middleIdx - 1);
  } else { // arr[middleIdx] < val
    return binarySearch(arr, val, left = middleIdx + 1, right);
  }

}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};

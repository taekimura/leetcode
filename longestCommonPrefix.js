/***
 * Write a function to find the longest common prefix string amongst an array of strings.
 * If there is no common prefix, return an empty string "".
 */

const longestCommonPrefix = strs => {
  if (strs.length === 0) return "";

  // First scan: find shortest length
  let minLength = strs[0].length;
  for (const str of strs) {
    if (str.length < minLength) {
      minLength = str.length;
    }
  }

  // Second scan: find common chars until a different one
  for (let i = 0; i < minLength; i++) {
    for (const str of strs) {
      if (str[i] !== strs[0][i]) {
        return str.substr(0, i);
      }
    }
  }
  return "";
};
console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));



//Practice
// const strs3 = ["flower", "flow", "flight"];
// console.log(strs3[0].substr(2, 3)); // answer : owe
// console.log(strs3[0][5]); // answer :r

//The substr() method returns a portion of the string, starting at the specified index and extending for a given number of characters afterwards.

//The for...of statement creates a loop iterating over iterable objects, 
// including: built-in String, Array, array-like objects (e.g., arguments or NodeList), TypedArray, Map, Set, and user-defined iterables. It invokes a custom iteration hook with statements to be executed for the value of each distinct property of the object.
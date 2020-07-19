/***
 * Have the function ArrayChallenge2(arr) take the array of numbers stored in arr and return the string true
 * if any combination of numbers in the array (excluding the largest number) can be added up to equal the largesr number in the array,
 * otherwise return the string false.
 * For example : if arr contains [4, 6, 23, 10, 1, 3] the out put should return true because 4+6+10+3 =23.
 * The array will not be empty, will not contain all the same elememts, and may contain negative numbers.
 */
function ArrayChallenge2(arr) {
    var largestNum = Math.max.apply(null, arr);
    arr
        .sort(function (a, b) {
            return a - b;
        })
        .pop();

    function recursionCheck(arr, sum) {
        if (arr.length === 0) {
            return sum === 0;
        }
        var arrBeginNum = arr[0];
        arr = arr.slice(1);
        return recursionCheck(arr, sum) || recursionCheck(arr, sum - arrBeginNum);
    }
    return recursionCheck(arr, largestNum);
}
// TESTS
console.log("--The results of arrayChallenge2 below--");
console.log("Output: " + ArrayChallenge2([1, 2, 3, 5, 4]));
console.log("Output: " + ArrayChallenge2([4, 6, 23, 10, 1, 3]));
console.log("Output: " + ArrayChallenge2([5, 7, 16, 1, 2]));
console.log("Output: " + ArrayChallenge2([3, 5, -1, 8, 12]));

//The Math.max() function returns the largest of the zero or more numbers given as input parameters.
//const array1 = [1, 3, 2];
//console.log(Math.max(...array1));
//console.log(Math.max(1, 3, 2));

//The apply() method calls a function with a given this value, and arguments provided as an array.
// var array = ['a', 'b'];
// var elements = [0, 1, 2];
// array.push.apply(array, elements);
// console.info(array); => ["a", "b", 0, 1, 2]



// var numbers = [4, 2, 5, 1, 3];
// numbers.sort(function(a, b) {
//   return a - b;
// });
// console.log(numbers);
// [1, 2, 3, 4, 5]

// The sort() method sorts the elements of an array in place and returns the sorted array. 
// The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

//The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. 
//The original array will not be modified.
//const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
//console.log(animals.slice(2, 4));
//expected output: Array ["camel", "duck"]
//"end doesn't include!!"
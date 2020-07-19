/***
 * Given a 32-bit signed integer, reverse digits of an integer.
 ***/

const reverse = (x) => {
    const reversedX = Math.abs(x).toString().split('').reverse().join('');
    console.log(reversedX);
    if (+reversedX > Math.pow(2, 31)) {
        return 0;
    } else if (x < 0) {
        return +reversedX * -1;
    }
    return reversedX;
}
console.log(reverse(2903));

// const reverse = (x) =>{
//     const reversedX = Math.abs(x).toString().split('').reverse().join('');
//     if( x < 0 ) return -1 * +reversedX;
//     if( x > Math.pow(2 ,31)) return 0;
//     return +reversedX;
// }
// console.log(reverse(2903));

// The abs() method returns the absolute value of a number.
// The split() method divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array.  
// The division is done by searching for a pattern; where the pattern is provided as the first parameter in the method's call.
// The toString() method returns a string representing the object.
// obj.toString 

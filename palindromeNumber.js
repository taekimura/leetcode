/**
 * Determine whether an integer is a palindrome. 
 * An integer is a palindrome when it reads the same backward as forward.
 */

// const isPalindrome = (x) =>{
//     if(x < 0) return false;

//     const xToStr = x.toString();
//     let leftNum = 0;
//     let rightNum = xToStr.length - 1;

//     while(leftNum < rightNum){
//         if(xToStr[leftNum] === xToStr[rightNum]){
//         leftNum++;
//         rightNum--;
//         }else{
//             return false;
//         }
//     }
//     return true;
//}


// faster way
const isPalindrome = (x) => {
    const arr = String(x).split('');
    // const arr = x.toString().split('');

    while (arr.length > 1) {
        if (arr.shift() !== arr.pop()) {
            return false;
        }
    }
    return true;
};
console.log(isPalindrome(1221));
console.log(isPalindrome(3333));
console.log(isPalindrome(121));
console.log(isPalindrome(221));

// The shift() method removes the first element from an array and returns that removed element. 
// This method changes the length of the array.

// The pop() method removes the last element from an array and returns that element. 
// This method changes the length of the array.


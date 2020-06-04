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


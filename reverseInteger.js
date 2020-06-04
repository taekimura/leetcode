const reverse = (x) =>{
    const reversedX = Math.abs(x).toString().split('').reverse().join('');
    console.log(reversedX);
    if(+reversedX > Math.pow(2, 31)){
        return 0;
    }else if (x < 0){
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
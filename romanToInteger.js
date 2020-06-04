const romanToInt = (s) => {
    let symbols ={
            I:1,
            V:5,
            X:10,
            L:50,
            C:100,
            D:500,
            M:1000
        }
    let result = 0;

    for(let i = 0; i < s.length; i++){
        if(s[i]==='I' && (s[i+1] === 'V'|| s[i+1] === 'X')){
            result -= symbols[`${s[i]}`]
        }
        else if(s[i]==='X' && (s[i+1] === 'L'|| s[i+1] === 'C')){
            result -= symbols[`${s[i]}`]
        }
        else if(s[i]==='C' && (s[i+1] === 'D'|| s[i+1] === 'M')){
            result -= symbols[`${s[i]}`]
        }else{
            result += symbols[`${s[i]}`]
        }
    }
    return result; 
};
console.log(romanToInt('III'));
console.log(romanToInt('IV'));
console.log(romanToInt('IX'));
console.log(romanToInt('LVIII'));
console.log(romanToInt('MCMXCIV'));
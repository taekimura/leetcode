/***
 * Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
 * I can be placed before V (5) and X (10) to make 4 and 9. 
 * X can be placed before L (50) and C (100) to make 40 and 90. 
 * C can be placed before D (500) and M (1000) to make 400 and 900.
 */

const romanToInt = (s) => {
    let symbols = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    let result = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'I' && (s[i + 1] === 'V' || s[i + 1] === 'X')) {
            result -= symbols[s[i]]
        }
        else if (s[i] === 'X' && (s[i + 1] === 'L' || s[i + 1] === 'C')) {
            result -= symbols[s[i]]
        }
        else if (s[i] === 'C' && (s[i + 1] === 'D' || s[i + 1] === 'M')) {
            result -= symbols[s[i]]
        } else {
            result += symbols[s[i]]
        }
    }
    return result;
};
console.log(romanToInt('III'));
console.log(romanToInt('IV'));
console.log(romanToInt('IX'));
console.log(romanToInt('LVIII'));
console.log(romanToInt('MCMXCIV'));

//result -= symbols[`${s[i]}`]
//Template literals are string literals allowing embedded expressions. You can use multi-line strings and string interpolation features with them.
//They were called "template strings" in prior editions of the ES2015 specification.
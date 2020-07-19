/*** 
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * ***/

var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (target === nums[i] + nums[j]) {
                return [i, j]
            }
        }
    }
    return console.log('No two sum solution')
};
console.log(twoSum([1, 2, 3], 4));
console.log(twoSum([3, 9, 12, 20], 21));
console.log(twoSum([3, 9, 12, 20], 1));


const twoSum2 = (nums, target) => {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(target - nums[i])) {
            return console.log([map.get(target - nums[i]), i]);
        } else {
            console.log(map.set(nums[i], i));
        }
    }
    return console.log('No two sum solution')
};
console.log(twoSum2([1, 2, 3], 4));
console.log(twoSum2([3, 9, 12, 20], 21));
console.log(twoSum2([3, 9, 12, 20], 1));
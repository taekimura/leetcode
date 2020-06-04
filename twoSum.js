const twoSum = (nums, target) => {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [nums[i], nums[j]];
            }
        }
    }
    return console.log('No two sum solution')
}; 
console.log(twoSum([1, 2, 3], 4)); 
console.log(twoSum([3, 9, 12, 20], 21)); 
console.log(twoSum([3, 9, 12, 20], 1)); 

const twoSum2 = (nums, target) =>{
   const map = new Map();
   for (const i in nums){
       const complement = target - nums[i];
       if(map.has(complement)){
           return [i, map.get(complement)];
        }
    } 
   console.log('No two sum solution')
};
console.log(twoSum2([1, 2, 3], 4)); 
console.log(twoSum2([3, 9, 12, 20], 21)); 
console.log(twoSum2([3, 9, 12, 20], 1)); 

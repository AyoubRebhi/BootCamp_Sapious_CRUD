
function permuter(nums) {
    let result = [];
   if (nums.length === 0) return [];
    if (nums.length === 1) return [nums];
   for (let i = 0; i < nums.length; i++) {
        const curNum = nums[i];
        const remainNums = nums.slice(0, i).concat(nums.slice(i + 1));
        const remainNumsP = permuter(remainNums);
        for (let j = 0; j < remainNumsP.length; j++) {
            const permutedArray =   [curNum].concat(remainNumsP[j]);
       result.push(permutedArray);
      }
    }
    return result;
}
let arr = [1,2,3]
let res = Array.from(new Set(permuter(arr)))
console.log(res)
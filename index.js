console.log("Experiment");
var twoSum = function (nums, target) {
  const hash = new Map();
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (hash[diff] !== undefined) {
      return [i, hash[diff]];
    }
    hash[nums[i]] = i;
  }
};
console.log(twoSum([2, 7, 11, 15], 9));

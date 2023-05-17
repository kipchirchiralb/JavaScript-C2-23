function twoSum(nums, target) {
  let indeces = [];
  for (let index = 0; index < nums.length; index++) {
    for (let innerIndex = index + 1; innerIndex < nums.length; innerIndex++) {
      let sum = nums[index] + nums[innerIndex];
      if (sum === target) {
        indeces.push(index, innerIndex);
        return indeces;
      }
    }
  }
  return indeces;
}

console.log(twoSum([23, 5, 9, 2, 7, 11, 15], 9));

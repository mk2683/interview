// Between which two nodes you can have the maximum water where water is cal as Min(r,l)*(r-l)

const input = [1, 8, 6, 2, 5, 4, 8, 3, 7];
const input1 = [1, 0, 15, 2, 5, 4, 15, 0, 7];
const input2 = [2, 1, 3, 1, 3, 2];

function calMaxrainWater(input) {
  let maxWater = 0,
    calWater;
  let left = 0,
    right = input.length - 1;

  while (left < right) {
    calWater = Math.min(input[left], input[right]) * (right - left);
    maxWater = calWater > maxWater ? calWater : maxWater;

    if (input[left] < input[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxWater;
}

console.log(calMaxrainWater(input2));

///////////// Total Rainwater /////////////

var trap = function (height) {
  let left = 0;
  let right = height.length - 1;
  let leftMax = height[left];
  let rightMax = height[right];
  let water = 0;

  while (left < right) {
    if (leftMax < rightMax) {
      left++;
      leftMax = Math.max(leftMax, height[left]);
      water += leftMax - height[left];
    } else {
      right--;
      rightMax = Math.max(rightMax, height[right]);
      water += rightMax - height[right];
    }
  }

  return water;
};

console.log(trap([2, 1, 3, 1, 3, 2]));

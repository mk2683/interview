function Search(arr, target) {
  var lowC = 0,
    highC = arr.length - 1,
    midC;
  var lowR = 0,
    highR = arr[0].length - 1,
    midR;

  if (target < arr[lowC][lowR] || target > arr[highC][highR]) {
    return "Not Present";
  }

  while (lowC <= highC) {
    midC = Math.floor((highC + lowC) / 2);
    // midR = Math.floor((highR + lowR) / 2);
    // console.log("col", midC, lowC, highC);
    if (arr[midC][0] == target) {
      return true;
    } else if (arr[midC][lowR] <= target && arr[midC][highR] >= target) {
      while (lowR <= highR) {
        midR = Math.floor((highR + lowR) / 2);
        // console.log("row", midC, midR, lowR, highR);
        if (arr[midC][midR] == target) {
          return true;
        } else if (arr[midC][midR] < target) {
          lowR = midR + 1;
        } else {
          highR = midR - 1;
        }
      }
      return "Not Present";
    } else if (arr[midC][0] > target) {
      highC = midC - 1;
    } else {
      lowC = midC + 1;
    }
  }
  return "Not Present";
}

// const arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

const arr = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];

console.log(Search(arr, 4));

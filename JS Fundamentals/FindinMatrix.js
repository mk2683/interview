const input1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const input2 = [
  [1, 3, 5, 6],
  [8, 9, 11, 17],
  [19, 23, 35, 46],
];

function findInMatrix(arr, num) {
  let lowC = 0,
    highC = arr.length - 1,
    midC;
  let lowR = 0,
    highR = arr[0].length - 1,
    midR;

  if (arr[lowC][lowR] > num || arr[highC][highR] < num) {
    return "Not in range, Provide another input";
  }

  while (lowC <= highC) {
    midC = Math.floor((lowC + highC) / 2);
    if (num == arr[midC][0]) {
      return "present";
    } else if (arr[midC][lowR] <= num <= arr[midC][highR]) {
      while (lowR <= highR) {
        midR = Math.floor((highR + lowR) / 2);
        if (num == arr[midC][midR]) {
          return "present";
        } else if (num < arr[midC][midR]) {
          highR = midR - 1;
        } else {
          lowR = midR + 1;
        }
      }
      return "not present";
    } else if (num < arr[midC][0]) {
      highC = midC - 1;
    } else {
      lowC = midC + 1;
    }
  }
  return "not present";
}

console.log(findInMatrix(input1, 0));
console.log(findInMatrix(input2, 17));

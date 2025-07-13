console.log("hi");
// 0 land // 1 water // no of closed islands
// const a = [
//   [1, 1, 1, 1, 1, 1, 1, 0],
//   [1, 0, 0, 0, 0, 1, 1, 0],
//   [1, 0, 1, 0, 1, 1, 1, 0],
//   [1, 0, 0, 0, 0, 1, 0, 1],
//   [1, 1, 1, 1, 1, 1, 1, 0],
// ];

function search(arr, target, targetInstance) {
  let low = 0,
    high = arr.length - 1;
  let mid;

  while (low < high) {
    mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) {
      if (targetInstance === "low") {
        if (arr[mid - 1] === target) {
          high = mid;
        }
      } else if (targetInstance === "high") {
        if (arr[mid + 1] === target) {
          low = mid;
        }
      } else {
        return mid;
      }
    } else if (target < arr[mid]) {
      high = mid;
    } else {
      low = mid + 1;
    }
  }

  return -1;
}

function main() {
  const arr = [1, 1, 1, 1, 1]; // target 3 -> 2,4 // n/2
  const low = search(arr, 1, "low"); // 2
  const high = search(arr, 1, "high");
  console.log("output", low, high);
}

main();

function findLowerAndHigherIndex(arr, target) {
  function binarySearch(arr, target, findLower) {
    let left = 0;
    let right = arr.length - 1;
    let result = -1;

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (arr[mid] === target) {
        result = mid;
        if (findLower) {
          right = mid - 1;
        } else {
          left = mid + 1;
        }
      } else if (arr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return result;
  }

  const lowerIndex = binarySearch(arr, target, true);
  const higherIndex = binarySearch(arr, target, false);

  return [lowerIndex, higherIndex];
}

// Example usage:
// const arr = [1, 2, 2, 2, 3, 4, 5];
// const target = 2;
// const [lowerIndex, higherIndex] = findLowerAndHigherIndex(arr, target);
// console.log(`Lower index: ${lowerIndex}, Higher index: ${higherIndex}`);

//[ 3, 3, 3]

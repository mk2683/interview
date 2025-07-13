function flattenArray(arr) {
  var result = [];

  arr.forEach((element) => {
    if (Array.isArray(element)) {
      result.push(...flattenArray(element));
    } else result.push(element);
  });

  return result;
}

console.log(flattenArray([1, [2, 3], [4, 5, [6, 7, 8, [9, 10]]]]));

// const Input = [1,[2,3],[4,5,[6,7,8,[9,10]]]]
// Output - [1,2,3,4,5,6,7,8,9,10]

// Find out the anomaly. If not present, return -1. Array is strictly increasing by 1. There will be only one anomaly if present. input = [11 12 13 14 15 16 18 19]  output = 18

function findAnomaly(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);
    let expectedValue = arr[0] + mid;

    if (arr[mid] === expectedValue) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return arr[left];
}

// Test the function with the given input
const inputArray = [11, 12, 13, 14, 15, 16, 18, 19];
const result = findAnomaly(inputArray);
console.log(result); // Output: 18

const array = [3, 4, 9, 2, 1, 8];
const tempArray = [1, 2, 3, 4, 8, 9];

////////// 2nd Interview

// let arr = [1,2,3,4,5];

// [Array]
// search: Time Complexity - O(n)
//         space Complexity - O(1) (defination - O(n))

// [Set]
// search: Time Complexity - O(n)
//         space Complexity - O(1) (defination - O(n))

// [Object - Dict]
// search: Time Complexity - O(n), O(1) (if we know the key)
//         space Complexity - O(1) (defination - O(n))

//         {
//           a: 1,
//           b: 2
//         }

// var set = new Set([1, 2, 3, 4, 5]);

// console.log(set);

// cosnole.log(set.has(2));

// function Search(input) {

// }

// let arr = [1, 2, 3, 4, 5];
// console.log(
//   arr.find((elem) => {
//     return elem === 4;
//   })
// );

// var arr = [2, 2, 3, 4, 4, 5, 5];

//n * m
// 1 	2 	3 	4
// 5 	6	 7	 8
// 9 	10 	11 	12
// Time Complexity - O(N) + O(M) where N is column

// [[1,2,3,4], [5,6,7..], [...]]
// Time Complexity - O(N) + O(M) where N is column

// Binary Seach - Single dimension Array -  O(log(n*m))
// Binary Seach - 2d dimension Array -  O(log(n) + log(m))

function searchOn2dArray(input, num) {
  for (let i = 0; i < input.length; i++) {
    if (input[i][0] >= num || input[i][input[i].length - 1] <= num) {
      for (let j = 0; j < input[i].length; j++) {}
    }
  }
}

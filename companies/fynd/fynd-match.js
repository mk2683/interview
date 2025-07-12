let arr = [
  "gf33dfd95hiyt",
  "ak66gghkj88gufyyf",
  "ut22ftf76gfy99ug",
  "ctruyruy6urur",
  "zyy5ug2yt100yug7y",
];

function getHighestNumber(str) {
  let numbers = str.match(/\d+/g);
  if (numbers) {
    console.log(numbers.map(Number));
    return Math.max(...numbers.map(Number));
  }
  return -1; // If no numbers are found, return -1 (or any other logic you prefer)
}

arr.sort((a, b) => getHighestNumber(a) - getHighestNumber(b));

console.log(arr); //output

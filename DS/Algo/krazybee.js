
var input = [654, -3, 3, 1, 34, 12, "3434", 45];

let obj = {
  name: "josh"
}

let helloThere = function(name){
 return `Hi there, ${name}`;
}

let context = helloThere.bind(obj);
console.log(context("Mohan"));


function InsertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let current = array[i], j = i-1;
    while ((j > -1) && (current < array[j])) {
      array[j+1] = array[j];
      j--;
    }
    array[j+1] = current;
  }
  return array;
}

function filterArray(arr){
  return arr.filter((element) => {
    return Number.isInteger(element)
  })
}

console.log(InsertionSort(filterArray(input)));


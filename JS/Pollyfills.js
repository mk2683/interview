/////////////////// Call Bind Apply ////////////////
// Ans - it set this keyword to the first argument which is passed to the bind,call,apply method

let meObj = {
    name: "Mohit",
    print: function (age, place) {
        console.log(this.name, age, place);
    }
}

let youObj = {
    name: "Ankit"
}

let printName = meObj.print.bind(youObj, 34, "gurgaon");
printName();

// pollyfill bind
Object.prototype.myBind = function (newObj, ...args) {
    newObj.method = this;
    return function () {
        newObj.method(...args);
    }
}

let newPrintName = meObj.print.myBind(youObj, 34, "gurgaon");
newPrintName();

//polyfill call

Object.prototype.myCall = function (newObj, ...args) {
    newObj.method = this;
    return newObj.method(...args);
}

meObj.print.myCall(youObj, 45, "gurgaon")

// Pollyfill apply

Object.prototype.myApply = function (newObj, args) {
    newObj.method = this;
    return newObj.method(...args);
}

meObj.print.myApply(youObj, [45, "gurgaon"])


/////////////////// Map ////////////////

const a = [1, 2, 3, 4, 5];

Array.prototype.myMap = function (callback) {
  let outputArray = [];
  this.forEach((element) => {
    outputArray.push(callback(element));
  });
  return outputArray;
};

const result = a.myMap((element) => {
  return element * element;
});
console.log(result);        // output - [1,4,9,16,25]


/////////////////// Sum Prototype /////////////////

Array.prototype.sum = function () {
    let sum = 0;
    this.forEach((element) => {
        sum += element;
    })
    return sum;
}

let arr = [1,2,4,90];
arr.sum();      // output = 97
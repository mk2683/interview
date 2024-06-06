
/////////////////// Question -1 - Flatten Array /////////////////

function flattenArray(input) {
  var output = [];
  input.forEach((element) => {
    if (Array.isArray(element)) {
      output.push(...flattenArray(element));
    } else {
      output.push(element);
    }
  });
  return output;
}

const input = [1, 2, [23, 4, [[[[[[34]]]]]]], 3, [5, [6]]];
console.log(flattenArray(input));   // output = [1,2,23,4,34,3,5,6]

/////////////////// Question 0 - Infinite currying /////////////////

//Higher-order function for infinite currying
function infiniteCurry(func) {
  const curried = (...args) => {
      return (...next) => {
        console.log("neee",...args,"-", ...next);
          if (next.length === 0) {
              return func(...args);
          } else {
              return curried(...args, ...next);
          }
      };
  };

  return curried;
}

function sum(...args) {
  return args.reduce((total, num) => total + num, 0);
}

// Create a curried version of the sum function using infiniteCurry
const curriedSum = infiniteCurry(sum);
console.log(curriedSum(1)(2)(3)(4)()); // Output: 10 (1 + 2 + 3 + 4)
console.log(curriedSum(5)(6)(7)(8)(9)()); // Output: 35 (5 + 6 + 7 + 8 + 9)

function sum(a){
  return function(b){
    if (!b) {
      return a;
    } else {
      return sum(a + b);
    }
  }
}

sum(1)(2)(3)(4)(); // Output: 10 (1 + 2 + 3 + 4)


/////////////////// Question 1 - Flatten Object /////////////////

let input = {
  a : "hello",
  b : {
      c: "123",
      d: {
        e: "456",
        f: {
          g: "789"
        }
      }
  }
}

function flattenObject(input){
  let result = {};

  for (const key in input) {
     if (typeof input[key] === "object" && !Array.isArray(input[key])) {
        const res = flattenObject(input[key]);
        console.log(res);
            for (const resKey in res) {
                result[key + '.' + resKey] = res[resKey];
            }
     } else {
         result[key] = input[key];
     }
  }

  return result;
}

flattenObject(input); // {a: 'hello', b.c: '123', b.d.e: '456', b.d.f.g: '789'}


/////////////////// Question 2 - Sum Prototype /////////////////

Array.prototype.sum = function () {
    let sum = 0;
    this.forEach((element) => {
        sum += element;
    })
    return sum;
}

let arr = [1,2,4,90];
arr.sum();      // output = 97


/////////////////// Question 3 - Map prototype /////////////////

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


/////////////////// Question 4 -  /////////////////

var arr = [1,2,3, 4];        // input
function modify(arr){
return arr.map((element) => {
    return {[element*element] : element};
});
}
console.log(modify(arr));     // output - [{1:1}, {4:2}, {9:3}, {16: 4}]


/////////////////// Question 5 - closure example /////////////////

var a = 10;
function makeAdder(b) {
  return function (c) {
    return function (d) {
      return function (e) {
        return a + b + c + d + e;
      };
    };
  };
}

const add1 = makeAdder(1);
const add2 = add1(2);
const add3 = add2(3);
const add4 = add3(4);

console.log(add4);

    // OR //

function outerFunc() {
  let outerVar = 'I am outside!';

  function innerFunc() {
    console.log(outerVar); // => logs "I am outside!"
  }

  return innerFunc;
}

const myInnerFunc = outerFunc();
myInnerFunc();

  //   OR - private data(data hiding)  //

function initializeData() {
  var myVar = 1;
  return {
    getVar: function () {
      return myVar;
    },
    setVar: function (v) {
      myVar = v;
    }
  };
}

obj = initializeData();

console.log(obj.getVar()); // 1

obj.setVar(2);
console.log(obj.getVar()); // 2

obj.setVar("string");
console.log(obj.getVar()); // string

/////////////////// Question 6 - how can you remove clousure /////////////////

function outerFunc() {
  {let outerVar = 'I am outside!';} // => Add a block statement"

  function innerFunc() {
    console.log(outerVar); 
  }

return innerFunc;
}

const myInnerFunc = outerFunc();
myInnerFunc();


/////////////////// Question 7 - var let Difference /////////////////

/* - Scoping rules var - function scope, let - block scope
- Hoisting not happen for let (before definition remain in temporal dead zone)
- Creating global object property not possible in let (ex - window.foo)
- Redeclaration in strict mode not possible with let */


/////////////////// Question 8 - promise example  /////////////////

var promise = new Promise(function(resolve, reject){
  setTimeout(()=>{
    resolve("I'm resolved Successfully!")
  }, 1000)
});

promise.then(function(result){
  console.log(result + "1");
}, function(error){
  console.log(error + "1");
})
promise.then(function(result){
  console.log(result + "2");
}, function(error){
  console.log(error + "2");
})


/////////////////// Question 9 - callback hell example  /////////////////

function doSomething(toDo, callback){
  alert(`I'm doing ${toDo} today`);
  callback();
}

function afterFinishing(){
  alert(`I have completed it`);
}

doSomething("Play football", afterFinishing);


/////////////////// Question 10 - callback hell example  /////////////////

- Async await example

async function myFetch() {
  let response = await callback();

  console.log("response")
}
function callback(){alert("abc")}
myFetch(callback);


/////////////////// Question 11 - Unique String  /////////////////

let input = ["Saturday", "Rajesh", "Kumar", "pen", "Aeroplane", "Independence", "day", "raj", "Sourcecode", "cod", "aeroplane", "kumar", "repo"];

function largestUniqueString(input){
    let maxString = "";
    input.forEach((element, index) => {
        let isUniqueString = true;
        for(let i = index+1; i < input.length; i++ ){
          if (element.toLowerCase().includes(input[i].toLowerCase()) || input[i].toLowerCase().includes(element.toLowerCase())) {
                console.log(element);
                isUniqueString = false;
                break;
            }
        }
        if (isUniqueString) {
            maxString = (element.length > maxString.length) ? element : maxString;
            console.log("unique string", maxString);
        } 
    });
    return maxString;
}

largestUniqueString(input);

/////////////////// Question 12 - Merge two sorted array  /////////////////

let sortedArray1 = [0, 1, 3, 5, 7, 12, 28]
let sortedArray2 = [2, 3, 6, 9, 26, 30, 40, 50]

function mergeArray(array1, array2){
    let newArray = [], iterator1 = 0, iterator2 = 0;
    let length = array1.length + array2.length;

    for (let i = 0; i < length; i++) {
        if ((iterator1 !== array1.length) && (array1[iterator1] <= array2[iterator2])) {
            newArray.push(array1[iterator1]) ;
            iterator1++;
        } else {
            newArray.push(array2[iterator2]);
            iterator2++;
        } 
        
    }

    return newArray;

}

mergeArray(sortedArray2, sortedArray1);

//finalSortedArray = [0, 1, 2, 3, 3, 5, 6, 7, 9, 12, 26, 28, 30, 40, 50]


///////////// Question 13 - Flatten Input ///////////////

let input = [{x: 7, y:[1, 2, 4]}, {x: 19, y: [9 ,5,2]}]
// Output -> [7, 1, 2, 4, 19, 9, 5,2]


function flattenInput(input){
let res = [];
  input.forEach(element => { 
    if( element.x !== undefined){
      res.push(element.x)
    }
    if( element.y !== undefined){
      res.push(...element.y)
    }
  })
  return res;
}

console.log(flattenInput(input));

////////  Question 14 - Remove two highest numbers from array ///////
var arr= [2, 8, 7, 1, 5];
// Output : arr[]= [2 1 5 ]

function modifyArray(input){
  let highest = -99999, secondHighest = -99999;

  for (let i = 0; i < input.length; i++) {
    if (input[i] > highest) {
      secondHighest = highest;
      highest = input[i];
    } else if(input[i] > secondHighest) {
      secondHighest = input[i];
    }
  }

  for (let i = 0; i < input.length; i++) {
    
  }
}

console.log(modifyArray(input));


/////////////////// Question 15 - Modify Input /////////////////

var arr = [1,2,3, 4];        // input
function modify(arr){
return arr.map((element) => {
    return {[element*element] : element};
});
}
console.log(modify(arr));     // output - [{1:1}, {4:2}, {9:3}, {16: 4}]

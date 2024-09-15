///////////////////////

var a = 10;
{
  var a = -10;
}
let b = a;
{
  let b = -20;
}

console.log(b); // -10

///////////////////////

for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
} /// 3 3 3

for (var i = 0; i < 3; i++) {
  function a(b) {
    setTimeout(function () {
      console.log(b);
    }, 1000);
  }
  a(i);
}

///////////////////////
console.log("start"); // 1

setTimeout(() => {
  console.log("setTimeout"); //4
}, 0);

Promise.resolve().then(() => {
  console.log("resolve"); // 3
});

console.log("end"); // 2

///////////////////////

function x() {
  let a = 10;

  function y() {
    let b = 20;

    function z() {
      c = 30; // declared as global variable, it can be accessed from anywhere, no scope

      console.log(a, b, c);
    }

    b = 30;

    return z;
  }

  a = 20;

  return y;
}

const innerZ = x()();

innerZ(); // 20 30 30
console.log(c);

///////////////////////

const Obj = {
 KEY1: 'A',
 KEY2: 'B',
 KEY3: 'C',
 KEY4: 'D'
} as const

// Create a type that extracts the keys of this object as a union
// Create a type that extracts the values of this object as a union

// Keys type -> KEY1 | KEY2 | KEY3 | KEY4
// Values type -> A | B | C | D

// Type StringOrNum = string | number

// Const a: StringOrNum = 6, ‘str’, {}

// Type key : {...}
// Type value : Obj.KEY1 | Obj.KEY2 | Obj.KEY3 | Obj.KEY4
// Type Obj = {[Key: key] : [Value: value]}

//Ans
type Keys = keyof typeof Obj;
type Values = typeof Obj[Keys];

//Create a function memoizeOne that takes a function as an argument and memoizes it. That is, whenever the arguments passed to the memoized function are repeated in another invocation, the memoized function should return a cached result instead of executing again.

const add = (a, b) => a + b;

const memoizedAdd = memoizeOne(add);
memoizedAdd(1, 2); // Execute -> Result : 3
memoizedAdd(2, 4); // Execute -> Result : 4
memoizedAdd(1, 2); // Should return cached result -> Result : 4

function memoizeOne(fn) {
  const cache = {};

  return function (...args) {
    const id = JSON.stringify(...args);
    if (cache[id]) {
      return cache[id];
    }
    cache[id] = fn(...args);
    return cache[id];
  };
}

//Write a function to check whether a string is a palindrome or not using recursion in Javascript ABA, ABBA

function isPalindrome(str) {
  if (str.length < 2) {
    return true;
  } else {
    if (str[0] !== str[str.length - 1]) return false;
    return isPalindrome(str.slice(1, str.length - 1));
  }
}

console.log(isPalindrome("ABBA"));

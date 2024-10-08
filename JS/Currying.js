function sum(a) {
  // Inner function to keep accepting arguments
  const innerSum = (b) => {
    if (b !== undefined) {
      // Return another function that adds the next argument
      return sum(a + b);
    }
    // If no argument is passed, return the accumulated sum
    return a;
  };

  return innerSum;
}

// Usage:
console.log(sum(1)(2)(3)()); // Output: 6
console.log(sum(5)(10)(15)()); // Output: 30
console.log(sum(1)(2)(3)(4)(5)()); // Output: 15

// Create a curry function that accepts 5 arguments (Q - try to do it for infinite arguments)

const ARGS_LEN = 5;
const sum = (...args) => {
  if (args.length === ARGS_LEN) {
    return args.reduce((total, num) => total + num, 0);
  }
  const curryFn = (...args2) => {
    args = args.concat(args2);
    if (args.length === ARGS_LEN) {
      return args.reduce((total, num) => total + num, 0);
    }
    return curryFn;
  };
  return curryFn;
};

console.log(sum(1, 2, 3, 4, 5));
console.log(sum(1)(2, 3, 4, 5));
console.log(sum(1, 2)(3, 4)(5));
console.log(sum(1)(2)(3)(4, 5));
console.log(sum(1)(2)(3)(4)(5)(6)); //error

// Curry function that returns the sum of previous values (Use closure)

const curryFunc = () => {
  let prevSum = 0;

  return (newValue = 0) => {
    prevSum += newValue;
    return prevSum;
  };
};

const sumFn = curryFunc();
console.log(sumFn(3));
console.log(sumFn(2));
console.log(sumFn(5));
console.log(sumFn(7));
console.log(sumFn());

// Curry function that takes infinite input

const curryFunc1 = () => {
  let prevSum = 0;

  const recursion = (...newValue) => {
    if (newValue.length == 0) {
      return prevSum;
    }
    prevSum = newValue.reduce((prev, next) => prev + next, prevSum);
    return recursion;
  };

  recursion.reset = () => {
    prevSum = 0;
  };

  return recursion;
};

const sumFn1 = curryFunc1();
console.log(sumFn1(3)(4)(2)());
console.log(sumFn1(3)(1)(2)());
sumFn1.reset();
console.log(sumFn1(3)(4, 5)(2)());

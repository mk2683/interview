console.log("hi");

// _.chunk(['a', 'b', 'c', 'd'], 2);
// // => [['a', 'b'], ['c', 'd']]

// _.chunk(['a', 'b', 'c', 'd'], 3);
// // => [['a', 'b', 'c'], ['d']]

// function chunk(arr, size) {
//   let result = [];
//   let chunkArr = [];

//   for (let i = 0; i < arr.length; i++) {
//     chunkArr.push(arr[i]);
//     if (chunkArr.length >= size) {
//       result.push([...chunkArr]);
//       chunkArr.length = 0;
//     }
//   }

//   if (chunkArr.length > 0) result.push([...chunkArr]);

//   return result;
// }
// console.log(chunk(['a', 'b', 'c', 'd'], 1));

const profile = {
  name: { firstName: "John", lastname: { lastA: "aaa", lastB: "ssss" } },
  age: 30,
  email: "john.doe@example.com",
};

const businessDetails = {
  name: {
    firstName: "dsd",
    lastname: { lastA: "bbbb", lastB: "dddd" },
    fullName: "dsd Dddoe",
  },
  company: "OpenAI",
  position: "Software Engineer",
  email: "john.doe@openai.com", // This will overwrite the email in profile
};

const pollyfillAssign = function (target, source) {
  if (!source) return target;
  for (let key in source) {
    if (typeof source[key] !== "object") {
      console.log("not obj", key, source[key]);
      target[key] = source[key];
    } else {
      if (Array.isArray(source[key])) {
        console.log("array", key, source[key]);
        target[key] = [...source[key]];
      } else {
        console.log("obj", key, source[key]);
        pollyfillAssign(target[key] || {}, source[key]);
      }
    }
  }
  return target;
};

console.log(pollyfillAssign(profile, businessDetails));

// console.log(pollyfillAssign({ a: 1, b: 2 }, { b: 4, c: 5 }));

// Object.prototype.myBind = function (newObj, ...args) {
//   newObj.method = this;

//   return function () {
//     newObj.method(...args);
//   };
// };

// let obj = {
//   name: "Mohit",
//   print: function (age, place) {
//     console.log(this.name, age, place);
//   },
// };

// let newObj = {
//   name: "John",
// };

// let printName = obj.print.myBind(newObj, 26, "delhi");

// console.log(printName());

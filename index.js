// // console.log("Hi");

// const DummyAPI = (wait) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (wait > 2000) {
//         reject(wait);
//       }
//       resolve(wait);
//     }, wait);
//   });
// };

// const apis = [DummyAPI(1000), DummyAPI(2000), DummyAPI(3000)];

// const promiseAll = (apis) => {
//   const result = [];
//   return new Promise((resolve, reject) => {
//     apis.forEach((api, index) => {
//       api.then((res) => {
//         result[index] = res;
//         if (index === apis.length - 1) {
//           resolve(result);
//         }
//       });
//     });
//   });
// };

// promiseAll(apis)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => console.log(err));

function parent() {
  let result = 0;

  return function child() {
    console.log(++result);
  };
}

const newchild = parent();
newchild();
newchild();

console.log(a);
var a = 10;

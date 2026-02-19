import "./styles.css";
import React from "react";

const ChildMemo = React.memo(ChildComponent);

export default function App() {
  const [count, setCount] = React.useState(0);
  const [lastCount, setLastCount] = React.useState(0);

  shouldComponentUpdate() {
    if (count !== lastCount) {
      return true;
    }
  }
  return (
    <ChildMemo
      count={count}
  );
}

function ChildComponent({ count }) {
  return <div>Count: {count}<div>;
}

// const obj = {
//   5: 25,
//   4: 16,
//   3: 9,
//   4: 16,
//   6: 36,
// };

// const obj1 = {
//   5: 25,
//   4: 16,
//   3: 9,
//   4: 16,
//   6: 36,
// };

// // const obj1 = obj;
// // obj1[4] = 10;

// function shallowComparision() {
//   return obj === obj1;
// }

// console.log(shallowComparision());

// function memoization(num) {
//   // let count = 5;
//   // let cache = {};
//   // if (cache[num]) {
//   //   return cache[num];
//   // } else {
//   //   cache[num] = num * num;
//   //   return cache[num];
//   // }
// }

// console.log(memoization(4)); // 5, 4, 5, 3, 4, 6, 8, 9, 10, 9, 6

// const DummyAPI = (time) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(time);
//     }, time);
//   });
// };

// const tasks = [DummyAPI(5000), DummyAPI(500), DummyAPI(3000)];

// const myPromise = (tasks) => {
//   let output = [];
//   return new Promise((resolve, reject) => {
//     tasks.forEach((task, index) => {
//       task
//         .then((data) => {
//           console.log(data);
//           // output.push(data);
//           output[index] = data;
//           if (output.length === tasks.length) {
//             resolve(output);
//           }
//         })
//         .catch((err) => reject(err));
//     });
//   });
// };

// myPromise(tasks).then((data) => console.log(data));

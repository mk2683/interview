// const pubsub = (function () {
//   const data = {};

//   const publish = (event, value) => {
//     if (data[event]) {
//       // console.log(data[event]);
//       const publishNow = data[event];
//       publishNow.forEach((cb) => {
//         // console.log(cb.def);
//         cb.def(value);
//       });
//     }
//   };

//   const randomId = () => {
//     return Math.floor(Math.random() * 1000);
//   };

//   const subscribe = (event, cb) => {
//     const id = randomId();
//     if (data[event]) {
//       data[event].push({ id: id, def: cb });
//     } else data[event] = [{ id: id, def: cb }];

//     return { event: event, id: id };
//   };
//   const unsubscribe = (subInfo) => {
//     data[subInfo.event] = data[subInfo.event].filter(
//       (sub) => subInfo.id !== sub.id
//     );
//   };
//   return {
//     publish,
//     subscribe,
//     unsubscribe,
//   };
// })();

// // console.log(pubsub);

// const sub1 = pubsub.subscribe("water", (data) => {
//   console.log(`I am subscriber 1 and got the water, ${data}`);
// });

// const sub2 = pubsub.subscribe("water", (data) => {
//   console.log(`I am subscriber 2 and got the water, ${data}`);
// });

// const sub3 = pubsub.subscribe("water", (data) => {
//   console.log(`I am subscriber 3 and got the water, ${data}`);
// });

// const sub4 = pubsub.subscribe("water", (data) => {
//   console.log(`I am subscriber 4 and got the water, ${data}`);
// });

// pubsub.publish("water", "100L");

// pubsub.publish("gas", "15KG");

// const sub5 = pubsub.subscribe("gas", (data) => {
//   console.log(`I am subscriber 5 and got the gas, ${data}`);
// });

// pubsub.publish("water", "100L");
// pubsub.publish("gas", "15KG");

// console.log("sub2", sub2);

// const unsub1 = pubsub.unsubscribe(sub2);

// pubsub.publish("water", "100L");
// pubsub.publish("gas", "15KG");

// // console.log(pubsub.subscribers);

const testFunction = () => {
  let count = 0;

  return function () {
    count++;
    if (count < 4) {
      throw "failed";
    } else {
      return "hello";
    }
  };
};

let t = testFunction();
let c = circuitBreaker(t, 3, 200);

function circuitBreaker(cb, threshold, delay) {
  let count = threshold;
  let lastTime = null;

  return function () {
    try {
      if (count > 0) {
        const res = cb();
        console.log("res", res);
      } else {
        if (lastTime == null) {
          lastTime = Date.now();
        }
        const currentTime = Date.now();
        if (currentTime - lastTime < delay) {
          console.log("service unavailable");
        } else {
          count = threshold;
          lastTime = null;
          return cb();
        }
      }
    } catch (error) {
      count = count - 1;
      console.log("error");
    }
  };
}

c(); // "error"
c(); // "error"
c(); // "error"

// service is closed for 200 MS
c(); // "service unavailable"
c(); // "service unavailable"
c(); // "service unavailable"
c(); // "service unavailable"
c(); // "service unavailable"

// service becomes available after 300ms
setTimeout(() => {
  console.log(c());
}, 300); // "hello";

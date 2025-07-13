// Write Throttle for count

function throttle(fn, count) {
  let counter = 0;

  return (...args) => {
    counter++;
    if (counter == count) {
      fn.apply(this, args);
      counter = 0;
    }
  };
}

// Write Debounce for Time after certain delay

function throttle(fn, delay) {
  let timer = null;

  return (...args) => {
    if (!timer) {
      timer = setTimeout(() => {
        fn.apply(this, args);
        timer = null;
      }, delay);
    }
  };
}

// Write Throttle for leading time

function throttle(fn, delay) {
  let timerId, lastTime;

  return (...args) => {
    const now = Date.now();
    if (lastTime) {
      clearTimeout(timerId);
      timerId = setTimeout(() => {
        fn.apply(this, args);
        lastTime = now;
      }, delay - (now - lastTime));
    } else {
      fn.apply(this, args);
      lastTime = now;
    }
  };
}

// Write Throttle for leading time and trailing time
function throttle(fn, delay, trailing = false) {
  let timerId, lastTime;

  return (...args) => {
    const now = Date.now();
    if (lastTime) {
      clearTimeout(timerId);
      timerId = setTimeout(() => {
        fn.apply(this, args);
        lastTime = now;
      }, delay - (now - lastTime));
    } else if (trailing) {
      timerId = setTimeout(() => {
        fn.apply(this, args);
        lastTime = now;
      }, delay);
    } else {
      fn.apply(this, args);
      lastTime = now;
    }
  };
}

// document
//   .getElementById("btn")
//   .addEventListener("click", throttle(onClick, 4000, true));

// Write Throttle for that takes an array of tasks, limits, cb and delay;

const tasks = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function throttle(tasks, limit, cb, delay) {
  let taskQueue = [...tasks];
  let timerId, lastRanTime;

  return () => {
    const now = Date.now();

    if (!lastRanTime) {
      const args = taskQueue.splice(0, limit);
      cb.apply(this, args);
      lastRanTime = now;
    } else {
      clearTimeout(timerId);
      timerId = setTimeout(() => {
        const args = taskQueue.splice(0, limit);
        cb.apply(this, args);
        lastRanTime = now;
      }, delay - (now - lastRanTime));
    }
  };
}

const onClick = (...args) => {
  console.log("args: " + args);
};

document
  .getElementById("btn")
  .addEventListener("click", throttle(tasks, 2, onClick, 4000));

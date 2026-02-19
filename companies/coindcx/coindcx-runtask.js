// Code runTask such that concurrent number is passed and those level of functions are allowed to be resolved

function createRunTask(concurrencyLimit) {
  let runningCount = 0;
  const queue = [];
  async function run() {
    if (runningCount >= concurrencyLimit) {
      return; // Reached the concurrency limit, wait for others to finish
    }

    if (queue.length === 0) {
      return; // No more tasks to process
    }

    const promiseFunction = queue.shift();
    runningCount++;
    try {
      const result = await promiseFunction();
      console.log(result); // Output the result of the resolved promise
    } catch (error) {
      console.error(error); // Handle any errors
    } finally {
      runningCount--;
      run(); // Continue running tasks
    }
  }
  function push(promiseFunction) {
    queue.push(promiseFunction);
    run();
  }
  return { push };
}

// Test the runTask function with the provided promises
const promise1 = () => {
  return new Promise((res) => setTimeout(() => res("promise1"), 2000));
};

const promise2 = () => {
  return new Promise((res) => setTimeout(() => res("promise2"), 1000));
};

const promise3 = () => {
  return new Promise((res) => setTimeout(() => res("promise3"), 6000));
};

const promise4 = () => {
  return new Promise((res) => setTimeout(() => res("promise4"), 500));
};

const promise5 = () => {
  return new Promise((res) => setTimeout(() => res("promise5"), 600));
};

const runner = createRunTask(3);

runner.push(promise1); // Should run immediately
runner.push(promise2); // Should run immediately
runner.push(promise3); // Should run immediately
runner.push(promise4); // Should wait till either of the places out of 3 is resolved and then run this
runner.push(promise5); // Should wait till either of the places out of 3 is resolved and then run this

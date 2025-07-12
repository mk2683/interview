console.log("hi");
const fetchFeedData = (n) => {
  console.log("Fetching feed");
  return new Promise((res, reject) => setTimeout(() => reject(n), 500));
};

const fetchDataWithRetry = function (promiseFn, retry) {
  let retryCount = retry;
  function retryFunc(n) {
    return promiseFn(n)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        if (retryCount > 0) {
          retryFunc(n);
          retryCount--;
        } else {
          throw new Error(err);
        }
      });
  }
  return retryFunc;
};

const fetchFeedDataWithRetry = fetchDataWithRetry(fetchFeedData, 4);
fetchFeedDataWithRetry(5)
  .then(() => {
    console.log("Success");
  })
  .catch(() => {
    console.log("Error after retries");
  });

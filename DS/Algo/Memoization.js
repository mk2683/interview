// Memoize with closures
const sum = (a, b, c) => {
    return a + b + c;
};

const memoize = (fn) => {
    let cache = {};

    const cacheFunc = function (...args) {
        const key = JSON.stringify(args);
        //console.log(key);
        if(cache[key]) {
            console.log("fetching cache " + key);
            return cache[key];
        } else {
            console.log("Computing cache " + key);
            return cache[key] = fn(...args);
            //return cache[key] = fn.apply(this, args);
        }
    }

    cacheFunc.reset = () => {
        cache = {};
    }

    return cacheFunc;
}

const add = memoize(sum);
console.log(add(1, 2, 3, 4));
console.log(add(1, 2, 3, 4));
add.reset();
console.log(add(1, 2, 3, 4));


const factorial = memoize((x) => {
    if(x == 0) return 1;
    else return x * factorial(x - 1);
});
console.log(factorial(5));
console.log(factorial(6));
console.log(factorial(5));
factorial.reset();
console.log(factorial(5));
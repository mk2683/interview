// Pollyfill of reduce

Array.prototype.reduce = function(cb, initialValue){
    if(typeof cb !== 'function') throw new Error('Callback must be a function');

    const array = this;
    let accumulator = initialValue === undefined ? array[0] : initialValue;
    const index = initialValue === undefined ? 1 : 0;

    for(let i = index; i < array.length; i++) {
        accumulator = cb.call(undefined, accumulator, array[i], i, array);
    }

    return accumulator;
}

const nums = [1, 2, 3, 4];
console.log(nums.reduce((accumulator, current) => accumulator + current, 0));
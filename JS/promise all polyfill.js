// Pollyfill of Promise.all

const dummyAPI = (time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(time);
        }, time)
    })
}

const taskAPIs = [dummyAPI(1000), dummyAPI(2000), dummyAPI(3000)];

const promiseAll = (taskAPIs) => {
    return new Promise((resolve, reject) => {
        const output = [];
        taskAPIs.forEach((promise, index) => {
            promise.then(data => {
                output.push(data);
                if(index === taskAPIs.length - 1) resolve(output);
            }).catch(err => {
                reject(err);
            })
        });
    })
}

promiseAll(taskAPIs).then(data => {
    console.log(`output is ${data}`);
}).catch(err => {
    console.log(`error is ${err}`);
})

function abc() {
    console.log(this);
    const ab = () => {
        console.log(this);
    }
    ab();
}
abc();

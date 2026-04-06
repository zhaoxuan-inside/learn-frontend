function async_function(func, ...params) {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                let result = func(params);
                resolve(result);
            } catch (ex) {
                reject(ex);
            }
        }, 3000)
    });

    return promise;

}

function show(...params) {
    let result = "";

    for (let param of params) {
        if (Array.isArray(param)) {
            for (let ele of param) {
                result += ele;
            }
        } else {
            result += param;
        }
    }

    return result;

}

const promise = async_function(show, "hello", ", ", "promise", "!");
promise.then(
    result => {
        console.log(result);
    }
).catch(
    error => {
        console.log(error);
    }
).finally(
    () => {
        console.log("finish");
    }
)
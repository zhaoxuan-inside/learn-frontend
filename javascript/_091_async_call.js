function concat(...params) {
    let result = "";
    for (let param of params) {
        if (Array.isArray(param)) {
            for (let value of param) {
                result += value;
            }
        } else {
            result += param;
        }
    }
    return result;
}

function show(...strings) {
    let result = concat(strings);
    console.log(result);
}

// 延迟指定事件后执行方法
// setTimeout([function], [delay], ...[params])
// ⭐ 注意： 这里会将 ...params 作为一个数组传给 show 函数
setTimeout(show, 3000, "hello", ", ", "timeout", "!");
console.log("hello, js!")

// 指定周期循环执行方法
// setInterval([function], [delay], ...[params])
setInterval(show, 1000,  "hello", ", ", "interval", "!")
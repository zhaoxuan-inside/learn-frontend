# promise 对象
promise 对象，代表异步操作的最终完成（或失败）及其结果值  
相比传统的回调函数，Promise 能有效避免**回调地狱**，让异步代码更清晰、可维护  

# 状态
## pending
进行中：初始状态，既未成功也未失败  
## fulfilled
已成功：操作成功完成  
## rejected
已失败：操作失败  

⭐ **注意**：状态一旦从 pending 变为 fulfilled 或 rejected，就凝固了，不会再改变  

# 静态方法
| 方法 | 作用 |
|----|----|
| Promise.resolve(value) | 返回一个以给定值决议的 Promise |
| Promise.reject(reason) | 返回一个以给定原因拒绝的 Promise |
| Promise.all(iterable) | 所有 Promise 都成功时，返回成功数组；任一失败则立即返回失败原因 |
| Promise.allSettled(iterable)	| 等待所有 Promise 都敲定（成功/失败），返回每个结果的状态和值/原因 |
| Promise.race(iterable) | 返回第一个敲定的 Promise 的结果（无论成功或失败） |
| Promise.any(iterable) | 返回第一个成功的 Promise 的结果；全部失败才进入 reject（抛出 AggregateError） |

# 使用
## 创建 promise 对象
## 语法
const promise = new Promise(resolve, reject) {
    // 业务逻辑
    // 成功
    resolve("success");
    // 失败
    reject("failure");
}

## resolve
    系统提供的方法，调用该方法，标识业务正常直接完成进入到 fulfilled 状态
## reject
    系统提供的方法，调用该方法，标识业务运行异常，进入到 reject 状态

## 范例
```javascript
const promise = new Promise((resolve, reject) => {
  
  // 异步操作
  setTimeout(() => {
    const success = true;
    if (success) {
      resolve('成功的数据');  // 将状态变为 fulfilled
    } else {
      reject('失败的原因');   // 将状态变为 rejected
    }
  }, 1000);

});
```

## 消费 promise
### .then(onFulfilled, onRejected)
    注册成功和失败的回调  
### .catch(onRejected)
    专门处理失败，等价于 .then(null, onRejected)  
### .finally(onFinally)
    无论成功或失败都会执行常用于清理操作  

### 范例
```javascript
promise
  .then(result => {
    console.log('成功:', result);
  })
  .catch(error => {
    console.error('失败:', error);
  })
  .finally(() => {
    console.log('操作完成');
  });
```

# async + await
async 是 Promise 的语法糖，可以用同步代码的风格来写异步逻辑，底层依赖的仍然是 Promise  
⭐ **注意**：这里的异步只是为方法指定一个执行的时间，**不是和主逻辑并行**  

## 使用
### 定义业务方法
```javascript
function join_after_delay(...params) {
  setTimeout(() => {
    let result = "";
    for (let param of params) {
        result += param + ",";
    }
    return result;
  }, 1000);
}
```

### 包装 Promise 对象
```javascript
function promise_func(func, ...params) {
  return new Promise(
    (resolve) => {
      resolve(func(...params));
    }
  )
}
```

### 调用
```javascript
(async () => {
  try {
    const result = await promise_func(join_after_delay, "a", "b", "c");
    console.log(result);
  } catch(error) {
    console.log(error);
  } finally {
    console.log("end");
  }
})();
console.log("hello, async");
```
  结果会先打印"hello, async"，一分钟后打印"a,b,c," 和 "end";
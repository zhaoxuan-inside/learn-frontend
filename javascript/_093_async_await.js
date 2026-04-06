function join_after_delay(...params) {
    let result = "";
    for (let param of params) {
        result += param + ",";
    }
    return result;
}

function promise_func(func, ...params) {
  return new Promise(
    (resolve) => {
        setTimeout(() => {
            resolve(func(...params));
        }, 1000);
      
    }
  )
}

async function async_func(func, ...params) {
  try {
    return await promise_func(func, ...params);
  } catch(error) {
    console.log(error);
  } finally {
    console.log("end");
  }
}

console.log(async_func(join_after_delay, "a", "b", "c"));
console.log("hello, async");
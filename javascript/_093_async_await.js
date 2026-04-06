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
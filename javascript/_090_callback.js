function hello_callback (callBack, ...strings) {
    
    var result = "";

    for (let str of strings) {
        result = result + str;
    }

    callBack(result);

}

function show(str) {
    console.log(str);
}


hello_callback(show, "hello", ",", "world", "!")
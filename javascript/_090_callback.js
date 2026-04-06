function hello_callback (callBack, ...strings) {
    
    var result = "";

    for (let str in strings) {
        result = result + str;
    }

    callBack(result);

}

function show(str) {
    console.log(str);
}


hello_callback(show, "hello", ",", "world", "!")
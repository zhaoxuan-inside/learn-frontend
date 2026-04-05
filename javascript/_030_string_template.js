function format(strings, values) {

    var display = "";

    for (var idx=0; idx < strings.length; idx++) {
        display += strings[idx];
    }

    for (var idx=0; idx < values.length; idx++) {
        display += values[idx];
    }

    return display;
    
}

function echo() {
    document.getElementById("display").innerHTML = display
}

const names = ['zhangsan', 'lisi', 'wangwu']

display = format`报名人：${names}`
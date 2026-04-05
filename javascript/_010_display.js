function display_datetime() {
    document.writeln(Date())
}

function window_alert() {
    window.alert("Warning FBI")
}

function display_ele(ele_name, ...content) {
    document.getElementById(ele_name).innerHTML = content;
}
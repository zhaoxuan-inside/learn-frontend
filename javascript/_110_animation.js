function move(ele_name) {
    const ele = document.getElementById(ele_name);
    if (!ele) {
        return
    }

    if (ele._moveInterval) {
        clearInterval(ele._moveInterval); 
    }

    let pos = 0;
    const id = setInterval(() => {
        if (pos == 350) {
            clearInterval(id)
        } else {
            pos++;
        }
        ele.style.top = pos + 'px';
        ele.style.left = pos + 'px'
    }, 5)

}
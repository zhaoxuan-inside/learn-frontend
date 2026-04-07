// 构造函数
function Human(id, name, age, gender) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.gender = gender;
}

// 定义 check 方法
Human.prototype.check = function(id) {
    return this.id === id
}

// 定义 alive 方法
Human.prototype.alive = function() {
    console.log(this.name + " keep alive...");
}

let human = new Human(1, 'zhangsan', 18, 'male')
if (human.check(1)) {
    console.log('check success');
} else {
    console.log('check failure');
}

human.alive();
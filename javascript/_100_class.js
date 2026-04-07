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

// json 格式定义对象
let person = {
    id: 1,
    name: 'lisi',
    age: 18,
    gender: 'female'
}

// 对象属性访问
// 1. [对象].[属性名]
console.log(person.id);
// 2. [对象]["[属性名]""]
console.log(person['name']);
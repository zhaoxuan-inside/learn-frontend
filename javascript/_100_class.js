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

// 对象继承
function Student(stu_no, class_no, id, name, age, gender) {
    this.stu_no = stu_no;
    this.class_no = class_no;

    // 调用父类的构造函数，传入 this 将本对象和父类进行绑定，父类的 this 对象就会指向本对象，
    // 如果传 null 或 undefined ，在**非严格**模式下，相当于父类对象绑定了全局对象
    Human.call(this, id, name, age, gender);
}

stu = new Student('260101', '01', 2, 'lisi', 18, 'male');

console.log(stu.id)
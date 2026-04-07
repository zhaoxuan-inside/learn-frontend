// ES 6 之后定义类，包装了之前创建类的方法的语法糖

class Human {
    
    // 私有字段
    #id;

    constructor(id, name, age, gender) {
        this.#id = id;
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    check(id) {
        return this.#id === id;
    }

    alive() {
        console.log(this.name + ' keep alive...');
    }

    static build(id, name, age, gender) {
        return new Human(id, name, age, gender);
    }


}

let human = new Human(1, 'zhangsan', 18, 'male')
if (human.check(1)) {
    console.log('check success');
} else {
    console.log('check failure');
}

human.alive();
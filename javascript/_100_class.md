# 构造函数
js 定义类的方法
## 对比普通函数
- 构造函数函数名首字母大写
- 构造函数应该通过 new 的方式进行调用，普通函数通常通过 function_name() 的方式进行调用

构造函数又被称为`类对象`；

# prototype 属性
prototype 是 js 类对象的一个属性
prototype 属性是理解其面向对象编程和继承机制的核心
prototype 是一个普通的对象，类似于 map 的作用，记录`类对象`的方法

# call, apply, bing
## call
### 功能
- 立即执行函数
- 允许将当前对象传递
### 语法
[function_name].call([obj], ...args);  
obj: 任何对象  
在`继承`场景下，将`this`传入，实现继承;  

### apply
### 功能
- 立即执行函数  
- 参数以数组形式传递，数组的每一个元素作为`独立`参数传给函数;  

### 语法
[function_name].apply([obj], [[array]]);  
obj: 任何对象  

### 应用
数组是参数的方法调用  

## bind
### 功能
- 不立即执行，而是返回一个新的函数  
- 新函数可以稍后调用

### 语法
[function_name].bind([obj], ...args);

### 应用
回调方法  
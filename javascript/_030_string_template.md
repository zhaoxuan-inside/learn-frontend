# 模板字符串
1. 允许在字符串中b 嵌入表达式和变量；
2. 使用反引号(`)作为字符串的定届符；
3. 标签模板

# 表达式、变量和换行
`模板字符串支持${变量}
换行也支持，就像这样，不需要在文本中插入\n来进行换行
\`是定届符用来确定模板字符串的范围`

# 标签模板
## 定义标签模板处理方法
```javascript
function tag_func(strings, ...values) {
    console.log(strings);
    console.log(values);
    return null;
}

var num_1 = 10;
var num_2 = 20;

var result = tag_func`算术加法，结果是 ${num_1} 和 ${num_2}`;

```

'tag_func': 方法名；
"算术加法，结果是 ${num_1} 和 ${num_2}": 会被自动拆分成两部分
    1. ["算术加法，结果是 ", " 和 ", ""]  // 💫 注意末尾的空字符串
    2. [10, 20]  // num_1 和 num_2 这两个变量的内容

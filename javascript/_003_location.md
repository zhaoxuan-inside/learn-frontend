# location 对象
location 对象是浏览器提供的 **window** 对象的一个属性，也是 **document** 对象的属性
window.location === document.location
location 包含了当前页面 URL 的信息，并且允许**解析**、**修改**和**重定向**到新的地址

# 常用属性
## href
完整的 URL 字符串
## protocol
协议（含冒号）
## host
主机名 + 端口号(使用默认端口，就没有)
## hostname
主机名（不含端口）
## port
端口号（字符串）
## pathname
路径（以 / 开头）
## search
查询字符串（含 ?）
例如："?name=John"
### search 解析
```javascript
const params = new URLSearchParams(location.search);
const name = params.get("name"); 
// 设置 search 参数，更新页面
params.set("age", "18");
location.search = params.toString();
```
## hash
锚点部分（含 #）
例如："#section"
## origin
协议 + 主机名 + 端口（只读）

# 常用方法
## location.assign(url)
加载新文档（保留历史记录）
## location.replace(url)
替换当前文档（不保留历史）
## reload(force)
重新加载当前页面
## assign 和 replace 对比
使用 replace 后，用户无法通过浏览器的"后退"按钮回到原页面，适用于登录后的重定向等场景。

# 名词解释
## 锚点
用于标识页面内部的一个位置（通常是某个元素的 id），让浏览器在加载页面后自动滚动到该元素所在的位置
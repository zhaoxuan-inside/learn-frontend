# js 操作页面
js 操作页面的入口对象
1. [window 对象](./_001_window.md)  
    window 是浏览器环境的全局对象，代表浏览器窗口或标签页；是所有全局变量和函数的g容器，并提供了接操控窗口和页面的方法；
2. [document 对象](./_002_document.md)   
    DOM 操作：增删改查页面元素、修改内容/样式/属性
3. [location 对象](./_003_location.md)  
    URL 管理：页面跳转、刷新、获取参数
4. [history 对象](./_004_history.md)  
    历史记录：前进、后退、无刷新改变 URL
5. [navigator 对象](./_005_navigator.md)  
    环境信息：浏览器、设备、地理位置、在线状态
6. [storage 对象](./_006_storage.md)  
    本地数据：持久化存储用户数据

# 名词解释
## **同源**
源 = 协议 + 域名 + 端口  
协议、域名、端口存在不同就是`不同源`

## 同源策略
1. 同源的脚本可以相互访问彼此的资源；

## 跨域
前提：window.open(url, target, features) 方法可以打开一个新的标签页  
如果新的标签页是`不同源`的，则认为是跨域；

## 跨域限制
### 1. DOM 访问
1. 无法读取或修改另一个窗口或 iframe 的 document、window 属性、DOM 元素、全局变量  
2. 少数无害的方法可以执行
   - window.close()
   - window.focus()  
3. 可以进行通信  
    - postMessage
### 2. 网络请求
1. **一般** 不允许使用 `XMLHttpRequest` 或 `fetch()` 发起请求；  // 除非目标服务器明确允许
2. 即使请求成功，脚本也无法读取响应内容；
    - 
3. Cookie、LocalStorage、SessionStorage、IndexedDB
    - 读取或设置另一个源的 Cookie、Web Storage 数据会被拒绝。
    - 每个源的存储区域完全隔离，无法跨域访问。
    - ⭐ 注意：Cookie 可以通过 domain 属性设置为父域以在子域间共享，但仍是同域限制的一种放宽。
4. WebSocket
    - WebSocket 协议本身没有同源限制，但浏览器在建立连接时会发送 **Origin** 头，**服务器可以据此绝跨域握手**。
5. 脚本加载
    - 允许跨域加载 JavaScript 文件，并且脚本可以执行。这是 JSONP 的原理。
    - 脚本本身无法读取跨域资源的原始内容
6. Canvas 图像数据
    - 如果 Canvas 中绘制了跨域图片(例如 <img crossorigin="anonymous">) 且**服务器支持 CORS**，可以通过 getImageData/toDataURL 读取像素。
    - 如果图片来自其他源且未开启 CORS，Canvas 会被"污染"（tainted），无法调用读取数据的 API。
7. 其他允许的跨域操作
    - \<img\>、\<video\>、\<audio\>、\<iframe\>、\<link\>（CSS）等标签加载资源
    - 表单提交、页面跳转（location.href）、链接点击
    - window.postMessage 跨域通信  // ⭐ **注意**：需要双方配合验证 origin
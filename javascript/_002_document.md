# document 对象
- document 对象代表**当前窗口**或标签页中加载的**HTML 文档**
- document 是 DOM 的根节点，提供了操作页面内容的所有接口
- window 管**浏览器窗口**，document 管**窗口里的网页内容**

# 核心功能
## 查找元素
- document.getElementById
- document.querySelector
- document.querySelectorAll
- document.getElementsByClassName
## 创建元素
- document.createElement
- document.createTextNode
- document.createDocumentFragment
## 常用属性
- document.title
- document.cookie
- document.head
- document.body
- document.forms
- document.images
- document.links
    所有带 href 的 \<a\> 和 \<area\> 集合
- document.documentElement
- document.scripts
    所有 \<script\> 元素的集合
- document.URL
- document.referrer
- document.domain
- document.readyState
  - "loading": 加载中
  - "interactive":DOM 解析完成，但资源如样式图片可能还在加载
  - "complete": 全部加载完成
## 事件监听
- document.addEventListener
- document.removeEventListener
## 写入文档
- document.write
⭐ **注意**：不推荐在加载后使用
## 获取焦点/选区
- document.activeElement
- document.getSelection()

# 事件
## DOMContentLoaded
readyState 状态 loading -> interactive 时触发
## load
readyState 状态 interactive -> complete 时触发
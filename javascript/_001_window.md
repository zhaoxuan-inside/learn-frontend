
# window 对象
- 全局作用域：在浏览器中，var 声明的全局变量会成为 window 的属性。
- 可省略：调用 window 的方法时通常可以省略 window. 前缀，如 alert('hi') 等同于 window.alert('hi')。

## 功能分类
### 窗口尺寸与位置
1. window.innerWidth
    - 视口（viewport）的宽度/高度（包含滚动条）
2. window.outerWidth
    - 浏览器窗口的完整宽/高（含工具栏、边框）
3. window.scrollX
    - 文档**水平**滚动的像素数
4. window.scrollY
    - 文档**垂直**滚动的像素数
5. window.scrollTo([x], [y])
    - 滚动到指定坐标
6. window.scrollBy([dx], [dy])
    - 相对当前位置滚动
7. window.scrollIntoView()
    - 通常用于元素调用，但 window 上无此方法；让某个元素滚动到可视区域

### 弹窗与对话框
1. window.alert([message])
    - 警告框，仅显示信息
2. window.confirm([message])
    - 确认框，返回 true（确定）或 false（取消）
3. window.prompt([message], [devault_value])
    - 输入框，返回输入的字符串或 null

### 定时器与动画循环
1. window.setTimeout(fn, delay)
    - 延迟执行一次，返回定时器 ID
2. window.clearTimeout(id)
    - 取消 setTimeout
3. window.setInterval(fn, interval)
    - 周期性执行，返回定时器 ID
4. window.clearInterval(id)
    - 取消 setInterval
5. requestAnimationFrame(callback)
    - 在下一帧重绘前执行，用于流畅动画
6. cancelAnimationFrame(id)
    - 取消 requestAnimationFrame

### 窗口打开与关闭
1. window.open([url], [target], [features])
    - 打开新窗口/标签页，返回新窗口的 window 对象
    - ⚠️ [跨域问题]()
2. window.close()
    - 关闭当前窗口（需允许脚本控制）
3. window.opener
    - 获取打开当前窗口的原始窗口对象（可用于跨窗口通信）
4. window.stop()
    - 停止加载页面

### 历史与导航
1. window.location
    - 等同于 location 对象
2. window.history
    - 等同于 history 对象
3. window.navigator
    - 等同于 navigator 对象

### 其他
1. window.name
2. window.top
    - 返回最顶层窗口（用于 iframe 场景）
3. window.parent
    - 返回父窗口（用于 iframe 场景）
4. window.self
    - 指向当前窗口本身
5. window.frames
    - 获取页面中所有子框架（iframe）的集合
6. window.length
    - 当前页面中 iframe 的数量
7. window.closed
    - 只读，表示窗口是否已关闭（用于检测 open 打开的窗口）

# window 事件监听
## 语法
window.addEventListener('[event]', () => {
    <!-- work -->
});

## 事件
1. load 
    - 整个页面及所有依赖资源（样式、图片等）完全加载完成
2. DOMContentLoaded
    - 初始 HTML 解析完成，无需等待样式、图片等（通常在 document 上监听）
3. resize
    - 窗口尺寸改变
4. scroll
    - 窗口滚动（注意性能，常用被动事件）
5. beforeunload
    - 即将卸载页面（可弹出确认提示）
6. unload
    - 页面完全卸载时（尽量少用）
7. hashchange
    - URL 哈希（# 后面的部分）改变
8. popstate
    - 历史记录条目改变（与 history.pushState 配合）
9. error
    - 脚本错误或资源加载失败
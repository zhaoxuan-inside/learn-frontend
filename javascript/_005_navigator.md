# navigator 对象
navigator 对象是 **Web API** 的一个**全局对象**
提供了关于浏览器**运行环境**的信息
通过 navigator 对象，可以获取浏览器品牌、版本、操作系统、设备类型、语言设置、网络状态等信息
常用于设备检测、功能适配或统计分析

# 常用属性

## navigator.userAgent
浏览器用户代理字符串（最常用，但**可被伪造**）

## navigator.language
浏览器的首选语言

## navigator.languages
浏览器接受的所有语言（按优先级排序）

## navigator.cookieEnabled
是否启用 Cookie

## navigator.onLine
浏览器是否处于联网状态

## navigator.hardwareConcurrency
CPU 逻辑核心数

## navigator.maxTouchPoints
触摸屏最大触点数量（0 表示无触摸屏）

## navigator.connection
网络连接信息（返回 NetworkInformation 对象，需注意兼容性）

# 常用方法

## navigator.geolocation.getCurrentPosition()
获取设备当前位置（需用户授权）

## navigator.mediaDevices.getUserMedia()
请求访问摄像头 / 麦克风

## navigator.clipboard.writeText()
将文本写入剪贴板

## navigator.sendBeacon()
异步发送小量数据（常用于页面关闭前的统计上报）

## navigator.vibrate()
使设备振动（移动端，需用户交互）

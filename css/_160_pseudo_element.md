> [!cite]+ 阅读须知
> 本文中通过 [] 框起来的元素是变量，需要使用相应的内容进行替换

CSS 伪元素是一种特殊的选择器，它可以在不改变 HTML 结构的情况下对页面元素的特定部分进行样式设置。

> [!important]+ 伪元素语法
> ```css
> [selector]::[pseudo-element] {
>    [property]: value
> }
> ```

> [!important]+ CSS 类也可以使用伪元素
> ```css
> [selector].class::[pseudo-element] {
>    [property]: [value]    
> }

所有CSS伪类/元素
选择器|示例|示例说明
:link|a:link|选择所有未访问链接
:visited|a:visited|选择所有访问过的链接
:active|a:active|选择正在活动链接
:hover|a:hover|把鼠标放在链接上的状态
:focus|input:focus|选择元素输入后具有焦点
:first-letter|p:first-letter|选择每个<p> 元素的第一个字母
:first-line|p:first-line|选择每个<p> 元素的第一行
:first-child|p:first-child|选择器匹配属于任意元素的第一个子元素的 <p> 元素
:before|p:before|在每个<p>元素之前插入内容
:after|p:after|在每个<p>元素之后插入内容
:lang(language)|p:lang(it)|为<p>元素的lang属性选择一个开始值
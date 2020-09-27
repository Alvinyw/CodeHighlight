# 代码高亮插件： CodeHighlight

## 一、通过 Node 引用

```javascript
npm i alvin-codehighlight
```

在 VUE 的 SPA 中的使用示例：

```html
<template>
  <div id="main">
    <pre class="CodeHighlight">
&lt;html>
&lt;head>
&lt;title>Thumbnail Navigation&lt;/title>
&lt;meta name ="distribution" content="global" />
&lt;link type= "text/css" rel="stylesheet" href="assets/css/bootstrap.min.css"/>
&lt;style type="text/css" >
//...
&lt;/style>
&lt;/head>
&lt;body>
&lt;div id="image-container" style="width: 150px; height: 525px; border: solid 1px #ddd; display: inline-block">
    &lt;div id="black-bar" style="width: 100%; padding: 10px 0;">
        &lt;button onClick="cancelClick()" style="margin-left: 100px;">cancel&lt;/button>
        &lt;img class="img-responsive" src="../../" title="codehightlight" alt="codehightlight"/>
        &lt;p>Dynamic Web TWAIN is a browser-based document scanning SDK specifically designed for web applications. &lt;/p>
    &lt;/div>
&lt;/div>
&lt;button id="btn-grab" style="margin-left: 400px; display: block;" onClick="onBtnGrabClick()">Grab a Snapshot&lt;/button>
&lt;br />
&lt;script type="text/javascript" src="DCSResources/dynamsoft.camera.config.js"> &lt;/script> 
&lt;script type="text/javascript">
	for(var i=0;i&lt;10;i++){
		if(iArray[i]>20){
			//...
		}	 
	}
&lt;/script>
&lt;/body>
&lt;/html>
</pre>
  </div>
</template>
<script>
import createCodeHighlight from "alvin-codehighlight";
export default {
  name: "Codehighlight",
  data() {
    return {
      codehighlight: "",
    };
  },
  mounted() {
    var cfg = {
      //特殊的 element 样式
      jsColor: "#d10303",
      cssColor: "#f408af",
      metaColor: "#c1ad04",
      //特殊的 attribute 样式
      idColor: "#fe8e14",
      claColor: "green",
      styColor: "pink",
    };
    this.codehighlight = createCodeHighlight(cfg);
  },
};
</script>
```

## 二、通过 script 脚本引入
```html
<script type="text/javascript" src="jquery.min.js"></script>
<script type="text/javascript" src="CodeHighlight.min.js"></script>
<pre class="CodeHighlight">
// ...
</pre>
```
引入上面两个文件之后，即可调用该插件了：
```javascript
$(function(){
	// 插件调用
	$().codeHighlight({
		//特殊的 element 样式
		jsColor: "#d10303",
		cssColor: "#f408af",
		metaColor: "#c1ad04",
		//特殊的 attribute 样式
		idColor: "#fe8e14",
		claColor: "green",
		styColor: "pink"
	});
});
```

## 三、codeHighlight 提供的参数配置

  ```javascript
  $().codeHighlight({
		codePre: ".CodeHighlight", //需美化代码的容器，可为 class/id/element
		addElements: "", //添加需要美化的标签（div,span等），例："br,hr"（虽用了正则去除空格，但标签名之间最好不要有空格）
		addAttr: "", //添加需要美化的属性（id、title等）
		//默认的 style 参数
		elemColor: "#006699", //默认的标签颜色
		attrColor: "gray", //默认的属性颜色
		strColor: "blue", //默认的字符串颜色
		plainColor: "#333", //默认的字符（如 <、>、=等）颜色
		//特殊的 element 样式
		jsColor: "", //<script> 标签的颜色
		cssColor: "", //<style> 标签的颜色
		metaColor: "",
		//特殊的 attribute 样式
		idColor: "", //id 的颜色
		claColor: "", //class 的颜色
		styColor: "" //style 的颜色
	});
	
	//默认美化的标签有：("html", "head", "title", "meta", "link", "style", "script", "body", "div", "a", "p", "span", "input", "button", "select", "option", "link", "img", "br", "ul", "ol", "li", "i", "h1", "h2", "h3", "h4")
	//默认美化的属性有：("id", "class", "target", "content", "style", "value", "alt", "title", "type", "src", "href", "rel", "dir", "lang", "name", "onBlur", "onClick", "onFocus", "onKeyUp", "onKeyDown", "onKeyPress")
  ```
### 参数说明：
- **addElements**：添加不在默认美化数组里的标签（如 header 等 html5 标签）；
- **addAttr**：添加不在默认美化数组里的属性；
  
### 注意事项
- **=** 号两边不要有一个以上的空格；
- **">** 之间不要有一个以上的空格；
- **"/>** 之间不要有一个以上的空格；
- 属性值前需有至少一个空格；
  
## 四、插件的功能
- 能将中文标点符号转化为英文标点符号，如中文双引号和单引号；
- 能将 &-amp;lt; 或是 &-amp;amp;lt; 甚至是 &-amp;amp;amp;amp;lt;；转化为 &-lt;；
- 可以为 script、css、id、class、style 等定义不同的颜色；
- 能满足常见的代码高亮需求；

### 插件的优缺点
- 优点：轻量，核心 JS 压缩后仅 2 KB；
- 缺点：不能显示代码行号；对空格的处理不够强大；

## 五、插件的 Demo
- [codeHighlight 默认](https://alvinyw.github.io/Blog/CodeHighlight/CodeHighlight.html)
- [codeHighlight 传参](https://alvinyw.github.io/Blog/CodeHighlight/CodeHighlight-2.html)

### 博客链接
[写了一个简单轻量的代码高亮 JS 插件](http://alvinwp.com/seo/1364)

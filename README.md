# 代码高亮插件： CodeHighlight

## 插件的用法
- 因为该插件是基于 jQuery 的，所以使用前要先引入 jQuery;
- 引入插件的核心 js 文件 – CodeHighlight.min.js；
- 引入对应的样式文件，或将相关样式片段拷贝到自己的 css 文件中，因为只有五六行样式代码；
- 将需美化的代码放在 **&lt;pre id="CodeHighlight">&lt;/pre>** 中：
  <pre><code>&lt;pre id="CodeHighlight"> 
// code... 
&lt;/pre>
</code></pre>
  
## 插件的功能
- 能将中文标点符号转化为英文标点符号，如中文双引号和单引号；
- 能将 &-amp;lt; 或是 &-amp;amp;lt; 甚至是 &-amp;amp;amp;amp;lt;；转化为 &-lt;；
- 能满足常见的代码高亮需求；

## 插件的优缺点
- 优点：轻量，核心 JS 压缩后仅 2 KB；
- 缺点：不能显示代码行号；

## 插件的 Demo
[Demo](https://alvinyw.github.io/Blog/CodeHighlight/CodeHighlight.html)

## 插件的详情
[笔记](http://alvinwp.com/seo/1364)
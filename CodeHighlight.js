(function ($) {
    $.fn.codeHighlight = function (options) {
        var defaults = {
			
		},
		
		//把传入的参数 options 合并到 defaults 里并赋给 settings；若 options 里的参数与 defaults 有重复，则 options 会覆盖 defaults 里的参数
		settings = $.extend(defaults, options), 
		//
		elementsName = new Array("html", "head", "title", "body", "div", "button", "a", "p", "span", "style", "script", "input", "link", "meta", "img", "br", "hr"),
		//
		elementsAttr = new Array("content", "id", "value", "alt", "title", "style", "type", "src", "href", "rel", "dir", "lang", "name", "onBlur", "onClick", "onclick", "onFocus", "onKeyUp", "onKeyDown", "onKeyPress");
		
		/*将 &amp; 转换成 &（因为有时 &lt; 和 &gt; 里的 & 会被误操作转义成 &amp;）*/
		do {
			$("#CodeHighlight").html($("#CodeHighlight").html().replace(/&amp;/g, "&"))
		} while (-1 != $("#CodeHighlight").html().indexOf("&amp;"));
		
		/*将中文的双引号 “” 转换成英文的双引号 ""*/
		do {
			$("#CodeHighlight").html($("#CodeHighlight").html().replace("“", '"').replace("”", '"'))
		} while (-1 != $("#CodeHighlight").html().indexOf("”"));
		
		/*将中文的单引号 ’‘ 转换成英文的单引号 '*/
		do {
			$("#CodeHighlight").html($("#CodeHighlight").html().replace("‘", "'").replace("’", "'"))
		} while (-1 != $("#CodeHighlight").html().indexOf("’"));
		
		/*遍历数组 elementsName 为标签名加上 class = "keyword"*/
		for (var e = 0; e < elementsName.length; e++){
			
			do {
				/*将 &lt;div 替换成 &lt;<span class="keyword">div</span>*/
				$("#CodeHighlight").html($("#CodeHighlight").html().replace("&lt;" + elementsName[e], '&lt;<span class="keyword">' + elementsName[e] + "</span>"));
				
				/*将 &lt;/div 替换成 <&lt;<span class="plain">/</span><span class="keyword">div</span>*/
				$("#CodeHighlight").html($("#CodeHighlight").html().replace("&lt;/" + elementsName[e], '&lt;<span class="plain">/</span><span class="keyword">' + elementsName[e] + "</span>"))
				
			} while (-1 != $("#CodeHighlight").html().indexOf("&lt;" + elementsName[e]));
			
		}
		
		/*遍历数组 elementsAttr 为标签属性加上 class = "color1"*/
		for (var e = 0; e < elementsAttr.length; e++){
			
			do {
				$("#CodeHighlight").html($("#CodeHighlight").html().replace(elementsAttr[e] + '="', '<span class="color1">' + elementsAttr[e] + '</span><span class="plain">=</span><span class="string">"'));
				
				$("#CodeHighlight").html($("#CodeHighlight").html().replace('" ', '"</span> ')), $("#CodeHighlight").html($("#CodeHighlight").html().replace('"&gt;', '"</span>&gt;'));
				
			} while (-1 != $("#CodeHighlight").html().indexOf(elementsAttr[e] + '="'));
		
		}
		
		$("#CodeHighlight").html($("#CodeHighlight").html().replace(/&lt;/g, '<span class="plain">&lt;</span>').replace(/&gt;/g, '<span class="plain">&gt;</span>').replace(/&frasl;/g, '<span class="plain">&frasl;</span>'		));
	
	}
	// 插件调用
	$("body").codeHighlight();
});
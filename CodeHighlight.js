(function ($) {
    $.fn.codeHighlight = function (options) {
        var defaults = {
			codePre: "#CodeHighlight", //需美化代码的容器，可为 class/id/element
			
			cdsbdssc: ""
		},
		
		//把传入的参数 options 合并到 defaults 里并赋给 settings；若 options 里的参数与 defaults 有重复，则 options 会覆盖 defaults 里的参数
		settings = $.extend(defaults, options), 
		
		//需要添加样式的标签名
		elementsName = new Array("html", "head", "title", "body", "div", "button", "a", "p", "span", "style", "script", "input", "link", "meta", "img", "br", "hr"),
		
		//需要添加样式的属性名
		elementsAttr = new Array("content", "id", "value", "alt", "title", "style", "type", "src", "href", "rel", "dir", "lang", "name", "onBlur", "onClick", "onclick", "onFocus", "onKeyUp", "onKeyDown", "onKeyPress");
		
		$("body " + settings.codePre).each(function(index, element) {
            
		
			/*将 &amp; 转换成 &（因为有时 &lt; 和 &gt; 里的 & 会被误操作转义成 &amp;）*/
			do {
				$(this).html($(this).html().replace(/&amp;/g, "&"))
			} while (-1 != $(this).html().indexOf("&amp;"));
			
			/*将中文的双引号 “” 转换成英文的双引号 ""*/
			do {
				$(this).html($(this).html().replace("“", '"').replace("”", '"'))
			} while (-1 != $(this).html().indexOf("”"));
			
			/*将中文的单引号 ’‘ 转换成英文的单引号 '*/
			do {
				$(this).html($(this).html().replace("‘", "'").replace("’", "'"))
			} while (-1 != $(this).html().indexOf("’"));
			
			/*遍历数组 elementsName 为标签名加上 class = "keyword"*/
			for (var e = 0; e < elementsName.length; e++){
				
				do {
					/*将 &lt;div 替换成 &lt;<span class="keyword">div</span>*/
					$(this).html($(this).html().replace("&lt;" + elementsName[e], '&lt;<span class="keyword">' + elementsName[e] + "</span>"));
					
					/*将 &lt;/div 替换成 <&lt;<span class="plain">/</span><span class="keyword">div</span>*/
					$(this).html($(this).html().replace("&lt;/" + elementsName[e], '&lt;<span class="plain">/</span><span class="keyword">' + elementsName[e] + "</span>"))
					
				} while (-1 != $(this).html().indexOf("&lt;" + elementsName[e]));
				
			}
			
			/*遍历数组 elementsAttr 为标签属性加上 class = "color1"*/
			for (var e = 0; e < elementsAttr.length; e++){
				
				do {
					$(this).html($(this).html().replace(elementsAttr[e] + '="', '<span class="color1">' + elementsAttr[e] + '</span><span class="plain">=</span><span class="string">"'));
					
					$(this).html($(this).html().replace('" ', '"</span> ')), $(this).html($(this).html().replace('"&gt;', '"</span>&gt;'));
					
				} while (-1 != $(this).html().indexOf(elementsAttr[e] + '="'));
			
			}
			
			$(this).html($(this).html().replace(/&lt;/g, '<span class="plain">&lt;</span>').replace(/&gt;/g, '<span class="plain">&gt;</span>').replace(/&frasl;/g, '<span class="plain">&frasl;</span>'		));
		
		});
		
	
	}
	
})(jQuery);

$(function(){
	// 插件调用
	$().codeHighlight();
});
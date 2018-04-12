(function ($) {
    $.fn.codeHighlight = function (options) {
        var defaults = {
			codePre: "#CodeHighlight", //需美化代码的容器，可为 class/id/element
		    addElements: "", //添加需要美化的标签（div,span等），例："br,hr"（虽用了正则去除空格，但最后元素名之间不要有空格）
			addAttr: "", //添加需要美化的属性（id、title等）
			
			cdsbdssc: ""
		},
		
		//把传入的参数 options 合并到 defaults 里并赋给 settings；若 options 里的参数与 defaults 有重复，则 options 会覆盖 defaults 里的参数
		settings = $.extend(defaults, options), 
		
		//默认需要添加样式的标签名
		defaultElementsArray = new Array("html","head","title","meta","link","style","script","body", "div", "button", "a", "p", "span", "script", "input", "link", "meta", "img", "br"),	
		//默认需要添加样式的属性名（class 需要最先检测，不然会出现死循环，因为后面添加样式时会不断增加 class）
		defaultAttrArray = new Array("id","content","style","value", "alt","title", "type", "src", "href", "rel", "dir", "lang", "name", "onBlur", "onClick", "onclick", "onFocus", "onKeyUp", "onKeyDown", "onKeyPress");
		
		
		//将 addElements 去掉所有空格之后再转化成数组: "html,head" 转化为 ["html","head"]
		var addElementsArray = settings.addElements.replace(/\s/g,"").split(",");
		//清空数组 addElementsArray 中的空值：[""] 转化为 []
		addElementsArray = $.grep(addElementsArray, function(n) {return $.trim(n).length > 0;}); 
		
		
		//将 addAttr 去掉所有空格之后再转化成数组: "id,style" 转化为 ["id","style"]
		var addAttrArray = settings.addAttr.replace(/\s/g,"").split(",");
		//清空数组 addAttrArray 中的空值：[""] 转化为 []
		addAttrArray = $.grep(addAttrArray, function(n) {return $.trim(n).length > 0;});  
		
		
		//将数组 defaultElementsArray 和 addElementsArray 合并、去重后赋值给 elementsArray，得到最终需要美化的标签数组
		var elementsArray = $.unique(defaultElementsArray.concat(addElementsArray));
		//将数组 defaultAttrArray 和 addAttrArray 合并、去重后赋值给 attrArray，得到最终需要美化的属性数组
		var attrArray = $.unique(defaultAttrArray.concat(addAttrArray));
		
		
		$("body " + settings.codePre).each(function(index, element) {					
			var thisTempHtml = $(this).html();
			/*将 = 两边的空格去掉 */
			//do {
				//$(this).html(thisTempHtml.replace(/ =/g, "=").replace(/= /g, "=").replace(/ &gt;/g, '&gt;'));
			//} while (-1 != thisTempHtml.indexOf(" =")&&-1 != thisTempHtml.indexOf("= "));
			
			
			
			/*将 &amp; 转换成 &（因为有时 &lt; 和 &gt; 里的 & 会被误操作转义成 &amp;）*/
			do {
				thisTempHtml = thisTempHtml.replace(/&amp;/g, "&");
			} while (-1 != thisTempHtml.indexOf("&amp;"));
			
			/*将中文的双引号 “” 转换成英文的双引号 ""*/
			do {
				thisTempHtml = thisTempHtml.replace("“", '"').replace("”", '"');
			} while (-1 != thisTempHtml.indexOf("”"));
			
			/*将中文的单引号 ’‘ 转换成英文的单引号 '*/
			do {
				thisTempHtml = thisTempHtml.replace("‘", "'").replace("’", "'");
			} while (-1 != thisTempHtml.indexOf("’"));
			
			
			/*遍历数组 attrArray 为标签属性加上 class = "attr"*/
			for (var e = 0; e < attrArray.length; e++){
				
				do {
					thisTempHtml = thisTempHtml.replace(attrArray[e] + '=', '<span class="attr">' + attrArray[e] + '</span><span class="plain">=</span><span class="str">');
				} while (-1 != thisTempHtml.indexOf(attrArray[e] + '='));			
			
			}
			
			do {
				thisTempHtml = thisTempHtml.replace('" ', '"</span> ');
			} while (-1 != thisTempHtml.indexOf('" '));
			
			do {
				thisTempHtml = thisTempHtml.replace('"&gt;', '"</span>&gt;');
			} while (-1 != thisTempHtml.indexOf('"&gt;'));
			
			do {
				thisTempHtml = thisTempHtml.replace('"/&gt;', '"</span>/&gt;');
			} while (-1 != thisTempHtml.indexOf('"/&gt;'));
			
			/*遍历数组 elementsArray 为标签名加上 class = "elem"*/
			for (var e = 0; e < elementsArray.length; e++){
				
				do {
					/*将 &lt;div 替换成 &lt;<span class="elem">div</span>*/
					thisTempHtml = thisTempHtml.replace("&lt;" + elementsArray[e], '&lt;<span class="elem">' + elementsArray[e] + "</span>");
					
					/*将 &lt;/div 替换成 <&lt;<span class="plain">/</span><span class="elem">div</span>*/
					thisTempHtml = thisTempHtml.replace("&lt;/" + elementsArray[e], '&lt;<span class="plain">/</span><span class="elem">' + elementsArray[e] + "</span>");
					
				} while (-1 != thisTempHtml.indexOf("&lt;" + elementsArray[e]));
				
			}
			
			
			//thisTempHtml.replace(/&lt;/g, '<span class="plain">&lt;</span>').replace(/&gt;/g, '<span class="plain">&gt;</span>').replace(/&frasl;/g, '<span class="plain">&frasl;</span>');
			$(this).html(thisTempHtml);
		
		});
		
		//默认样式
		$(settings.codePre).css({"padding":"15px","margin":"15px 0","border":"1px solid #ccc","border-radius":"3px","background-color":"#f5f5f5","font-size":"13px","line-height":"28px","overflow":"auto"});
		var initStyle = setInterval(function(){
			if($(settings.codePre).find(".elem").length !=0||$(settings.codePre).find(".attr").length !=0||$(settings.codePre).find(".str").length !=0||$(settings.codePre).find(".plain").length !=0){
				$(settings.codePre).find(".elem").css({"color":"#006699","font-weight":"bold"});
				$(settings.codePre).find(".attr").css({"color":"gray"});
				$(settings.codePre).find(".str").css({"color":"blue"});
				$(settings.codePre).find(".plain").css({"color":"#333"});
				clearInterval(initStyle);
			}
		},50);
	}
	
})(jQuery);

$(function(){
	// 插件调用
	$().codeHighlight();
});
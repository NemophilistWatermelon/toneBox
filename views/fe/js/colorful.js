var saved;  //解决两个window.onload导致的冲突问题
if (typeof window.onload == 'function') {  
    saved = window.onload;  
}

(function(){
	
	function colorful() {		

		//延时
		
		setTimeout(function(){document.getElementById("over").style.display = "none";document.getElementById("layout").style.display = "none";},800);
	}

	
	//调用函数，替换样式和代理商logo
	colorful();

	//调用其他地方的window.onload
	if (saved) saved(); 
})();
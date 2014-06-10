// 2014-02-20， Gavin
// Javascript Learning-001-HelloWorld
// http://www.w3school.com.cn/js/js_variables.asp

// 注意1：JavaScript 对大小写是敏感的。

    // 判断输入的是否是数字
    function myFunciton()
    {
    	var x=document.getElementById("Demo").value;
    	if(x=="" || isNaN(x))
    	{
    		alert("Not Numeric. Please input a number.");
    	}
    }

    // 灯泡点击后变颜色
    // http://www.w3school.com.cn/tiy/t.asp?f=js_lightbulb
    function changeImage()
    {
    	// 按ID找html元素
        element = document.getElementById('myimage');
        if (element.src.match("bulbon"))
    	{
    		element.src="./images/eg_bulboff.gif";
    	}
    	else
    	{
    		element.src="./images/eg_bulbon.gif";
    	}
    }

    function disappear()
    {
        y = document.getElementById('demo1').value;
        if (y!="" ) 
        {
            // document.write("糟糕。文档消失了！");
            document.getElementById("demo1").innerHTML="文字被替换了";
        }
    }
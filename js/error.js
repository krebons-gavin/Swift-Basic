// 2014-03-16， Gavin
// Javascript Learning-006-错误：Error
// http://www.w3school.com.cn/js/js_errors.asp
// http://www.w3schools.com/js/js_errors.asp


// Try...Catch
// try 语句测试代码块的错误。
// catch 语句处理错误。
// throw 语句创建自定义错误。

// 常见错误类型
// 1. 可能是语法错误，通常是程序员造成的编码错误或错别字。
// 2. 可能是拼写错误或语言中缺少的功能（可能由于浏览器差异）。
// 3. 可能是由于来自服务器或用户的错误输出而导致的错误。

function jsError()
{
  try
  {
	  var x=document.getElementById("demo").value;
	  if(x=="")    throw "empty";
	  if(isNaN(x)) throw "not a number";
	  if(x>10)     throw "too high";
	  if(x<5)      throw "too low";
  }

  catch(err)
  {
	  var y=document.getElementById("mess");
	  y.innerHTML="错误: " + err + ".";
  }
}


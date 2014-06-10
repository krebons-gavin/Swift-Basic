// 2014-02-23， Gavin
// Javascript Learning-002-变量
// http://www.w3schools.com/js/js_variables.asp
// http://www.w3school.com.cn/js/js_variables.asp

// 局部变量: 在 JavaScript 函数内部声明的变量（使用 var）是局部变量，所以只能在函数内部访问它。
// 全局变量: 在函数外声明的变量是全局变量，网页上的所有脚本和函数都能访问它。

// 计算圆形的面积
function MianJi()
{
	var pi=3.14;
	x = document.getElementById('radius').value;
	y = pi*x*x;
	if (y!="" ) 
    {
    	// 文本和数值拼接时候用加号：+
        // document.getElementById("results").innerHTML = document.write("当前结果为："+ y);
        document.getElementById("results").innerHTML=y;
    }
}

// 求和
function sum()
{
	var y=5;
	var x=y+2;
	var temp=document.getElementById("results2");
	temp.innerHTML="x="+x;
}

// 字符串
// 字符串必须用引号包含起来，单引号与双引号没有区别，单引号输入更方便
function strings()
{
	var answer1='My name is "Gavin"';
	var answer2="My name is 'Gavin'";
	var temp2=document.getElementById("results3");
	results3.innerHTML= answer1+"<br/>" + answer2+"<br/>";
}


// 2014-02-25， Gavin
// Javascript Learning- Data Type - 数据类型
// http://www.w3school.com.cn/js/js_datatypes.asp

// JavaScript 拥有动态类型
// 显示数字
function showData()
{
	var x1=36.00;
	var y=2e5;
	var z=2e-5;
	results4.innerHTML="x1="+x1+"<br/>"+"y="+y+"<br/>" +"z="+z;
}

// 显示数字
function showArray()
{
	var i;
	var cars = new Array("Audi","Benz","Toyota");  // condensed Array
	
	// list array
	// var cars = ["Audi","Benz","Toyota"];

	var MyCars ='MyCars are: <br/>';
	for(i=0;i<cars.length;i++)
	{
		MyCars += cars[i]+ "<br/>";
	}
	results5.innerHTML=MyCars;
}

// 显示对象
function showObjects()
{
	var Person ={
		FirstName	: "Krebons",
		LastName	: "Gavin",
		Id 			: 003
	};
	results6.innerHTML="Id:"+ Person.Id +"-"+Person.FirstName +"-"+ Person.LastName+"<br/>";
}

// 变量声明
// 当您声明新变量时，可以使用关键词 "new" 来声明其类型：
// var carname=new String;
// var x=      new Number;
// var y=      new Boolean;
// var cars=   new Array;
// var person= new Object;

// JavaScript 中的所有事物都是对象：字符串、数字、数组、日期，等等。
// 在 JavaScript 中，对象是拥有属性和方法的数据。

// 带参数的函数
function myArguments(name,job)
{
	alert("Welcome"+name+",the"+job);
	results7.innerHTML="<br/> Welcome "+name+",the "+job+"<br/>"
}
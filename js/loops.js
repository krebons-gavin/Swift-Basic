// 2014-03-02， Gavin
// Javascript Learning-004-循环语句
// http://www.w3schools.com/js/js_loop_for.asp
// http://www.w3school.com.cn/js/js_loop_for.asp

/*JavaScript 支持不同类型的循环：
  for - 循环代码块一定的次数
  for/in - 循环遍历对象的属性
  while - 当指定的条件为 true 时循环指定的代码块
  do/while - 同样当指定的条件为 true 时循环指定的代码块*/

// For Loop
function forLoop()
{
	var cars=['BMW','Toyota','Benz','Cadillac'];
	var y='';
	for (var i=0; i<cars.length; i++)
	{
		y ='The '+ i +"'s element of the Array is " +cars[i]+'<br/>';
		document.write(y);
	}
	// document.getElementById('results1').innerHTML=y;
}

// For...In Loop
function forIn()
{
	var x;
	var txt='';
	var person={firstName:'Gavin ',lastName:'Kre ',age:30};

	for (x in person)
	{
		txt=txt+person[x];
	}
	document.getElementById("results2").innerHTML=txt;
}

// While Loop
function whileLoop()
{
	var x='',i=0;
	while(i<5)
	{
		x=x+"The number is "+i+"<br/>";
		i++;
	}
	document.getElementById('results3').innerHTML=x;
}

// Do...While Loop
function doWhileLoop()
{
	var x='',i=0;
	do
	{
		x=x+'The number is ' + i+ "<br/>";
		i++;
	}
	while(i<7)
	document.getElementById('results4').innerHTML=x;
}


// break 语句用于跳出循环。
// continue 用于跳过循环中的一个迭代。
function breakLoop()
{
	var x="",i=0;
	for (i=0;i<10;i++)
	{
		if (i==7)
		{
			break;
		}
		x=x + "The number is " + i + "<br>";
	}
	document.getElementById("results5").innerHTML=x;
}


// lable 可以对 JavaScript 语句进行标记
function jsLable()
{
	cars=["BMW","Volvo","Saab","Ford"];	
	list:
	{
		document.write(cars[0]+"<br/>");
		document.write(cars[1]+"<br/>");
		document.write(cars[2]+"<br/>");
		break list;
		document.write(cars[3] + "<br>"); 
		document.write(cars[4] + "<br>"); 
		document.write(cars[5] + "<br>"); 
	}
}
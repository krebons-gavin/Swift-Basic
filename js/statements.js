// 2014-03-02， Gavin
// Javascript Learning-004-语句
// http://www.w3schools.com/js/js_if_else.asp
// http://www.w3school.com.cn/js/js_if_else.asp

// if...else Statements
function showGreeting()
{
	var x='';
	var time = new Date().getHours();
	if(time <10)
	{
		x='Good Morning';
	}
	else if(time <20)
	{
		x='Good Day';
	}
	else
	{
		x='Good Evening';
	}

	document.getElementById('results9').innerHTML=x;
}

// Switch Statements
function showSwich()
{
	var x='';
	var day=new Date().getDay();
	switch (day)
	{
		case 0:
			x='Today is Sunday!';
			break;
		// case 1:
		// 	x='Today is Monday!';
		// 	break;
		// case 2:
		// 	x='Today is Tuesday!';
		// 	break;
		// case 3:
		// 	x='Today is Wednesday!';
		// 	break;
		// case 4:
		// 	x='Today is Thursday!';
		/*	break;
		case 5:
			x='Today is Friday!';
			break;*/
		case 6:
			x='Today is Saturday!';
			break;
		default:
			x='Looking forward to the Weekend';
	}
	document.getElementById('results10').innerHTML=x;
}


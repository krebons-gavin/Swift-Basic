// 2014-03-23， Gavin
// Javascript Learning-007-表单验证：Validation
// http://www.w3school.com.cn/js/js_form_validation.asp
// http://www.w3schools.com/js/js_form_validation.asp



/* 被 JavaScript 验证的这些典型的表单数据有：
用户是否已填写表单中的必填项目？
用户输入的邮件地址是否合法？
用户是否已输入合法的日期？
用户是否在数据域 (numeric field) 中输入了文本？
*/

function validate_required(field,alerttxt)
{
  with (field)
  {
  	if (value==null||value=="")
    {
    	alert(alerttxt);
    	return false
    }
    else 
    {
    	return true
    }
  }
}

function validate_form(thisform)
{
  with (thisform)
  {
    if (validate_required(email,"Email must be filled out!")==false)
    {
  	  email.focus();
  	  return false
    }
  }
}


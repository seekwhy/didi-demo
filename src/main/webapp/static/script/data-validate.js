
//	数据是否为空
function isEmpty (id){
	var data = $.trim($(id).val());	//去空格
	$(id).val(data);
	//var reg_blank = /\s+/g;	// 不允许包含空格正则表达式
	if(data == ""){
		return true;
	}
	return false;
}

//数据是否为空
function isEmptyByVal (val){
	var data = $.trim(val);	//去空格
	if(data == ""){
		return true;
	}
	return false;
}


//	手机号是否合法
function isValidMobile(id){
	var num = $(id).val();
	var reg_mobile=/^0?1[3|4|5|8][0-9]\d{8}$/;	// 13、14、15、18开头，且为11位
	if(!reg_mobile.test(num) || isNaN(num)){
       return false;
	}
	return true;
}

//  判断是否为字母    
function isValidLetter(str){
	var reg= /^[A-Za-z]$/;
	if(!reg.test(str)){
       return false;
	}
	return true;
}


//手机号是否合法
function isValidMobileByVal(str){
	var num = str;
	var reg_mobile=/^0?1[3|4|5|8][0-9]\d{8}$/;	// 13、14、15、18开头，且为11位
	if(!reg_mobile.test(num) || isNaN(num)){
       return false;
	}
	return true;
}

// 密码长度、内容是否合法
function isValidPwd(id){
	var pwd = $(id).val();
	var len = pwd.length;
	var reg_pwd = /^[0-9a-zA-Z]+$/;	// 只能包含字母或数字
	if(len>=6 && len<=8 && reg_pwd.test(pwd)){
		return true;
	}else{
		$(id).val("");
		return false;
	}
}

// 金额是否合法
function isValidMoney(id){
	var money = $(id).val();
	var reg_money = /^[0-9]*[1-9][0-9]*$/;	//大于零的整数
	if(reg_money.test(money)){
		$(id).val(parseInt(money));	//去除有效数字前的0
		return true;
	}else{
		return false;
	}
}

// 邮箱是否合法
function isEmail(val) {
	var email=/^([\.a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;
	if(!email.test(val)) { 
		return false;
    }
	return true;
}

// 字数是否合法
function isValidLength(id,max){
	var size = 0;
	if($(id).val()){
		size = $(id).val().length;
	}else{
		size = $(id).text().length;
	}
	if(size <= parseInt(max)){
		return true;
	}else{
		return false;
	}
}

//是否正整数
function isPosInt(val){
	var reg = /^[0-9]*[1-9][0-9]*$/;	//大于零的整数
	if(reg.test(val)){
		return true;
	}else{
		return false;
	}
}

// 是否为数字
function isDigit(s)    
{    
	var patrn=/^[0-9]{1,20}$/;    
	if (!patrn.exec(s)) return false   
	return true   
}

// 判断是否为数字，并且有小数点
function isDecimals(num) {
	var exp = /^([1-9][\d]{0,7}|0)(\.[\d]{1,2})?$/;
    if(exp.test(num)){
    	return true;
    }else{
    	return false;
    }
}

//判断小数点位数是否为2位
function decimalPlaces(value) {
	if(value!=null&&value!=''){     
        var decimalIndex=value.indexOf('.');     
        if(decimalIndex=='-1'){     
            return false;     
        }else{     
            var decimalPart=value.substring(decimalIndex+1,value.length);   
            if(decimalPart.length>2){   
                return true;     
            }else{     
               return false;     
            }     
        }     
    }     
    return false;
}

//判断是否为字母或数字
function isDecimalsOrAlphabet(str){
	var reg = /^[0-9a-zA-Z]+$/;
	if(reg.test(str)){
		return true;
	}else{
		return false;
	}
}

//判断是否为汉字
function isChinese(str){
	var reg = /^[\u4e00-\u9fa5]+$/;
	if(reg.test(str)){
		return true;
	}else{
		return false;
	}
}

//是否合法的身份证
function isValidCN(cn) {  
    //身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X  
    var reg = /(^\d{15}$)|(^\d{17}(\d|X)$)/;  
    if(reg.test(cn) === false) {  
        return false;  
    }  
    return true;  
};  

//判断短日期格式， 例如：2015-01-01
function isDate(str) {
	var r = str.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
	if(r==null)return false;
	var d= new Date(r[1], r[3]-1, r[4]);
	return (d.getFullYear()==r[1]&&(d.getMonth()+1)==r[3]&&d.getDate()==r[4]);
}

//判断长日期格式， 例如：2015-01-01 13:04:06
function isDateTime(str) {
	var reg = /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})$/;
	var r = str.match(reg);
	if(r==null)return false;
	var d= new Date(r[1], r[3]-1,r[4],r[5],r[6],r[7]);
	return (d.getFullYear()==r[1]&&(d.getMonth()+1)==r[3]&&d.getDate()==r[4]&&d.getHours()==r[5]&&d.getMinutes()==r[6]&&d.getSeconds()==r[7]);
}

//判断百分比格式 
function isPercent(str) {
	if(str.indexOf('%') < 0) {
		return false;
	}
	var strs = new Array();
	strs = str.split('%');
	if(!isDecimals(strs[0])) {
		return false;
	}
	if(strs[1].length > 0) {
		return false;
	}
	return true;
}

//格式化日期
function formatDate(date,format){
  var paddNum = function(num){
    num += "";
    return num.replace(/^(\d)$/,"0$1");
  }
  //指定格式字符
  var cfg = {
     yyyy : date.getFullYear() //年 : 4位
    ,yy : date.getFullYear().toString().substring(2)//年 : 2位
    ,M  : date.getMonth() + 1  //月 : 如果1位的时候不补0
    ,MM : paddNum(date.getMonth() + 1) //月 : 如果1位的时候补0
    ,d  : date.getDate()   //日 : 如果1位的时候不补0
    ,dd : paddNum(date.getDate())//日 : 如果1位的时候补0
    ,hh : date.getHours()  //时
    ,mm : date.getMinutes() //分
    ,ss : date.getSeconds() //秒
  }
  format || (format = "yyyy-MM-dd hh:mm:ss");
  return format.replace(/([a-z])(\1)*/ig,function(m){return cfg[m];});
} 

//格式化CST日期的字串
function formatCSTDate(strDate,format){
  return formatDate(new Date(strDate),format);
}

var JSONUtil = JSON || {
	stringify : str2json,
	parse : function(str){
		return eval('(' + str + ')');
	}
};

//根据Name获取Cookie，如果不存在（过期）返回为空
function getCookie(c_name, unescape_func) {
	unescape_func = (typeof unescape_func == 'function' ? unescape_func : unescape);
	var value = document.cookie.match('(?:^|;)\\s*' + c_name + '=([^;]*)');
	return (value) ? unescape_func(value[1]) : "";
}

//设置Cookie，expireSeconds为过期时间，单位为秒
function setCookie(c_name, value, expireSeconds, escape_func) {
	escape_func = (typeof escape_func == 'function' ? escape_func : escape);
	var exdate = new Date();
	exdate.setTime(exdate.getTime() + (expireSeconds * 1000));
	document.cookie=c_name+ "=" +escape_func(value) + ";expires=" + exdate.toGMTString() + ";path=/";
}

//删除cookie 
function delCookie(name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie(name);
    if(cval!=null) document.cookie= name + "="+cval+";expires="+exp.toGMTString() + ";path=/";
}

//设置cookie
function setUserCookie(c_name,value,expiredays) {
	var exdate=new Date();
	exdate.setDate(exdate.getDate()+expiredays);
	document.cookie=c_name+ "=" +escape(value)+((expiredays==null) ? "" : ";expires="+exdate.toGMTString());
}

//读取cookie
function getUserCookie(c_name) {
	if (document.cookie.length>0) {
		c_start=document.cookie.indexOf(c_name + "=");
		if (c_start!=-1) { 
	    	c_start=c_start + c_name.length+1; 
	    	c_end=document.cookie.indexOf(";",c_start);
	    	if (c_end==-1) c_end=document.cookie.length;
	    		return unescape(document.cookie.substring(c_start,c_end));
	    	} 
	  	}
	return "";
}

//清除cookie  
function clearUserCookie(name) {  
	setUserCookie(name, "", -1);  
}

//是否支持Cookie
function isCookiesEnabled() {
    var cookieEnabled = navigator.cookieEnabled ? true : false;

    if (typeof navigator.cookieEnabled == "undefined" && !cookieEnabled) {
        document.cookie="testcookie";
        cookieEnabled = document.cookie.indexOf("testcookie") != -1 ? true : false;
    }
    return cookieEnabled;
}

$(document).ready(function(){
	//判断是否登录
	$.isLogin = function() {
		var result = false;
		$.ajax({
			type : "post",
			url : contextPath+'/user/isLogin',
			dataType : "text",
			async: false,
			error : function() {
				alert("系统忙，请稍后再试！");
			},
			success : function(text) {
				if(text == "success") {
					result = true;
				}
			}
		});
		return result;
	}
	
});

if (!Array.prototype.indexOf){  
    Array.prototype.indexOf = function(elt /*, from*/){  
    var len = this.length >>> 0;  
    var from = Number(arguments[1]) || 0;  
    from = (from < 0)  
         ? Math.ceil(from)  
         : Math.floor(from);  
    if (from < 0)  
      from += len;  
    for (; from < len; from++)  
    {  
      if (from in this &&  
          this[from] === elt)  
        return from;  
    }  
    return -1;  
  };  
}

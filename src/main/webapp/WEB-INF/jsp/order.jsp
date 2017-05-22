<%@page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
    <head>
        <title>  订  单  页  面  </title>
        <meta charset="utf-8">
        <title>Fullscreen Login</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="">
        <meta name="author" content="">

        <meta charset="utf-8">
        <title>Fullscreen Login</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="">
        <meta name="author" content="">

        <!-- CSS -->
        <link rel='stylesheet' href='http://fonts.googleapis.com/css?family=PT+Sans:400,700'>
        <link rel="stylesheet" href="/page/assets/css/reset.css">
        <link rel="stylesheet" href="/page/assets/css/supersized.css">
        <link rel="stylesheet" href="/page/assets/css/style.css">

        <!-- HTML5 shim, for IE6-8 support of HTML5 elements -->
        <!--[if lt IE 9]>
        <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
        <![endif]-->

        <link rel="stylesheet" type="text/css" href="/resource/plugins/jquery.datetimepicker.css"/>

        <script type="text/JavaScript">
            function reg(form){
                if(form.userName.value==""){
                    alert("姓名不得为空！");
                    document.form.userName.focus();
                    return false;
                }
                else if(form.telphone.value==""){
                    alert("手机号不得为空！");
                    document.form.telphone.focus();
                    return false;//返回一个值
                }else if(form.address.value==""){
                    alert("下单地址不得为空！");
                    document.form.address.focus();
                    return false;
                }else if(form.targetaddress.value==""){
                    alert("目标地址不得为空！");
                    document.form.targetaddress.focus();
                    return false;
                }else if(form.wannatime.value==""){
                    alert("预送时间不得为空！");
                    document.form.wannatime.focus();
                    return false;
                }else if(form.something.value==""){
                    alert("备注不得为空！");
                    document.form.something.focus();
                    return false;
                }

                return true;
            }
        </script>
    </head>

<body>

<center>

    <div >
        <h1 align="center" >${username} -- 订  单  页  面</h1>
        <form action="/order/addorder" name = "form" method="post" onsubmit="return reg(this);">
            <table align="center" width="450" border="0">
                <tr>
                    <td  align="right">用户姓名：</td>
                    <td  >
                        <input type="text" name="userName">
                    </td>
                </tr>
                <input type="hidden" name="userId" value=${userId} />
                <tr>
                    <td  align="right">联系电话：</td>
                    <td >
                        <input type="telphone" name="telphone">
                    </td>
                </tr>
                <tr>
                    <td  align="right">下单地址：</td>
                    <td >
                        <input type="address" name="address">
                    </td>
                </tr>
                <tr>
                    <td  align="right">目标地址：</td>
                    <td >
                        <input type="targetaddress" name="targetaddress">
                    </td>
                </tr>
                <tr>
                    <td  align="right">预约送到时间：</td>
                    <td >
                        <input type="text" name="wannatime" value="" id="datetimepicker"/><br><br>
                    </td>
                </tr>
                <tr>
                    <td  align="right">备注：</td>
                    <td >
                        <input type="something" name="something">
                    </td>
                </tr>
                </table>
                <table align="center" width="450" border="0">
                <tr>
                    <td  align="right">
                        <input type="reset" value="重 置">
                    </td>
                    <td>&nbsp;&nbsp;&nbsp;</td>
                    <td  align="right">
                        <input type="submit" value="提 交">
                    </td>
                </tr>
            </table>
        </form>
    </div>
    <br/>
    <a href="javascript:history.go(-1);">返回上一层</a>
</center>
<script src="/page/assets/js/jquery-1.8.2.min.js"></script>
<script src="/page/assets/js/supersized.3.2.7.min.js"></script>
<script src="/page/assets/js/supersized-init.js"></script>
<script src="/page/assets/js/scripts.js"></script>
<script src="/resource/plugins/jquery.js"></script>
<script src="/resource/plugins/build/jquery.datetimepicker.full.js"></script>
<script>/*
 window.onerror = function(errorMsg) {
 $('#console').html($('#console').html()+'<br>'+errorMsg)
 }*/

$.datetimepicker.setLocale('en');

$('#datetimepicker_format').datetimepicker({value:'2015/04/15 05:03', format: $("#datetimepicker_format_value").val()});
console.log($('#datetimepicker_format').datetimepicker('getValue'));

$("#datetimepicker_format_change").on("click", function(e){
    $("#datetimepicker_format").data('xdsoft_datetimepicker').setOptions({format: $("#datetimepicker_format_value").val()});
});
$("#datetimepicker_format_locale").on("change", function(e){
    $.datetimepicker.setLocale($(e.currentTarget).val());
});

$('#datetimepicker').datetimepicker({
    dayOfWeekStart : 1,
    lang:'en',
    disabledDates:['1986/01/08','1986/01/09','1986/01/10'],
    startDate:	'1986/01/05'
});
$('#datetimepicker').datetimepicker({value:'2015/04/15 05:03',step:10});

$('.some_class').datetimepicker();

$('#default_datetimepicker').datetimepicker({
    formatTime:'H:i',
    formatDate:'d.m.Y',
    //defaultDate:'8.12.1986', //
    defaultDate:'+03.01.1970', //
    defaultTime:'10:00',
    timepickerScrollbar:false
});

$('#datetimepicker10').datetimepicker({
    step:5,
    inline:true
});
$('#datetimepicker_mask').datetimepicker({
    mask:'9999/19/39 29:59'
});

$('#datetimepicker1').datetimepicker({
    datepicker:false,
    format:'H:i',
    step:5
});
$('#datetimepicker2').datetimepicker({
    yearOffset:222,
    lang:'ch',
    timepicker:false,
    format:'d/m/Y',
    formatDate:'Y/m/d',
    minDate:'-1970/01/02', // yesterday is minimum date
    maxDate:'+1970/01/02' // and tommorow is maximum date calendar
});
$('#datetimepicker3').datetimepicker({
    inline:true
});
$('#datetimepicker4').datetimepicker();
$('#open').click(function(){
    $('#datetimepicker4').datetimepicker('show');
});
$('#close').click(function(){
    $('#datetimepicker4').datetimepicker('hide');
});
$('#reset').click(function(){
    $('#datetimepicker4').datetimepicker('reset');
});
$('#datetimepicker5').datetimepicker({
    datepicker:false,
    allowTimes:['12:00','13:00','15:00','17:00','17:05','17:20','19:00','20:00'],
    step:5
});
$('#datetimepicker6').datetimepicker();
$('#destroy').click(function(){
    if( $('#datetimepicker6').data('xdsoft_datetimepicker') ){
        $('#datetimepicker6').datetimepicker('destroy');
        this.value = 'create';
    }else{
        $('#datetimepicker6').datetimepicker();
        this.value = 'destroy';
    }
});
var logic = function( currentDateTime ){
    if (currentDateTime && currentDateTime.getDay() == 6){
        this.setOptions({
            minTime:'11:00'
        });
    }else
        this.setOptions({
            minTime:'8:00'
        });
};
$('#datetimepicker7').datetimepicker({
    onChangeDateTime:logic,
    onShow:logic
});
$('#datetimepicker8').datetimepicker({
    onGenerate:function( ct ){
        $(this).find('.xdsoft_date')
                .toggleClass('xdsoft_disabled');
    },
    minDate:'-1970/01/2',
    maxDate:'+1970/01/2',
    timepicker:false
});
$('#datetimepicker9').datetimepicker({
    onGenerate:function( ct ){
        $(this).find('.xdsoft_date.xdsoft_weekend')
                .addClass('xdsoft_disabled');
    },
    weekends:['01.01.2014','02.01.2014','03.01.2014','04.01.2014','05.01.2014','06.01.2014'],
    timepicker:false
});
var dateToDisable = new Date();
dateToDisable.setDate(dateToDisable.getDate() + 2);
$('#datetimepicker11').datetimepicker({
    beforeShowDay: function(date) {
        if (date.getMonth() == dateToDisable.getMonth() && date.getDate() == dateToDisable.getDate()) {
            return [false, ""]
        }

        return [true, ""];
    }
});
$('#datetimepicker12').datetimepicker({
    beforeShowDay: function(date) {
        if (date.getMonth() == dateToDisable.getMonth() && date.getDate() == dateToDisable.getDate()) {
            return [true, "custom-date-style"];
        }

        return [true, ""];
    }
});
$('#datetimepicker_dark').datetimepicker({theme:'dark'})


</script>
</body>
</html>
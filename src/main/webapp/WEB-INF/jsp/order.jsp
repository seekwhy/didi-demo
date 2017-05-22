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
</body>
</html>
<%@page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">

<%
    String path = request.getContextPath();
    String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<html>

<head>
    <title>添加评论</title>

    <meta name="keywords" content="注册网页">
    <meta name="description" content="didi-demo">
    <meta name="content-type" content="text/html; charset=UTF-8">
    <%--<link rel="stylesheet" href="/page/assets/css/login_style.css">--%>
    <script type="text/JavaScript">
        function reg(form){
            if(form.userName.value==""){
                alert("姓名不得为空！");
                document.form.userName.focus();
                return false;
            }
            else if(form.loginName.value==""){
                alert("登录名不得为空！");
                document.form.loginName.focus();
                return false;//返回一个值
            }else if(form.password.value==""){
                alert("密码不得为空！");
                document.form.password.focus();
                return false;
            }else if(form.repassword.value==""){
                alert("确认密码不得为空！");
                document.form.repassword.focus();
                return false;
            }else if(form.phone.value==""){
                alert("手机号不得为空！");
                document.form.phone.focus();
                return false;
            }else if(form.age.value==""){
                alert("年龄不得为空！");
                document.form.age.focus();
                return false;
            }else if(form.address.value==""){
                alert("地址不得为空！");
                document.form.address.focus();
                return false;
            }else if(form.password.value!=form.repassword.value){
                alert("请填写相同密码！");
                document.form.password.focus();
                return false;
            }

            return true;
        }
    </script>
    <meta charset="utf-8">
    <title>Fullscreen Login</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">


</head>

<body>

<h2 align=center>添加评论</h2>
<center>
    <form action="/feedback/addfeed" name = "form" method="post" onsubmit="return reg(this);">
        <table align="center" width="450" border="0">
            <tr>
                <td align="right"  width="300px">用户Id：</td>
                <td>
                    <input type="text" name="userId" value="${userId}">
                </td>
            </tr>
            <tr>
                <td align="right" >订单号：</td>
                <td>
                    <input type="text" name="orderId" value="${orderId}">
                </td>
            </tr>
            <tr>
                <td align="right" >评论：</td>
                <td>
                    <input type="text" name="userComment" >
                </td>
            </tr>
            <tr>
                <td  align="center">
                    <input type="submit" value="提 交">
                </td>
                <td  align="center">
                    <input type="reset" value="重 置">
                </td>
            </tr>
        </table>
    </form>

    <a href="javascript:history.go(-1);">返回上一层</a>
</center>
</body>
</html>
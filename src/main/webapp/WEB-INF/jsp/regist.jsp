<%@page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">

<%
    String path = request.getContextPath();
    String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<html>

<head>
    <title>注册页面</title>

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

<h2 align=center>注册页面</h2>
<center>
    <form action="/user/register" name = "form" method="post" onsubmit="return reg(this);">
        <table align="center" width="450" border="0">
            <tr>
                <td align="right"  width="300px">用户姓名：</td>
                <td>
                    <input type="text" name="userName">
                </td>
            </tr>
            <tr>
                <td align="right" >登录名：</td>
                <td>
                    <input type="text" name="loginName">
                </td>
            </tr>
            <tr>
                <td align="right" >密 码：</td>
                <td>
                    <input type="password" name="password">
                </td>
            </tr>
            <tr>
                <td align="right" >确认密码：</td>
                <td>
                    <input type="password" name="repassword">
                </td>
            </tr>
            <tr>
                <td align="right" >性 别：</td>
                <td>
                    <input type="radio" name="gender" value="男" checked="checked">男
                    <input type="radio" name="gender" value="女">女
                </td>
            </tr>
            <tr>
                <td align="right" >联系电话：</td>
                <td>
                    <input type="text" name="phone">
                </td>
            </tr>
            <tr>
                <td align="right" >年龄：</td>
                <td>
                    <input type="text" name="age">
                </td>
            </tr>
            <tr>
                <td align="right" >住址：</td>
                <td>
                    <input type="text" name="address">
                </td>
            </tr>
        </table>
        <table align="center"  border="0">
            <tr>
                <td  align="center">
                    <input type="submit" value="注 册">
                </td>
                <td  align="center">
                    <input type="reset" value="重 置">
                </td>
            </tr>
        </table>
    </form>

    您有账号？<a href="<%=path %>/page/login.html"><front color="GREEN" >点击直接登录</front></a>
    <br/>
    <a href="javascript:history.go(-1);">返回上一层</a>
</center>
</body>
</html>
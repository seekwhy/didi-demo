<%--
  Created by IntelliJ IDEA.
  User: wangmz
  Date: 2017/5/18
  Time: 下午8:41
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<html>
<head>
    <title>任务列表</title>
</head>
<body>
<div class="page-container">
    <h1 align="center">${username} - 任务列表</h1>
    <form action="/order/weiqiangdan" method="post">
        <table border="0" align="center"  >
            <tr>
                <input type="hidden" name="userId" value=${userId} />
                <th >未抢的订单</th>
                <td align="center"><button type="submit"><front color="GREEN" >未抢单</front></button></td>
            </tr>
        </table>
    </form>

    <form action="/order/daishoudingdan" method="post">
        <table border="0" align="center" >
            <tr>
                <input type="hidden" name="userId" value=${userId} />
                <th >待收的订单</th>
                <td align="center"><button type="submit"><front color="GREEN" >待收订单</front></button></td>
            </tr>

        </table>
    </form>
    <form action="/order/daiquerendingdan" method="post">
        <table border="0" align="center" >
            <tr>
                <input type="hidden" name="userId" value=${userId} />
                <th >待确认订单</th>
                <td><button type="submit"><front color="GREEN" >待确认订单</front></button></td>
            </tr>

        </table>
    </form>
    <form action="/order/chakandingdan" method="post">
        <table border="0" align="center" >
            <tr>
                <input type="hidden" name="userId" value=${userId} />
                <th >查看订单</th>
                <td><button type="submit"><front color="GREEN" >查看订单</front></button></td>
            </tr>
        </table>
    </form>
    <form action="/order/tianjiaorder" method="post">
        <table border="0" align="center" >
            <tr>
                <input type="hidden" name="userId" value=${userId} />
                <input type="hidden" name="userName" value=${userName} />
                <th>填写订单</th>
                <td align="center"><button type="submit"><front color="GREEN" >填写订单</front></button></td>
            </tr>
        </table>
    </form>
    <form action="/feedback/allfeed" method="post">
        <table border="0" align="center" >
            <tr>
                <input type="hidden" name="userId" value=${userId} />
                <input type="hidden" name="userName" value=${userName} />
                <th>已评价订单</th>
                <td align="center"><button type="submit"><front color="GREEN" >已评价订单</front></button></td>
            </tr>
        </table>
    </form>
    <br/>
    <a href="javascript:history.go(-1);">返回上一层</a>
</div>

</body>
</html>

<%--
  Created by IntelliJ IDEA.
  User: thought
  Date: 2017/5/18
  Time: 下午8:41
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort() + path + "/";
%>
<html>
<head>
    <title>任务列表</title>
</head>
<body>
<div class="page-container">
    <h1 align="center">${username} - 任务列表</h1>
    <div border="1" align="center">
        <dl >
            <form action="/order/notgrab" method="post">
                <table border="0" >
                    <tr align="left">
                        <input type="hidden" name="userId" value=${userId}/>
                        <th>未抢的订单</th>
                        <td align="center">
                            <button type="submit">
                                <front color="GREEN">未抢单</front>
                            </button>
                        </td>
                    </tr>
                </table>
            </form>
        </dl>
        <dl >
            <form action="/order/notget" method="post">
                <table border="0" >
                    <tr align="left">
                        <input type="hidden" name="userId" value=${userId}/>
                        <th>待收的订单</th>
                        <td align="center">
                            <button type="submit">
                                <front color="GREEN">待收订单</front>
                            </button>
                        </td>
                    </tr>

                </table>
            </form>
        </dl>
        <dl >
            <form action="/order/daiquerendingdan" method="post">
                <table border="0" >
                    <tr align="left">
                        <input type="hidden" name="userId" value=${userId}/>
                        <th>待确认订单</th>
                        <td>
                            <button type="submit">
                                <front color="GREEN">待确认订单</front>
                            </button>
                        </td>
                    </tr>

                </table>
            </form>
        </dl>
        <dl >
            <form action="/order/chakandingdan" method="post">
                <table border="0" >
                    <tr align="left">
                        <input type="hidden" name="userId" value=${userId}/>
                        <th>查看订单</th>
                        <td>
                            <button type="submit">
                                <front color="GREEN">查看订单</front>
                            </button>
                        </td>
                    </tr>
                </table>
            </form>
        </dl>
        <dl >
            <form action="/order/addorderpage">
                <table border="0" >
                    <tr align="left">
                        <input type="hidden" name="userId" value=${userId}/>
                        <%--<input type="hidden" name="userName" value=${userName}/>--%>
                        <th>填写订单</th>
                        <td align="center">
                            <button type="submit">
                                <front color="GREEN">填写订单</front>
                            </button>
                        </td>
                    </tr>
                </table>
            </form>
        </dl>
        <dl >
            <form action="/feedback/allfeed" method="post">
                <table border="0" >
                    <tr>
                        <input type="hidden" name="userId" value=${userId}/>
                        <input type="hidden" name="userName" value=${userName}/>
                        <th>已评价订单</th>
                        <td align="center">
                            <button type="submit">
                                <front color="GREEN">已评价订单</front>
                            </button>
                        </td>
                    </tr>
                </table>
            </form>
        </dl>
    </div>
    <br/>
    <dl>
    <a href="javascript:history.go(-1);">返回上一层</a>
    </dl>
</div>

</body>
</html>

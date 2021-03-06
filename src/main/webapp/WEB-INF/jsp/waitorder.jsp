<%@page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
    <script  src="/static/script/third/easyDataTable/css/datatable.css"></script>
    <!-- basic styles -->
    <link href="http://cdn.bootcss.com/bootstrap/3.3.1/css/bootstrap.min.css" rel="stylesheet">
    <link href="http://cdn.bootcss.com/font-awesome/3.2.1/css/font-awesome.min.css" rel="stylesheet" />
    <link href="/static/style/common.css" rel="stylesheet" />
</head>
<body>
<div >
    <h1 align="center"> 待 收 订  单  </h1>
    <form action="" name = "form" method="post" onsubmit="return reg(this);">
        <!--  分页行  -->
        <div class="panelBar" size="10,30,50"></div><br/>
        <table id="datatable" align="center" class="table table-bordered table-condensed">
            <!--表头行-->
            <thead>
            <tr>
                <th>订单号</th>
                <th>用户ID</th>
                <th>订单状态</th>
                <th>订单手机号</th>
                <th>下单地址</th>
                <th>目标地址</th>
                <th>目标送达时间</th>
                <th>创建日期</th>
                <th>完成时间</th>
            </tr>
            </thead>
            <!-- 数据展示行，使用 {属性} 属性表达式获取数据 -->
            <tbody>
            <c:forEach items="${lists}" var="order" varStatus="od">
                <tr >
                    <td>${order.orderId}</td>
                    <td>${order.userId}</td>
                    <td>${order.oerderState}</td>
                    <td>${order.phone}</td>
                    <td>${order.address}</td>
                    <td>${order.targetAddress}</td>
                    <td>${order.targetTime}</td>
                    <td>${order.createDate}</td>
                    <td>${order.finishDate}</td>
                </tr>
            </c:forEach>

            </tbody>
        </table>
    </form>
</div>
<br/>
<a href="javascript:history.go(-1);">返回上一层</a>
</body>
</html>

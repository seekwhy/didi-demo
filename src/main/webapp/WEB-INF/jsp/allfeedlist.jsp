<%@page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>评 论 列 表</title>
</head>
<body>
<div class="page-container">
    <h1 align="center"> 评 论 列 表</h1>
    <table id="datatable" align="center" class="table table-bordered table-condensed">
        <!--表头行-->
        <thead>
        <tr>
            <th>订单号</th>
            <th>用户ID</th>
            <th>订单评论</th>
        </tr>
        </thead>
        <!-- 数据展示行，使用 {属性} 属性表达式获取数据 -->
        <tbody>
        <c:forEach items="${listss}" var="fb">
            <tr >
                <td>${fb.orderId}</td>
                <td>${fb.userId}</td>
                <td>${fb.userComment}</td>
            </tr>
        </c:forEach>

        </tbody>
    </table>

    <br/>
    <a href="javascript:history.go(-1);">返回上一层</a>
</div>

</body>
</html>

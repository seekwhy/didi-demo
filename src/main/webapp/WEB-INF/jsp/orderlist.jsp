<%@page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>

<c:set var="contextPath" value="${pageContext.request.contextPath}" />
<c:set var="title" value="所  有  订  单  页  面"></c:set>


<script  src="/static/script/third/easyDataTable/css/datatable.css"></script>
<script  src="/static/script/third/easyDataTable/js/easy.datatable.js"></script>
<script  src="/static/script/third/moment.min.js"></script>
<script  src="/static/script/third/my97datepicker/WdatePicker.js"></script>
<script  src="/static/script/ace/js/jquery.gritter.min.js"></script>
<script  src="/static/script/ace/js/bootbox.min.js"></script>
<script  src="/static/script/third/easyDataTable/css/datatable.css"></script>
<script  src="/static/script/notice.js"></script>
<script  src="/static/script/data-table-load.js"></script>


<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
    <title>  已  完  成  订  单  页  面  </title>
    <meta charset="utf-8">
    <title>Fullscreen Login</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">

    <!-- basic styles -->
    <link href="http://cdn.bootcss.com/bootstrap/3.3.1/css/bootstrap.min.css" rel="stylesheet">
    <link href="http://cdn.bootcss.com/font-awesome/3.2.1/css/font-awesome.min.css" rel="stylesheet" />
    <link href="/static/style/common.css" rel="stylesheet" />



</head>

<body>

<center>

    <div >
        <h1 align="center"> 已 完 成 订 单 </h1>
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
                    <td>操作</td>
                </tr>
                </thead>
                <!-- 数据展示行，使用 {属性} 属性表达式获取数据 -->
                <tbody>
                <c:forEach items="${orderList}" var="order" varStatus="od">
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
                        <td>
                            <a href="/order/addfeed?orderId=${order.orderId}&userId=${order.userId}">评价</a><br/>
                        </td>
                    </tr>
                </c:forEach>

                </tbody>
            </table>
        </form>
    </div>
    <br/>
    <a href="javascript:history.go(-1);">返回上一层</a>
</center>

</body>
</html>
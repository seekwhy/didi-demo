function orderOper(id, val) {
	$.ajax({
		type : "post",
		url : contextPath + '/admin/order/changeOrderState',
		async : false,
		data : {
			"orderStateVal" : val,
			"id" : id
		},
		dataType : "text",
		error : function() {
			notice.warning("系统忙，请稍后再试！");
		},
		success : function(text) {
			if (text == "success") {
				notice.success("状态修改成功", 3);
				location.reload();
			} else if (text == "error") {
				notice.warning("订单状态修改，请稍后再试！");
				return false;
			}
		}
	});
}

//跳转到确认发货页面
/*function toShip(id) {
	window.location.href = contextPath + "/admin/order/toShip?id=" + id;
}*/

//确定发货
/*function confirmShip() {
	var id = $("#id").val();
	var emsNumber = $("#emsNumber").val();
	var emsName = $("#emsName").val();
	var remark = $("#remark").val();

	$.ajax({
		type : "post",
		url : contextPath + '/admin/order/confirmShip',
		async : false,
		data : {
			"orderId" : id,
			"emsNumber" : emsNumber,
			"emsName" : emsName,
			"remark" : remark
		},
		dataType : "text",
		error : function() {
			notice.warning("系统忙，请稍后再试！");
		},
		success : function(text) {
			if (text == "1") {
				notice.success("物流信息填写成功！", 3);

				history.back();
			} else if (text == "error") {
				notice.warning("物流信息填写失败，请稍后再试！");
				return false;
			}
		}
	});
}*/

//同意退货
function agreeBackGoods(orderId) {
	
}

//拒绝退货
function refuseBackGoods(orderId) {
	$.ajax({
		type : "post",
		url : contextPath + '/admin/order/refuseBack',
		async : false,
		data : {
			"orderId" : orderId
		},
		dataType : "text",
		error : function() {
			notice.warning("系统忙，请稍后再试！");
		},
		success : function(text) {
			console.log(text);
			if (text == "1") {
				notice.success("已拒绝退货", 3);
				location.reload();
			} else {
				notice.warning("系统繁忙，请稍后再试！");
				return false;
			}
		}
	});
}
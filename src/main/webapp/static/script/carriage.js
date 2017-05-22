$(function() {
	var chk = $("input[type=checkbox]").attr("checked");
	if(chk == "checked") {
		$("#carriageFee").attr("disabled", false);
	} else {
		$("#carriageFee").attr("disabled", true);
	}
	
	/*$("#id-button-borders").bind("click", function() {
		var ch = $(this).attr("checked");
		console.log("-------------ch : " + ch);
		if(ch == true) {
			$("#carriageFee").attr("disabled", false);
		} else {
			$("#carriageFee").attr("disabled", true);
		}
	});*/
});

function setCarriage() {
	var fee = $("#carriageFee").val();
	
	var url =  contextPath + '/admin/carriage/toUpdate';
	$.ajax({
		type : "POST",
		url : url,
		data : {
			"fee" : fee * 100
		},
		async : false,
		error : function() {
			alert("网络不给力，请稍后再试！");
			return false;
		},
		success : function(data) {
			if(data == "1") {
				notice.info("运费设置成功", 6);
				//window.location.reload();
			} else if(data == "4") {
				notice.info("请先开通店铺", 6);
				return false;
			} else {
				notice.info("运费设置失败", 6);
				return false;
			} 
		}
	});
}


function updateCarriage(isValid) {
	var url =  contextPath + '/admin/carriage/toUpdate';
	$.ajax({
		type : "POST",
		url : url,
		data : {
			"isValid" : isValid
		},
		async : false,
		error : function() {
			alert("网络不给力，请稍后再试！");
			return false;
		},
		success : function(data) {
			if(data == "1") {
				notice.info("运费状态设置成功", 6);
				window.location.reload();
			} else if(data == "4") {
				notice.info("请先开通店铺", 6);
				return false;
			} else {
				notice.info("运费状态设置失败", 6);
				return false;
			} 
		}
	});
}
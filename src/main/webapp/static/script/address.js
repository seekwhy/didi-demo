function changeArea(id, type) {
	var parentCode = $("#" + id).find("option:selected").val();

	if (type == 1) {
		$("#selectedCity").find("option[index!=0]").remove();
	} else if (type == 2) {
		$("#selectedDistinct").find("option[index!=0]").remove();
	}

	getAreasByParentCode(parentCode, type);
}

function getAreasByParentCode(parentCode, type) {
	$.ajax({
		type : "post",
		url : contextPath + '/admin/order/findAreaList',
		data : {
			"parentCode" : parentCode
		},
		async : true,
		dataType : "text",
		error : function() {
			notice.warning("系统忙，请稍后再试！");
			return false;
		},
		success : function(text) {
			var data = eval("(" + text + ")");
			var str = '';
			str += '<option value="0">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</option>';
			for ( var o in data) {
				str += '<option value="' + data[o].code + '">'
						+ data[o].cnName + '</option>';
			}

			if (type == 1) {
				$("#selectedCity").append(str);

			} else if (type == 2) {
				$("#selectedDistinct").append(str);
			}
		}
	});
}
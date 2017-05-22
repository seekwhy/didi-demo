window.onload = function() {
	$(".onlineExpress").attr("disabled", "disabled");
}

function getServiceProvider() {
	$.ajax({
		type : "post",
		url : contextPath + '/admin/express/findExpressCompany',
		async : false,
		dataType : "text",
		error : function() {
			notice.warning("系统忙，请稍后再试！");
			return false;
		},
		success : function(text) {
			var data = eval("(" + text + ")");
			
			var count = 0;
			var str = "";
			
			str += '<div class="row">';
			str += '<div class="control-group">';
			for ( var key in data) {
				str += '<div class="col-xs-3">';
				str += '<div class="checkbox">';
				str += '<label>';
				if(data[key].isDefault) {
					str += '<input name="expressCompany" type="checkbox" class="ace" value="'+data[key].code+'" checked="checked"/>';
				} else {
					str += '<input name="expressCompany" type="checkbox" class="ace" value="'+data[key].code+'" />';
				}
				
				str += '<span class="lbl"> '+data[key].name+'</span>';
				str += '</label>';
				str += '</div>';
				str += '</div>';
			}
			str += '</div>';
			str += '</div>';
			$("#selfLink").html(str);
		}
	});
}

function saveLinkExpress() {
	var checkedLink = $("#serviceProvider").find("input[type=checkbox]:checked");
	if(checkedLink.length == 0) {
		notice.warning("请选择物流公司！", 6);
		return false;
	}
	
	var arr = new Array();
	checkedLink.each(function() {
		arr.push($(this).val());
	});
	if(arr.length > 5) {
		notice.warning("最多只能设置5家默认的快递公司！");
		return false;
	}
	
	var linkJson = {};
	for(var i = 0; i < arr.length; i++) {
		linkJson[i] = arr[i];
	}
	var codes = JSON.stringify(linkJson);
	
	$.ajax({
		type : "post",
		url : contextPath + '/admin/express/addLink',
		data : {
			"codes" : codes
		},
		async : false,
		dataType : "text",
		error : function() {
			notice.warning("系统忙，请稍后再试！");
			return false;
		},
		success : function(result) {
			if(result == "1") {
				notice.info("物流公司设置成功！", 6);
				return true;
			} else if(result == "2") {
				notice.warning("请选择物流公司！", 6);
				return false;
			}
		}
	});
}
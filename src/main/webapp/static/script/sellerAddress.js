function getAreas() {
	$.ajax({
		type : "post",
		url : contextPath + '/admin/seller/findAreaList',
		async : false,
		dataType : "text",
		error : function() {
			notice.warning("系统忙，请稍后再试！");
			return false;
		},
		success : function(text) {
			var data = eval("(" + text + ")");
			for ( var key in data) {
				var selectedProvinceStr = "";

				selectedProvinceStr += '<option value="' + data[key].code + '" >' + data[key].cnName + '</option>';

				$("#selectedProvince").append(selectedProvinceStr);
			}
		}
	});
}

function search(){
	DataTable.reload("datatable");
}	

function saveAddress() {
	validInfo();
}

function validInfo() {
	var name = $("#name").val();
	if($.trim(name).length == 0) {
		notice.warning("请填写联系人", 6);
		return false;
	}
	
	var province = $("#selectedProvince").find("option:selected").val();
	if(province == null || province == 0) {
		notice.warning("请选择省份", 6);
		return false;
	}
	
	var city = $("#selectedCity").find("option:selected").val();
	if(city == null || city == 0) {
		notice.warning("请选择市", 6);
		return false;
	}
	
	var distinct = $("#selectedDistinct").find("option:selected").val();
	if(distinct == null || distinct == 0) {
		notice.warning("请选择区域", 6);
		return false;
	}
	
	var address = $("#detailAddress").val();
	if(address == null || $.trim(address).length == 0) {
		notice.warning("请填写详细的街道地址", 6);
		return false;
	}
	
	var postcode = $("#postcode").val();
	if(postcode == null || $.trim(postcode).length == 0) {
		notice.warning("请填写邮政编码", 6);
		return false;
	} else {
		if(!isDigit(postcode)) {
			notice.warning("请正确填写邮政编码", 6);
			return false;
		}
		if(!isValidLength("postcode", 6)) {
			notice.warning("请正确填写邮政编码的位数", 6);
			return false;
		}
	}
	
	var id = $("#sellerAddressId").val();
	var mobile = $("#mobile").val();
	var telephone1 = $("#telephone1").val();
	var telephone2 = $("#telephone2").val();
	var telephone3 = $("#telephone3").val();
	var telephone = "";
	if((mobile == null || $.trim(mobile).length == 0) && (isEmptyByVal(telephone2))) {
		notice.warning("手机号码或者座机号码，请至少填写一项", 6);
		return false;
	} else {
		if(isEmptyByVal(telephone1) && !isEmptyByVal(telephone2)) {
			notice.warning("请填写区号");
			return false;
		}
		if(!isEmptyByVal(telephone2)) {
			telephone = telephone1 + "-" + telephone2;
		}
		if(!isEmptyByVal(telephone3)) {
			telephone += ("-" + telephone3);
		}
	}
	
	if(mobile != null && $.trim(mobile).length > 0) {
		if(!isValidMobileByVal(mobile)) {
			notice.warning("请填写正确的手机号码", 6);
			return false;
		}
	}
	
	if(!isEmpty(telephone1)) {
		if(!isDigit(telephone1)) {
			notice.warning("请填写正确的区号", 6);
			return false;
		}
	}
	
	if(!isEmpty(telephone2)) {
		if(!isDigit(telephone2)) {
			notice.warning("请填写正确的座机号码", 6);
			return false;
		}
	}
	
	if(!isEmpty(telephone3)) {
		if(!isDigit(telephone3)) {
			notice.warning("请填写正确的分机号码", 6);
			return false;
		}
	}
	
	var companyName = $("#companyName").val();
	var remark = $("#remark").val();
	
	toSave(name, province, city, distinct, address, postcode, mobile, telephone, companyName, remark, id);
}

function clearFormForEdit() {
	$("#sellerAddressForm").find("input[type=text]").each(function() {
		$(this).val("");
	});
	$("#sellerAddressForm").find("textarea").each(function() {
		$(this).val('');
	});
	$("#sellerAddressForm").find("select").each(function() {
		$(this).find("option:selected").attr("selected", false);
	});
	$("#sellerAddressId").val('');
	$("#saveBtn").html("保&nbsp;存");
}	

function toSave(name, province, city, distinct, address, postcode, mobile, telephone, companyName, remark, id) {
	$.ajax({
		type : "post",
		url : contextPath + '/admin/seller/add',
		data : {
			"name":name, "province":province, "city":city, "distinct":distinct, "address":address, "postcode":postcode,
			"mobile":mobile, "telephone":telephone, "companyName":companyName, "remark":remark, "id" : id
		},
		async : true,
		dataType : "text",
		error : function() {
			notice.warning("系统忙，请稍后再试！");
			return false;
		},
		success : function(text) {
			if(text == "1") {
				if($.trim(id).length == 0) {
					notice.info("地址创建成功！", 6);
				} else {
					notice.info("地址编辑成功！", 6);
				}
				
				DataTable.reload("datatable");
				clearFormForEdit();
			} else {
				notice.warning("地址创建失败！", 6);
				return false;
			}
		}
	});
}

function setDefaultSend(id) {
	$.ajax({
		type : "post",
		url : contextPath + '/admin/seller/setDefaultSend',
		data : {
			"id" : id
		},
		async : true,
		dataType : "text",
		error : function() {
			notice.warning("系统忙，请稍后再试！");
			return false;
		},
		success : function(text) {
			if(text == "1") {
				notice.info("默认发货地址设置成功！", 6);
				
				DataTable.reload("datatable");
			} else {
				notice.info("默认发货地址设置失败！", 6);
				return false;
			}
		}
	});
}

function setDefaultReceive(id) {
	$.ajax({
		type : "post",
		url : contextPath + '/admin/seller/setDefaultReceive',
		data : {
			"id" : id
		},
		async : true,
		dataType : "text",
		error : function() {
			notice.warning("系统忙，请稍后再试！");
			return false;
		},
		success : function(text) {
			if(text == "1") {
				notice.info("默认收货地址设置成功！", 6);
				
				DataTable.reload("datatable");
			} else {
				notice.info("默认收货地址设置失败！", 6);
				return false;
			}
		}
	});
}

function deleteSellerAddress(id) {
	$.ajax({
		type : "post",
		url : contextPath + '/admin/seller/delete',
		data : {
			"id" : id
		},
		async : true,
		dataType : "text",
		error : function() {
			notice.warning("系统忙，请稍后再试！");
			return false;
		},
		success : function(text) {
			if(text == "1") {
				notice.info("地址删除成功！", 6);
				
				DataTable.reload("datatable");
			} else {
				notice.info("地址删除失败！", 6);
				return false;
			}
		}
	});
}

function updateSellerAddress(id) {
	$.ajax({
		type : "post",
		url : contextPath + '/admin/seller/getSellerAddress',
		data : {
			"id" : id
		},
		async : true,
		dataType : "text",
		error : function() {
			notice.warning("系统忙，请稍后再试！");
			return false;
		},
		success : function(text) {
			var data = eval("("+text+")");
			for(var o in data) {
				$("#sellerAddressId").val(data[o].id);
				$("#name").val(data[o].name);
				$("#detailAddress").val(data[o].address);
				$("#postcode").val(data[o].postcode);
				$("#mobile").val(data[o].mobile);
				$("#companyName").val(data[o].companyName);
				$("#remark").val(data[o].remark);
				
				$("#telephone1").val(data[o].telephone1);
				$("#telephone2").val(data[o].telephone2);
				$("#telephone3").val(data[o].telephone3);
				
				var provinceId = data[o].provinceId;
				$("#selectedProvince option").each(function() {
					if($(this).val() == provinceId) {
						$(this).attr("selected", "selected");
						return;
					}
				})
				
				var areaId = "";
				var selectId = "";
				
				var cityId = data[o].cityId;
				areaId = cityId;
				selectId = "selectedCity";
				getAreaByCode(provinceId, areaId, selectId);
				
				areaId = data[o].districtId;
				selectedId = "selectedDistinct";
				getAreaByCode(cityId, areaId, selectedId);
				
				$("#saveBtn").html("保存编辑");
			}
		}
	});
}

function getAreaByCode(code, areaId, selectId) {
	$.ajax({
		type : "post",
		url : contextPath + '/admin/order/findAreaList',
		data : {
			"parentCode" : code
		},
		async : true,
		dataType : "text",
		error : function() {
			notice.warning("系统忙，请稍后再试！");
			return false;
		},
		success : function(text) {
			console.log(text);
			var data = eval("("+text+")");
			var str = '';
			for(var o in data) {
				if(data[o].code == areaId) {
					str += '<option value="'+data[o].code+'" selected="selected">'+data[o].cnName+'</option>';		
				} else {
					str += '<option value="'+data[o].code+'">'+data[o].cnName+'</option>';		
				}
				
				$("#"+selectId).append(str);
			}
		}
	});
}
$(function() {
	var flag = parseInt($("#carriageFlag").val());
	$("#addCarriage").on("click", function() {
		var isPinkage = $("input[name=isPinkage]:checked").val();
		if(isPinkage == 1) {
			notice.info("包邮模板，不能添加新的运费！", 6);
			return false;
		}
		
		flag += 1;
		
		var mode = $("input[name=mode]:checked").val();
		var field1 = " kg内， ";
		var field2 = " kg，增加运费 ";
		if(mode == 3) {
			field1 = " 立方内， ";
			field2 = " 立方，增加运费 ";
		}
		
		var carriageTemp = '<div class="form-group" id="carriageTemp'+flag+'">';
			carriageTemp += '<div class="row">';
			carriageTemp += '<div class="col-sm-12">';
			carriageTemp += '<label class="col-sm-1 control-label no-padding-left">运费：</label>';
			carriageTemp += '<span><input type="text" id="initNum'+flag+'" name="initNum'+flag+'" value=""></span>';
			carriageTemp += '<span class="control-label no-padding-right" id="initTip'+flag+'">'+field1+'</span>';
			carriageTemp += '<span><input type="text" id="initCarriage'+flag+'" name="initCarriage'+flag+'" value=""></span>';
			carriageTemp += '<span class="control-label no-padding-right"> 元，每增加 </span>';
			carriageTemp += '<span><input type="text" id="renewNum'+flag+'" name="renewNum'+flag+'" value=""></span>';
			carriageTemp += '<span class="control-label no-padding-right" id="renewTip'+flag+'">'+field2+'</span>';
			carriageTemp += '<span><input type="text" id="renewCarriage'+flag+'" name="renewCarriage'+flag+'" value=""></span>';
			carriageTemp += '<span class="control-label no-padding-right"> 元</span>';
			carriageTemp += '<input type="hidden" name="isDefault'+flag+'" value="0">';
			carriageTemp += ' <i class="icon-hand-right icon-animated-hand-pointer blue"></i>';
			carriageTemp += '<a href="javascript:;" class="pink" onclick="setCarriageForArea('+flag+');" id="setCarriageForArea'+flag+'">添加地区</a>';
			carriageTemp += '<span id="showRegion'+flag+'" name="showRegion'+flag+'" style="color: black;font: bolder;"></span>';
			carriageTemp += '<input type="hidden" id="regionAndCity'+flag+'" name="regionAndCity'+flag+'" value="">';
			carriageTemp += '</div>';
			carriageTemp += '</div>';
			carriageTemp += '</div>';
			
		$("#toAdd").before(carriageTemp);
		
		$("#carriageFlag").val(flag);
 	});
});

function clickPinkage(value) {
	var flag = $("#carriageFlag").val();
	
	for(var i = 0; i < flag + 1; i++) {
		var initNum = "#initNum" + i;
		var initCarriage = "#initCarriage" + i;
		var renewNum = "#renewNum" + i;
		var renewCarriage = "#renewCarriage" + i;
		var setCarriageForArea = "#setCarriageForArea" + i;
		
		if(value == 1) {
			$(initNum).attr("disabled", "disabled");
			$(initCarriage).attr("disabled", "disabled");
			$(renewNum).attr("disabled", "disabled");
			$(renewCarriage).attr("disabled", "disabled");
			$("#addCarriage").attr("disabled", "disabled");
			$(setCarriageForArea).hide();
			$(setCarriageForArea).prev("i").hide();
			
			$("#carriageInfo").html("包邮模板，不设置运费");
		} else {
			$(initNum).removeAttr("disabled");
			$(initCarriage).removeAttr("disabled");
			$(renewNum).removeAttr("disabled");
			$(renewCarriage).removeAttr("disabled");
			$("#addCarriage").removeAttr("disabled");
			$(setCarriageForArea).show();
			$(setCarriageForArea).prev("i").show();
			
			$("#carriageInfo").html("默认运费必须设置，可以为指定城市设置不同的运费");
		}
	}
}

function validTemplate() {
	var name = $("#name").val();
	if(isEmptyByVal(name)) {
		notice.error("请输入模板名称！", 6);
		return false;
	}
	
	var isPinkage = $("input[name=isPinkage]:checked").val();
	if(isPinkage == 1) {
		
	} else {
		//判断默认运费是否填写完成
		var isNull = false;
		$("#carriageTemp0").find("input[type=text]").each(function() {
			var val = $(this).val();
			if(val == null || $.trim(val) == "") {
				isNull = true;
			}
		});
		if(isNull == true) {
			notice.error("请设置完整的默认运费！", 6);
			return false;
		}
		
		//判断所有运费是否都填写完成
		var isEmpty = false;
		var num;
		var isEmpty_region = false;
		var num_region;
		var flagValue = $("#carriageFlag").val();
		for(var i = 1; i < parseInt(flagValue) + 1; i++) {
			$("#carriageTemp"+i).find("input[type=text]").each(function() {
				var cVal = $(this).val();
				if(cVal == null || $.trim(cVal) == "") {
					isEmpty = true;
					num = i;
					
					return false;
				}
			})
			var regionVal = $("#carriageTemp"+i).find("span[name=showRegion"+i+"]").html();
			if(isEmptyByVal(regionVal)) {
				isEmpty_region = true;
				num_region = i;
			}
		}
		if(isEmpty == true) {
			notice.error("特定城市的运费设置，第 " + num + " 行，请填写完整的运费信息！");
			return false;
		}
	}
	
	$("#carriageTemplateForm").submit();
}

function saveTemplate() {
	var isDefault = $("input[name=isDefault]:checked").val();
	var name = $("#name").val();
	if($.trim(name).length == 0) {
		notice.warning("请填写模板名称！", 20);
		return false;
	}
	var isPinkage = $("input[name=isPinkage]:checked").val();
	var mode = $("input[name=mode]:checked").val();
	var carryType = $("input[name=carryType]:checked").val();
	
	var initNum = $("#initNum").val();
	var renewNum = $("#renewNum").val();
	var initCarriage = $("#initCarriage").val();
	var renewCarriage = $("#renewCarriage").val();
	
	var regionAndCity = $("#regionAndCity").val();
	
	var url =  contextPath + '/admin/template/add';
	$.ajax({
		type : "POST",
		url : url,
		data : {
			"isDefault" : isDefault, "name" : name, "isPinkage" : isPinkage, "mode" : mode, "carryType" : carryType,
			"initNum" : initNum, "renewNum" : renewNum, "initCarriage" : initCarriage, "renewCarriage" : renewCarriage,
			"areas" : regionAndCity
		},
		async : false,
		error : function() {
			alert("网络不给力，请稍后再试！");
			return false;
		},
		success : function(data) {
			if(data == "1") {
				notice.info("运费模板保存成功！", 10);
				
				$("#carriageTemplateForm").find("input[type=text]").each(function() {
					$(this).val("");
				});
				
				if(isDefault == 1) {
					DataTable.reload("defaultTemplateDatatable");
				} else {
					DataTable.reload("templateDatatable");
				}
				
				return true;
			} else if(data == "3") {
				notice.warning("该计价方式的默认运费模板已经存在！", 20);
				return false;
			} else {
				notice.warning("运费模板保存失败！", 10);
				return false;
			}
		}
	});
}

function changeMode() {
	var mode = $("input[name=mode]:checked").val();
	var flag = $("#carriageFlag").val();
	
	for(var i = 0; i < flag + 1; i++) {
		var initTip = "#initTip" + i;
		var renewTip = "#renewTip" + i;
		
		//为了适应格式，多加一个空格
		if(i > 0) {
			if(mode == 1) {
				$(initTip).html(" 件内， ");
				$(renewTip).html(" 件，增加运费 ");
			} else if(mode == 2) {
				$(initTip).html(" kg内， ");
				$(renewTip).html(" kg，增加运费 ");
			} else if(mode == 3) {
				$(initTip).html(" 立方内， ");
				$(renewTip).html(" 立方，增加运费 ");
			}
		} else {
			if(mode == 1) {
				$(initTip).html(" 件内，");
				$(renewTip).html(" 件，增加运费 ");
			} else if(mode == 2) {
				$(initTip).html(" kg内，");
				$(renewTip).html(" kg，增加运费 ");
			} else if(mode == 3) {
				$(initTip).html(" 立方内，");
				$(renewTip).html(" 立方，增加运费 ");
			}
		}
	}
}

function checkDefault(isDefault) {
	var mode = $("input[name=mode]:checked").val();
	var modeStr;
	if(mode == 3) {
		modeStr = "按体积"; 
	} else {
		modeStr = "按重量";
	}
	
	var url =  contextPath + '/admin/template/isExistDefault';
	$.ajax({
		type : "POST",
		url : url,
		data : {
			"isDefault" : isDefault, "mode" : mode
		},
		async : false,
		error : function() {
			alert("网络不给力，请稍后再试！");
			return false;
		},
		success : function(data) {
			if(data == "1") {
				notice.info("店铺默认的运费模板（"+modeStr+"）已经存在！", 20);
				return false;
			} else {
				$(".toSelectArea").hide();
			}
		}
	});
}

function getAllAreas(flag) {
	$("#region").empty();
	
	var url =  contextPath + '/admin/lib/getAllAreas';
	$.ajax({
		type : "POST",
		url : url,
		async : false,
		error : function() {
			alert("网络不给力，请稍后再试！");
			return false;
		},
		success : function(text) {
			var data = eval("(" + text + ")");
			
			for(var key in data) {
				var str = '<div class="col-xs-12">';
					str += '<div class="control-group" name="regionGroup">';
					
					str += '<div class="col-xs-2">';
					str += '<div class="checkbox">';
					str += '<label>';
					str += '<input name="region" type="checkbox" class="ace" value="'+data[key].regionCode+'" onclick="checkedRegion('+data[key].regionCode+');" />';
					str += '<span class="lbl" style="font-weight: bolder;">'+data[key].regionCnName+'</span>';
					str += '</label>';
					str += '</div>';
					str += '</div>';
					
					var areas = data[key].areas;
					for(var i = 0; i < areas.length; i++) {
						if(areas.length >= 6 && i == 5) {
							str += '<div class="col-xs-2"></div>';
						}
						
						str += '<div class="col-xs-2">';
						str += '<div class="checkbox">';
						str += '<label>';
						
						str += '<input type="hidden" name="'+data[key].regionCode+'">';
						str += '<input name="area" type="checkbox" class="ace" value="'+areas[i].areaCode+'" onclick="checkedArea('+data[key].regionCode+');"/>';
						str += '<span class="lbl">'+areas[i].areaCnName+'</span>';
						str += '<span class="icon-caret-down icon-only" onclick="getCitys('+areas[i].areaCode+');"></span>';
						str += '<input type="hidden" name="'+areas[i].areaCode+'" value="">';
						
						str += '</label>';
						str += '</div>';
						str += '</div>';
					}
					
					str += '</div>';
					str += '</div>';
				$("#region").append(str);
			}
		}
	});
}

function checkedRegion(regionCode) {
	$("input[name="+regionCode+"]").each(function() {
		if($(this).next().prop("checked")) {
			$(this).next().prop("checked", false);
		} else {
			$(this).next().attr("checked", "checked");
		}
	});
}
function checkedArea(regionCode) {
	var len = $("input[name="+regionCode+"]").siblings("input[name=area]:checked").length;
	if(len > 0) {
		$("input[name=region]").each(function() {
			if($(this).val() == regionCode) {
				$(this).attr("checked", "checked");
			}
		})
	} else {
		$("input[name=region]").each(function() {
			if($(this).val() == regionCode) {
				$(this).prop("checked", false);
			}
		})
	}
}


function getCitys(areaCode) {
	$("#city").empty();
	
	var result = true;
	var url =  contextPath + '/admin/lib/getArea';
	$.ajax({
		type : "POST",
		url : url,
		data : {
			"parentCode" : areaCode
		},
		async : false,
		error : function() {
			alert("网络不给力，请稍后再试！");
			return false;
		},
		success : function(text) {
			var data = eval("(" + text + ")");
			if(data.length == 0) {
				notice.warning("该地区下没有二级城市", 12);
				result = false;
			} else {
				var cityList = new Array();
				for(var key in data) {
					var str = '<div class="col-xs-2">';
						str += '<div class="checkbox">';
						str += '<label>';
						str += '<input type="hidden" name="parentCode" value="'+data[key].parentCode+'"/>';
						str += '<input name="city" type="checkbox" class="ace" value="'+data[key].code+'" checked="checked"/>';
						str += '<span class="lbl">'+data[key].cnName+'</span>';
						str += '</label>';
						str += '</div>';
						str += '</div>';
						
					cityList.push(data[key].code);
						
					$("#city").append(str);
				}
				$("input[name="+areaCode+"]").val(cityList);
			}
		}
	});
	
	if(result == true) {
		setCity(areaCode);
	}
}

function getCheckedCitys() {
	var cityStr = '';
	var cityCount = 0;
	$("input[name=city]:checked").each(function() {
		cityCount++;
		if(cityCount > 1) {
			cityStr += ',';
		}
		cityStr += '{';
		
		var cityCode = $(this).val();
		var cityCnName = $(this).next().html();
		
		var cityCodeStr = '"cityCode"' + ':' + '"'+cityCode+'"';
		var cityCnNameStr = '"cityCnName"' + ':' + '"'+cityCnName+'"';
		
		cityStr += cityCodeStr + ',' + cityCnNameStr;
		
		cityStr += '}';
	});
	
	return cityStr;
}

function setCity(areaCode) {
	$("#city-dialog-message").removeClass('hide').dialog({
		modal: true,
		title: "城市选择",
		title_html: true,
		width : '900px',
		buttons: [ 
			{
				text: "取消",
				"class" : "btn btn-xs",
				click: function() {
					$( this ).dialog( "close" ); 
				} 
			},
			{
				text: "确定",
				"class" : "btn btn-primary btn-xs",
				click: function() {
					var cityStr = getCheckedCitys();
					$("input[name="+areaCode+"]").val(cityStr);
					
					$("input[name="+areaCode+"]").siblings("input[name=area]").prop("checked", true);
					
					$( this ).dialog( "close" ); 
				}
			}
		]
	});
}

function getDefaultCitys(areaCode) {
	var cityResult = '';
	
	var url =  contextPath + '/admin/lib/getArea';
	$.ajax({
		type : "POST",
		url : url,
		data : {
			"parentCode" : areaCode
		},
		async : false,
		error : function() {
			alert("网络不给力，请稍后再试！");
			return false;
		},
		success : function(text) {
			var data = eval("(" + text + ")");
			
			var cityCount = 0;
			for(var key in data) {
				var cityCodeStr = '"cityCode"' + ':' + '"'+data[key].code+'"';
				var cityCnNameStr = '"cityCnName"' + ':' + '"'+data[key].cnName+'"';
				
				var cityStr = '{';
				cityStr += cityCodeStr;
				cityStr += ',';
				cityStr += cityCnNameStr;
				cityStr += '}';
				
				cityCount++;
				if(cityCount < data.length) {
					cityStr += ',';
				}
				
				cityResult += cityStr;
			}
		}
	});
	return cityResult;
}

function getAllCheckedRegionAndCity(flag) {
	var showStr = new Array();
	var regionAndCityArray = new Array();
	$("input[name=region]:checked").each(function() {
		var resultStr;
		var regionCode = $(this).val();
		var regionCnName = $(this).next().html();
		
		showStr.push(regionCnName);
		$("#showRegion"+flag).html(" [选中地区：" + showStr + "]");
		
		var regionCodeStr = '"regionCode"' + ':' + '"'+regionCode+'"';
		var regionCnNameStr = '"regionCnName"' + ':' + '"'+regionCnName+'"';
		
		resultStr = '{' + regionCodeStr + ',' + regionCnNameStr;
		
		resultStr += ',' + '"areas"' + ':' + '[';
		var areaCount = 0;
		$(".control-group").find("input[name="+regionCode+"]").each(function() {
			var chk = $(this).next();
			
			var areaCode = chk.val();
			var areaCnName = chk.next('.lbl').html();
			
			areaCount++;
			if(areaCount > 1) {
				resultStr += ',';
			}
			
			var areaCodeStr = '{' + '"areaCode"' + ':' + '"' + areaCode + '"';
			var areaCnNameStr = '"areaCnName"' + ':' + '"' + areaCnName + '"';
			
			resultStr += areaCodeStr + "," + areaCnNameStr;
			
			resultStr += ',' + '"citys"' + ':' + '[';
			if(chk.prop("checked") == true) {
				var allcitys = chk.next().siblings('input[name='+areaCode+']').val();
				
				//如果没有单独选择省下面的市区，则默认全选
				if(allcitys == null || allcitys == "" || allcitys.length == 0) {
					allcitys = getDefaultCitys(areaCode);
				}
				
				resultStr += allcitys;
			}
			resultStr += ']';
			resultStr += '}';
		})
		resultStr += ']';
		
		resultStr += '}';
		
		regionAndCityArray.push(resultStr);
	});
	var endRegionCity = '[' + regionAndCityArray + ']';

	return endRegionCity;
}

function setCarriageForArea(flag) {
	getAllAreas(flag);
	
	$("#dialog-message").removeClass('hide').dialog({
		modal: true,
		title: "地区选择",
		title_html: true,
		width : '1000px',
		buttons: [ 
			{
				text: "取消",
				"class" : "btn btn-xs",
				click: function() {
					$( this ).dialog( "close" ); 
				} 
			},
			{
				text: "确定",
				"class" : "btn btn-primary btn-xs",
				click: function() {
					var regionAndCity = getAllCheckedRegionAndCity(flag);
					$("#regionAndCity"+flag).val(regionAndCity);
					
					$( this ).dialog( "close" ); 
				}
			}
		]
	});
}

function deleteTemplate(id) {
	if(confirm("确定删除该模板吗？") == true) {
		var url =  contextPath + '/admin/template/delete';
		$.ajax({
			type : "POST",
			url : url,
			data : {
				"id" : id
			},
			async : false,
			error : function() {
				alert("网络不给力，请稍后再试！");
				return false;
			},
			success : function(data) {
				if(data == "1") {
					notice.info("模板删除成功！", 10);
					
					DataTable.reload("carriage-table");
				} else {
					notice.warning("模板删除失败！", 10);
					return false;
				}
			}
		});
	}
}


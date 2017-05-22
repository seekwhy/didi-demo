function withdrawApply() {
	var isExist = validIsExistRefuseWithdraw();
	if(isExist == true) {
		notice.error("提现申请已被拒绝！", 6);
		return false;
	}
	
	var withdrawFee = $("#withdrawFeeVal").val();
	
	var amount = $("#amount").val();
	var amountVal;
	if(isEmptyByVal(amount)) {
		alert("请填写提现金额", 6);
		return false;
	} else {
		if(isDecimals(amount) || isPosInt(amount)) {
			// amount = amount * 100;
		} else {
			notice.error("请输入正确的金额！", 6);
			return false;
		}
	}
	
	if(parseInt(amount * 100) > parseInt(withdrawFee * 100)) {
		alert("提现金额不能大于可提现金额！", 6);
		return false;
	}
	
	var shopId = $("#shopId").val();
	var totalToAccountFee = $("#totalToAccountFee").val();
	var bankBranchName = $("#bankBranchName").val();
	var bankNo = $("#bankNo").val();
	var realCardNo = $("#realCardNo").val();
	var bankCardId = $("#bankCardId").val();
	var bankAccountName = $("#bankAccountName").val();
	var startDate = $("#startDate").val();
	var endDate = $("#endDate").val();
	var timeScope = $("#timeScope").find("option:selected").val();
	
	$.ajax({
		type : "post",
		url : contextPath+'/admin/financial/apply',
		data : {
			"amount" : amount, "totalToAccountFee" : totalToAccountFee, "withdrawFee" : withdrawFee, "bankCardId" : bankCardId,
			"bankBranchName" : bankBranchName, "bankNo" : realCardNo, "bankAccountName" : bankAccountName,
			"shopId" : shopId, "startDate" : startDate, "endDate" : endDate, "timeScope" : timeScope
		},
		dataType : "text",
		async: false,
		error : function() {
			alert("系统忙，请稍后再试！");
		},
		success : function(text) {
			if(text == "1") {
				alert("提现申请成功！", 6);
				return true;
			} else {
				alert("提现申请失败！", 6);
				return false;
			}
		}
	});
}

function validIsExistRefuseWithdraw() {
	var result = false;
	$.ajax({
		type : "post",
		url : contextPath+'/admin/financial/isExistRefuse',
		dataType : "text",
		async: false,
		error : function() {
			alert("系统忙，请稍后再试！");
		},
		success : function(text) {
			if(parseInt(text) > 0) {
				result = true;
			} else {
				result = false;
			}
		}
	});
	return result;
}

function search() {
	DataTable.reload("datatable-withdraw-record");
}

function toBindCard(hbbUserId, type) {
	location.href = contextPath + '/admin/financial/toBindCard?hbbUserId='+hbbUserId+'&type='+type;
}
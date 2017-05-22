
// 获取验证码
$("#vc").bind("click", function() {
	var url = contextPath+"/admin/verify/generateCode?t=" + Math.random();
	$("#vc").attr("src", url);
});
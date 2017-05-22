$(function() {
	// 页面淡入
	$("#inputGoods").show("slow");

	// 点击下拉菜单
	$(".chosen-select").chosen();

	// 选择图片
	$('.uploadImage').uploadImage();

	// 产地级联查询显示
	$(".area").chosen().change(
			function() {
				var areaName = $(this).find("option:selected").text(); // 地区名称
				var areaCode = $(this).val(); // 地区编码
				var cid = $(this).attr("id"); // 当前菜单id
				var sid = parseInt(cid) + 1; // 下级菜单id
				var areaId = $(this).find("option:selected").attr("areaId");

				if ((cid == 1 && areaName != "中国") || cid == 3 || (cid ==2 && (areaName == '香港' || areaName == '澳门' || areaName == '台湾'))) {
					$("#areaId").val(areaId); // 产地id隐藏域赋值
				} else {
					$("#areaId").val("");
				}

				if ($.trim(areaCode) != "") {
					$.ajax({
						type : "post",
						url : contextPath+'/admin/lib/getArea',
						data : {
							"parentCode" : areaCode
						},
						dataType : "json",
						error : function() {
							notice.warning("系统忙，请稍后再试！");
						},
						success : function(data) {
							if (cid < 3 && data.length > 0) { // 目前只到省级市就ok

								var title = "-选择省/直辖市-";
								if (cid == 2) {
									title = "-选择城市-";
								}
								var areaList = JSON.parse("{\"title\":\""
										+ title + "\",\"areaList\":"
										+ JSON.stringify(data) + "}"); // 将json转换为字符串类型，同时命名为areaList，再转回json
								var content = Mustache.render(tp.value,
										areaList);
								$("#" + sid).empty();
								$("#" + sid).prop("disabled", "");
								$("#" + sid).append(content).trigger(
										"chosen:updated");
							} else {
								$("#" + sid).prop("disabled", "disabled")
										.trigger("chosen:updated");
								$("#" + (sid + 1)).prop("disabled", "disabled")
										.trigger("chosen:updated");
							}
						}
					});
				} else {
					$("#" + sid).prop("disabled", "disabled").trigger(
							"chosen:updated");
					$("#" + (sid + 1)).prop("disabled", "disabled").trigger(
							"chosen:updated");
				}
			});

	// 商品名称查重
	$("#name").blur(function() {
		var name = $("#name").val();
		var oname = $("#originalName").val();
		var shopId = $("#shopId").val();
		if ($.trim(name) != "") {
			if(oname != "" && $.trim(name) == oname){
				//未做修改的名称，不做处理
			}else{
				$.ajax({
					type : "post",
					url : contextPath+'/admin/goods/checkName',
					async : false,
					data : {
						"shopId" : shopId,
						"name" : name
					},
					dataType : "text",
					error : function() {
						notice.warning("系统忙，请稍后再试！");
						$("#name").val("");
					},
					success : function(text) {
						if (text != '0') {
							notice.error("该名称已存在！");
							$("#name").val("");
						}
					}
				});
			}
			
		}
	});

	// 富文本编辑器初始化
	var ue = UE.getEditor('contentArea', {
		toolbars : [ [
		'source', //源代码
		'anchor', // 锚点
		'undo', // 撤销
		'redo', // 重做
		'bold', // 加粗
		'indent', // 首行缩进
		'italic', // 斜体
		'underline', // 下划线
		'strikethrough', // 删除线
		'subscript', // 下标
		'fontborder', // 字符边框
		'superscript', // 上标
		'formatmatch', // 格式刷
		'pasteplain', // 纯文本粘贴模式
		'selectall', // 全选
		'preview', // 预览
		'horizontal', // 分隔线
		'removeformat', // 清除格式
		'time', // 时间
		'date', // 日期
		'unlink', // 取消链接
		'insertrow', // 前插入行
		'insertcol', // 前插入列
		'mergeright', // 右合并单元格
		'mergedown', // 下合并单元格
		'deleterow', // 删除行
		'deletecol', // 删除列
		'splittorows', // 拆分成行
		'splittocols', // 拆分成列
		'splittocells', // 完全拆分单元格
		'deletecaption', // 删除表格标题
		'inserttitle', // 插入标题
		'mergecells', // 合并多个单元格
		'deletetable', // 删除表格
		'cleardoc', // 清空文档
		'insertparagraphbeforetable', // "表格前插入行"
		'fontfamily', // 字体
		'fontsize', // 字号
		'paragraph', // 段落格式
		'simpleupload', // 单图上传
		'insertimage', // 多图上传
		'edittable', // 表格属性
		'edittd', // 单元格属性
		'link', // 超链接
		'spechars', // 特殊字符
		'searchreplace', // 查询替换
		// 'map', //Baidu地图
		// 'gmap', //Google地图
		// 'insertvideo', //视频
		// 'help', //帮助
		'justifyleft', // 居左对齐
		'justifyright', // 居右对齐
		'justifycenter', // 居中对齐
		'justifyjustify', // 两端对齐
		'forecolor', // 字体颜色
		'backcolor', // 背景色
		'insertorderedlist', // 有序列表
		'insertunorderedlist', // 无序列表
		'fullscreen', // 全屏
		'directionalityltr', // 从左向右输入
		'directionalityrtl', // 从右向左输入
		'rowspacingtop', // 段前距
		'rowspacingbottom', // 段后距
		'pagebreak', // 分页
		'insertframe', // 插入Iframe
		'imagenone', // 默认
		'imageleft', // 左浮动
		'imageright', // 右浮动
		// 'attachment', //附件
		'imagecenter', // 居中
		'wordimage', // 图片转存
		'lineheight', // 行间距
		'autotypeset', // 自动排版
		'touppercase', // 字母大写
		'tolowercase', // 字母小写
		// 'background', //背景
		// 'template', //模板
		// 'scrawl', //涂鸦
		// 'music', //音乐
		'inserttable', // 插入表格
		// 'charts', // 图表
		] ],
		autoHeightEnabled : true
	});

	// 发布
	$("#goodsForm")
			.ajaxForm(
					{
						beforeSubmit : function() {
							// 校验
							if (!verify()) {
								return false;
							}

							var pgv = 10; // 初始进度值
							// 显示进度
							bootbox
									.dialog({
										message : "<div class='progress progress-striped active' data-percent='商品发布中'><div id='pg' class='progress-bar progress-bar-success' style='width: "
												+ pgv + "%;'></div></div>",
										closeButton : false
									});

							// 进度变化
							setInterval(function() {
								pgv += 10;
								if (pgv < 100) {
									$("#pg").css("width", pgv + "%");
								}
							}, 1000);
						},
						error:function(){
							bootbox.hideAll(); // 清除进度条
							pgv = 10;
							$("#pg").css("width", pgv + "%");

							bootbox.dialog({
								message : "<h3>系统忙，请稍后再试！</h3>",
								buttons : {
									"redo" : {
										"label" : "重新发布",
										"className" : "btn-sm btn-danger",
										"callback" : function() {
											// Example.show("Primary
											// button");
										}
									}
								}
							});
						},
						success : function(data) {
							if (data != '-1') {
								bootbox.hideAll(); // 清除进度条
								bootbox
										.dialog({
											message : "<h3>发布成功！</h3>",
											closeButton : false,
											buttons : {
												"toList" : {
													"label" : "查看商品列表",
													"className" : "btn-sm btn-primary",
													"callback" : function() {
														window.location.href = contextPath+"/admin/goods/toList";
													}
												},
												"goon" : {
													"label" : "添加新商品",
													"className" : "btn-sm btn-success",
													"callback" : function() {
														window.location.href = contextPath+"/admin/goods/toChoose";
													}
												}
											}
										});
							} else {
								bootbox.hideAll(); // 清除进度条
								pgv = 10;
								$("#pg").css("width", pgv + "%");

								bootbox.dialog({
									message : "<h3>发布失败！</h3>",
									buttons : {
										"redo" : {
											"label" : "重新发布",
											"className" : "btn-sm btn-danger",
											"callback" : function() {
												// Example.show("Primary
												// button");
											}
										}
									}
								});
							}
						}
					});

});
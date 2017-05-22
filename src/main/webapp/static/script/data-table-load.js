$(function(){

	  var dtId = "datatable";
	  if("undefined" != typeof userDataTableId && userDataTableId != ''){
		  dtId = userDataTableId;
	  }	  

	  //动态数据源
	  DataTable.load(dtId, {
	  	"pagetheme" : 'FULL',
	  	"loading" : '<div><i class="icon-spinner icon-spin icon-2x"></i>  数据加载中......</div>',
	  	"row":10,
		"start":function(dataTableObj,initFlag){
			if($("#noDataNotice").length == 1 ){
				$("#noDataNotice").hide();
			}
			//权限验证(filter拦截不住)
			$.ajax({type:"post",
				url:contextPath+'/login/check',
				async:true,
				dataType:"text",
	         	error: function(){
	         		window.location.href = contextPath;
	        	},
	        	success:function(text){
		        	if(text == ""){
		        		alert("操作超时，请重新登录！");
		        		window.location.href = contextPath;
		        		return;
		        	}
		        }
		     });
	    },
		"end":function(dataTableObj,initFlag){
			var realRowCount = dataTableObj.rows.length;
	        if(realRowCount<=2){
	        	if($("#noDataNotice").length == 0 ){
					var content = '<p id="noDataNotice" style="text-align: center;">未查询到数据 <i class="icon-exclamation-sign icon-2x"></i></p>';
					$('.panelBar').hide().before(content);
				}
	        	$('.panelBar').hide();
	        	$("#noDataNotice").show();
	        }else{
	        	$("#noDataNotice").hide();
	        	$('.panelBar').show();
	        	if(window.dataLoadEndCallBack){
	        		dataLoadEndCallBack();
	        	}
	        }
	    }

	  });
	  
	  //禁用Enter键表单自动提交  
      document.onkeydown = function(event) {  
          var target, code, tag;  
          if (!event) {  
              event = window.event; //针对ie浏览器  
              target = event.srcElement;  
              code = event.keyCode;  
              if (code == 13) {  
                  tag = target.tagName;  
                  if (tag == "TEXTAREA") { return true; }  
                  else { return false; }  
              }  
          }  
          else {  
              target = event.target; //针对遵循w3c标准的浏览器，如Firefox  
              code = event.keyCode;  
              if (code == 13) {  
                  tag = target.tagName;  
                  if (tag == "INPUT") { return false; }  
                  else { return true; }  
              }  
          }  
      };  
});

function Notice(time){
	this.time = time;	//延迟时间(ms)
}

/**
 * 失败通知
 * @param content 显示内容
 * @param delay 延迟时间
 */
Notice.prototype.error = function(content,delay){
	if(!delay){
		delay = this.time
	}
	$.gritter.add({
		//title: 'This is a centered notification',
		text: content,
		class_name: 'gritter-center gritter-light gritter-error',
		time:delay
	});
}


/**
 * 成功通知
 * @param content 显示内容
 * @param delay 延迟时间
 */
Notice.prototype.success = function(content,delay){
	if(!delay){
		delay = this.time
	}
	$.gritter.add({
		text: content,
		class_name: 'gritter-center gritter-light gritter-success',
		time:delay
	});
}

/**
 * 提示通知
 * @param content 显示内容
 * @param delay 延迟时间
 */
Notice.prototype.info = function(content,delay){
	if(!delay){
		delay = this.time
	}
	$.gritter.add({
		text: content,
		class_name: 'gritter-center gritter-light gritter-info',
		time:delay
	});
}

/**
 * 警告通知
 * @param content 显示内容
 * @param delay 延迟时间
 */
Notice.prototype.warning = function(content,delay){
	if(!delay){
		delay = this.time
	}
	$.gritter.add({
		text: content,
		class_name: 'gritter-center gritter-light gritter-warning',
		time:delay
	});
}

var notice = new Notice(1000);


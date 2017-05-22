(function($){
	var aspRatio = 0;
	var cb = null;
	var jcrop = null;
	var res = null;
	
	$(function(){
		$('#J_modal_upload_form').ajaxForm({
			beforeSubmit : function(){
				hideError();
				$('#J_modal_upload_loading').show();
			},
			success : function(data){
				if(data.result){
					hideError();
					onUploadSuccess(data.image);
				}else{
					showError(data.error);
				}
			}
		});
		
		$('#J_modal_crop_form').ajaxForm({
			success : function(data){
				if(data.result){
					onImageSelected();
				}else{
					showError(data.error);
				}
			}
		});
	});
	
	
	
	function showError(msg){
		$('#J_modal_upload_loading').hide();
		$('#J_modal_upload_alert').text(msg).show();
	}
	
	function hideError(){
		$('#J_modal_upload_loading').hide();
		$('#J_modal_upload_alert').hide();
	}
	
	//upload succeed
	function onUploadSuccess(image){
		var suffix = image.indexOf('?') > 0 ? '&previrw=true' : '?preview=true';
		var $img = $('<img></img>').attr('src', resourcePath + image + suffix);
		$('#J_modal_image_div').find('div.clearfix').empty().append($img);
		$('#J_modal_crop_form input[name=image]').val(image);
		$img.load(function(){
			$('#J_modal_image_div').show();
			$('#J_modal_upload_loading').hide();
			$('#J_modal_image_btn').attr('img', image).removeClass('disabled');
		});
		jcrop = null;
		bindImageCrop();
	}
	
	function bindImageCrop(){
		if(jcrop){
			jcrop.setSelect([10, 10, 450, 450]);
			jcrop.enable();
			return;
		}
		
		var $cropForm = $('#J_modal_crop_form');
		
		var maxWidth = $cropForm.find('input[name=maxWidth]').val();
		var maxHight = $cropForm.find('input[name=maxHight]').val();
		var maximumSize = [maxWidth,maxHight];
		
		var onSelection = function(c){
			$cropForm.find('input[name=x]').val(c.x);
			$cropForm.find('input[name=y]').val(c.y);
			$cropForm.find('input[name=w]').val(c.w);
			$cropForm.find('input[name=h]').val(c.h);
			
			$cropForm.find('input[name=wh]').val("图片宽：" + c.w + " 像素, 高：" + c.h + " 像素");
			
			/*判断是否符合指定尺寸(若小于指定尺寸，则x、y为负数)*/
			if(c.x < 0 || c.y < 0){
				$("#J_modal_image_div").hide();
				$('#J_modal_image_btn').addClass('disabled');
				showError("图片尺寸不能小于 "+maxWidth+"x"+maxHight+"，请重新选择！");
				return;
			}
			
		};
		if(maxWidth == 0 || maxHight == 0){
			var options = {
					onSelect : onSelection,
					onChange : onSelection,
					boxWidth: 500,
					boxHeight: 300,
					setSelect:  [ 10, 10, 450, 450 ],
					bgOpacity: 0.3,
					keySupport: true
			};
		}else{
			var options = {
					onSelect : onSelection,
					onChange : onSelection,
					boxWidth: 500,
					boxHeight: 300,
					setSelect:  [ 10, 10, 450, 450 ],
					bgOpacity: 0.3,
					keySupport: true,
					maxSize: maximumSize,
					minSize: maximumSize
			};
		}
		
		if(aspRatio){
			options['aspectRatio'] = aspRatio; 
		}
		
		$('#J_modal_image_div img').Jcrop(options, function(){
			jcrop = this;
		});
	}
	
	function unbindImageCrop(){
		if(jcrop){
			jcrop.release();
			jcrop.disable();
		}
	}
	
	function onImageSelected(){
		if($('#J_modal_image_btn').attr('img') &&  typeof cb == 'function'){
			cb($('#J_modal_image_btn').attr('img'));
		}
		$('#J_modal_upload_image').modal('hide');
	}
	
	function init(){
		$('#J_modal_upload_form input[name=file]').val('');
		$('#J_modal_image_div').hide();
		$('#J_modal_image_btn').removeAttr('img').addClass('disabled');
		$('#J_modal_image_div input:checkbox').prop('checked', 'checked');
		$('#J_modal_upload_loading').hide();
		
		hideError();
		
		$('#J_modal_upload_form input[name=folder]').val(res || "");
		$('#J_modal_upload_form input[name=file]').unbind('change').change(function(){
			hideError();
			$(this).parents('form').submit();
		});
		
		$('#J_modal_image_div input:checkbox').unbind('change').change(function(){
			if($(this).is(':checked')){
				bindImageCrop();
			}else{
				unbindImageCrop();
			}
		});
		
		$('#J_modal_image_btn').unbind('click').click(function(){
			if($('#J_modal_image_div input:checkbox').is(':checked')){
				$('#J_modal_crop_form').submit();
			}else{
				onImageSelected();
			}
		});
		
		$('#J_modal_upload_image').modal();
	}
	
	
	$.uploadImage = function(callback, aspectRatio, folder){
		aspRatio = aspectRatio;
		cb = callback;
		res = folder;
		
		init();
	};
	
	$.fn.extend({
		uploadImage : function(){
			return this.click(function(){
				var $this = $(this);
				//var name = $this.data('for');
				var id = $this.data('for');	//根据id回调赋值图片url
				var ratio = parseFloat(eval($this.data('ratio')));
				var folder = $this.data('folder');
				$.uploadImage(function(img){
					$('#' + id).val(img);
					var $img = $('img[name=' + id + ']');
					if(!$img[0]){
						$img = $('<img name="' + id + '" class="img-thumbnail" style="height: 200px;margin-top:5px;" /> <input type="button" value="取消" onclick="cancel(\''+id+'\');"/>  ')
						$img.insertBefore($this);
						//$('<br/>').insertBefore($this);
					}
					$img.attr('src', resourcePath + img);
				}, ratio, folder);
			});
		}
	});
	
})(jQuery);

function cancel(picId) {
			//移除隐藏域中的值
			$("#" + picId).val(""); 
			//移除取消按钮
			$("img[name='" + picId + "']").next().remove(); 
			//移除图片
			$("img[name='" + picId + "']").remove(); 
}
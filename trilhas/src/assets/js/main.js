$(function(){
		
	var open = true;
	var windowSize = $(window)[0].innerWidth;
	var targetSizeMenu = (windowSize <= 400) ? 200 : 300;

	if (windowSize <= 768) {
		$('.menu').css('width','0').css('padding','0');
		open = false;
	}

	$('div.menu-btn i').click(function(){
		if(open){
			$('.menu').animate({'width':0,'padding':0},function(){
				open = false;
			});			
			$('.content,.crud').css('width','100%');
			$('.content,.crud').animate({'left':0},function(){
				open = false;
			});
			//$('.content').animate({'left':'0'});
		}else{
			$('.menu').css('display','block');
			$('.menu').animate({'width':targetSizeMenu+'px','padding':'10px'},function(){
				open = true;
			});			
			//$('.content,header').css('width','calc(100% - 300px)');
			$('.content,.crud').animate({'left':targetSizeMenu+'px'},function(){
				open = true;
			});
		}
	});

	$(window).resize(function(){
		windowSize = $(window)[0].innerWidth;
		if (windowSize <= 768) {
			$('.menu').css('width','0').css('padding','0');
			$('.content,.crud').css('width','100%').css('left','0');
			open = false;
		}else{
			open = true;
			$('.content,.crud').css('width','calc(100% - 250px)').css('left','250px');
			$('.menu').css('width','250px').css('padding','10px 0');
		}
	})

	/*$('[formato=data]').mask('99/99/9999');

	$('[actionBtn=delete]').click(function(){
		var txt;
		var r = confirm("Deseja excluir o registro?");
		if (r == true) {
			return true;
		}else{
			return false;
		}
	})*/
});
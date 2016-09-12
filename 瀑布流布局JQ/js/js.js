$(window).ready(function(){
	waterfall();
	// checkScrollSlide()
	var dataInt={'data':[{'scr':'1.jpg'},{'scr':'2.jpg'},{'scr':'3.jpg'},{'scr':'4.jpg'}]}
	$(window).on('scroll',function(){
		if(checkScrollSlide()){
			$.each(dataInt.data,function(key,value){
				var oBox = $('<div>').addClass('box').appendTo($('#main'));
				var oPic = $('<div>').addClass('pic').appendTo($(oBox));
				$('<img>').attr('src','images/'+value.scr).appendTo($(oPic))
			})
			waterfall();
		}
	})
})

function waterfall(){
	var $box = $('#main>div');
	var w = $box.eq(0).outerWidth();  // outerWidth  获取定义padd border
	var cols = Math.floor($(window).width()/w);
	$('#main').width(w*cols).css('margin','0 auto');
	var hAr = [];
	$box.each(function(index,value){
		var h = $box.eq(index).outerHeight();
		if (index<cols) {
			hAr[index]=h;
		}else{
			var minH = Math.min.apply(null,hAr);
			var minHindex = $.inArray(minH,hAr);  //返回数组索引
			$(value).css({
				'position':'absolute',
				'top':minH+'px',
				'left':minHindex*w+'px'
			});
			hAr[minHindex]+=$box.eq(index).outerHeight();
		};
	})
}

function checkScrollSlide(){
	var $lastBox=$('#main>div').last()  //last() 获取最后一个元素
	var lastBoxDis=$lastBox.offset().top+Math.floor($lastBox.outerHeight()/2);
	var scrollTop = $(window).scrollTop();
	var documentH = $(window).height();
	return (lastBoxDis<scrollTop+documentH)?true:false;
}
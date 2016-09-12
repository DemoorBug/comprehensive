$(function(){
	$('svg[data-src]').each(function(index,svg){
		var src = $(svg).data('src');
		$.ajax({
			url : src,
			dataType: 'xml',
			success: function(svgDocument){
				$(svg).after(svgDocument.documentElement).remove();
			}
		})
	})
})
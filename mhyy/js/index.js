$(function(){
	//搜索框
	$(".search .search-left ul li").click(function() {
		var str = $(this).text();
		$(this).parents().find('.search-right-box').find(':text').val(str);
	});

	$('.search-right-box :button').click(function() {
		var str = $(this).parents().find(':text').val();
		if (str==false) {
			alert("请输入查询的关键词！");	
		}
	});
	$('.footer-img-box li>a').hover(function() {
		$(this).parent().find(".second-img").css("display","block");
	}, function() {
		$(this).parent().find(".second-img").css("display","none");
	});


})
	
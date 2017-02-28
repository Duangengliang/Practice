$(function(){
	var flag;
	$(".tab-menu ul li").bind("mouseover",funIn=function(){
		if($(this).hasClass('tab-menu-active')){
			flag=false;
			return false ;
		}
		$(this).addClass("tab-menu-active");
		flag=true;
	}).bind("mouseout",funOut=function(){
		if (flag==false) {
			return false;
		}
		$(this).removeClass("tab-menu-active");
	})
	$(".tab-menu ul li").click(function(){
		var index = $(this).index();
		$(".tab-card div").eq(index).addClass("appear").siblings().removeClass('appear');
		$(this).unbind('mouseout',funOut).addClass('tab-menu-active').siblings().removeClass("tab-menu-active").bind("mouseout",funOut);
	})


	$(".back-to-top").click(function(){
		$(document.body).animate({"scrollTop":0});
	})


	$('.bottom-left').hover(function() {
		$(this).stop().animate({padding:'15px'}, 500);
	}, function() {
		$(this).stop().animate({padding:'40px'}, 500);
	});

	$('.bottom-right').hover(function() {
		$(this).stop()
	}, function() {
		/* Stuff to do when the mouse leaves the element */
	});
})
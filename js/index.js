$(function(){
	
	var $box = $('#box');
	var $mask = $('#mask');
	var $dropdown = $box.find('.action-box');
	var $btn = $dropdown.find('.dropdown-toggle');

	$dropdown.hover(function(){
		if(window.outerWidth > 768){
			$(this).addClass('open').trigger('shown.bs.dropdown');
		}
	},function(){
		if(window.outerWidth > 768){
			$(this).removeClass('open').trigger('hidden.bs.dropdown');
		}
	});

	$dropdown
	.on('shown.bs.dropdown', function () {
	  $mask.addClass('open');
	})
	.on('hidden.bs.dropdown', function () {
	  $mask.removeClass('open');
	});

	var $navbar = $('#navbar');
	var $navBtn = $('#nav-btn');
	var $navMask = $('#nav-mask');
	$navBtn.on('click', function(){
		$navbar.addClass('open');
		$navMask.addClass('open');
	});
	$navMask.on('click', function(){
		$navbar.removeClass('open');
		$navMask.removeClass('open');
	});

	var $myNavbar = $('#my-navbar');
	var $myNav = $('#my-nav');

	function resize(){
		if(window.outerWidth > 768){
			if($dropdown.hasClass('dropup')){
				$dropdown.removeClass('dropup').addClass('dropdown');
			}

			$myNav.appendTo($myNavbar);
		}else{
			if($dropdown.hasClass('dropdown')){
				$dropdown.removeClass('dropdown').addClass('dropup');
			}

			$myNav.appendTo($navbar);
		}
	}

	$(window).on('resize', resize);

	resize();


	

});
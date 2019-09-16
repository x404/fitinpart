$(document).ready(function(){

	// $('.j-search-select').selectize({

	// });


   // $('select').multipleSelect({
   //    single: true,
   //    filter: true
   //  })


	$('.country').on('click', '.dropdown-menu', function(e) {
		e.stopPropagation();
	});

	// close dropdown of Country
	$('.country .close').click(function() {
	  $(this).parents('.dropdown').find('.dropdown-toggle').dropdown('toggle');
	});

	// reinit scroll area after dropdown of Country
	$('.country .dropdown').on('shown.bs.dropdown', function () {
		ps.update();
	});


	// filter country in list
	$('#search-country').keyup(function(){
		let $this = this;
		
		$.each($('.country .dropdown-item'), function() {
			if($(this).text().toLowerCase().indexOf($($this).val().toLowerCase()) === -1) {
				$(this).hide();
			} else {
				$(this).show();
			}
		});
		ps.update();
	});

	// init scrollbar of countries
	const ps = new PerfectScrollbar('.countries-wrapper', {
		wheelPropagation: true,
		minScrollbarLength: 48,
		maxScrollbarLength: 48,
	});

	ps.update();



	// init scrollbar of countries
	const cartlist = new PerfectScrollbar('.cart-products', {
		wheelPropagation: true,
		minScrollbarLength: 100,
		maxScrollbarLength: 100,
	});

	cartlist.update();




	// homeslider
	$('#homeslider').slick({
		prevArrow:'<button class="slick-arrow slick-prev icon icon-slider-arrow" aria-label="Previous" type="button"></button>',
		nextArrow:'<button class="slick-arrow slick-next icon icon-slider-arrow" aria-label="Next" type="button"></button>',
		dots: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		arrows : true,
		fade: true,
		speed: 100000,
	});	


	$('#homeslider').slickAnimation();



	$('#catalog-carousel').slick({
		prevArrow:'<button class="slick-arrow slick-prev icon icon-slider-arrow" aria-label="Previous" type="button"></button>',
		nextArrow:'<button class="slick-arrow slick-next icon icon-slider-arrow" aria-label="Next" type="button"></button>',
		dots: false,
		slidesToShow: 8,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 100000,
		arrows : true
	});	



	// mobile-menu
	$('#navbar').each(function(){
		var $this = $(this),
			$link = $('.navbar-toggle'),
			$close = $('.close-menu'),

			init = function(){
				$link.on('click', openMenu);
				$close.on('click', closeMenu);
			},
			openMenu = function(e){
				e.preventDefault();
				$('body').addClass('o-menu');

			},
			closeMenu = function(e){
				e.preventDefault();
				$('body').removeClass('o-menu');
			};
		init();
	});	
});


$(function(){
	$('.policy input').click(function(){
		var $this = $(this),
			$submit = $this.closest('.form-policy');

		if ($this.is(':checked')){
			$submit.find('.input, .form-control, .submit, .btn-submit, textarea, input[type=radio], button').removeAttr('disabled');
		} else {
			$submit.addClass('disabled');
			$submit.find('.input, .form-control, .submit, .btn-submit, textarea, input[type=radio], button').attr('disabled', true);
		}
	})
});

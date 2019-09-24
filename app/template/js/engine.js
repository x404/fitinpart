$(document).ready(function(){
	$('.top_menu_flex').flexMenu({
		linkText: 'More',
		linkTitle : '',
		linkTextAll : 'Menu',
		cutoff : '1'
	});


	$("#typesearch_select").multipleSelect({
		single: true,
		filter: false
	})

	$('.count-price .plus').on('click', function(e){
		e.preventDefault();
		let $this = $(this),
			countEl = $this.closest('.count').find('.count-control'),
			cnt = parseInt(countEl.val())+1;

		countEl.val(cnt);
	});

	$('.count-price .minus').on('click', function(e){
		e.preventDefault();
		let $this = $(this),
			countEl = $this.closest('.count').find('.count-control'),
			cnt = parseInt(countEl.val())-1;

		countEl.val((cnt <= 0) ? cnt = 0 : cnt) ;
	});


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
		minScrollbarLength: 100,
		maxScrollbarLength: 100,
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
		speed: 1000
	});	


	$('#homeslider').slickAnimation();



	$('#catalog-carousel').slick({
		prevArrow:'<button class="slick-arrow slick-prev icon icon-slider-arrow" aria-label="Previous" type="button"></button>',
		nextArrow:'<button class="slick-arrow slick-next icon icon-slider-arrow" aria-label="Next" type="button"></button>',
		dots: false,
		slidesToShow: 8,
		slidesToScroll: 1,
		autoplay: false,
		autoplaySpeed: 5000,
		arrows : true
	});	

	$('#lastnews-carousel').slick({
		dots: false,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: false,
		arrows : false,
		responsive: [
			{
				breakpoint: 1400,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					centerMode: true,
					centerPadding: '100px'
				}
			},
			{
				breakpoint: 650,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					centerMode: true,
					centerPadding: '70px'
				}
			},
			{
				breakpoint: 560,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					centerMode: true,
					centerPadding: '40px'
				}
			},
			{
				breakpoint: 450,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					centerMode: true,
					centerPadding: '15px'
				}
			},
			{
				breakpoint: 400,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					centerMode: true,
					centerPadding: '70px'
				}
			}
		]
	});


	$('#brands-carousel').slick({
		prevArrow:'<button class="slick-arrow slick-arrow-round-gray slick-prev" aria-label="Previous" type="button"><i class=" icon icon-slider-arrow-gray"></i></button>',
		nextArrow:'<button class="slick-arrow slick-arrow-round-gray slick-next" aria-label="Next" type="button"><i class=" icon icon-slider-arrow-gray"></i></button>',
		dots: false,
		slidesToShow: 6,
		slidesToScroll: 1,
		autoplay: false,
		autoplaySpeed: 5000,
		arrows : true,
		responsive: [
			{
				breakpoint: 1399,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					centerMode: true,
					centerPadding: '100px'
				}
			},
			{
				breakpoint: 650,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					centerMode: true,
					centerPadding: '70px'
				}
			},
			{
				breakpoint: 560,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					centerMode: true,
					centerPadding: '40px'
				}
			},
			{
				breakpoint: 450,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					centerMode: true,
					centerPadding: '15px'
				}
			},
			{
				breakpoint: 400,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					centerMode: true,
					centerPadding: '70px'
				}
			}
		]
	});


	$('#registerModal').on('show.bs.modal', function (e) {
		$('#loginModal').modal('hide')
	})

	$('#forgotPasswordModal').on('show.bs.modal', function (e) {
		$('#loginModal').modal('hide')
	})

	$('.forgotPasswordForm').validate({
		submitHandler:function(form) {
			$('#forgotPasswordModal').modal('hide');
			modalinfo.open();
		}
	})

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


// popup on homepage
class InfoPopup{
	constructor(name){
		this.name = name;
	}
	open(){
		document.querySelector(this.name + ' .close').addEventListener('click', () =>
			this.close()
		);

		// GENERAL EVENT - ONKEYDOWN
		document.addEventListener('keydown', (evt) => {
			evt = evt || window.event;
			let isEscape = false;
			if ("key" in evt) {
				isEscape = (evt.key == "Escape" || evt.key == "Esc");
			} else {
				isEscape = (evt.keyCode == 27);
			}
			if (isEscape) {
				this.close();
			}
		});

		// show popup
		document.querySelector(this.name).classList.add('show');
	}
	close(){
		// hide popup
		document.querySelector(this.name).classList.remove('show');
	}
}

let modalinfo = new InfoPopup('.modal-success');
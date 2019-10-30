$(document).ready(function(){


function toggleDropdown (e) {
  const _d = $(e.target).closest('.dropdown'),
    _m = $('.dropdown-menu', _d);
  setTimeout(function(){
    const shouldOpen = e.type !== 'click' && _d.is(':hover');
    _m.toggleClass('show', shouldOpen);
    _d.toggleClass('show', shouldOpen);
    $('[data-toggle="dropdown"]', _d).attr('aria-expanded', shouldOpen);
  }, e.type === 'mouseleave' ? 300 : 0);
}

$('body')
  .on('mouseenter mouseleave','.dropdown',toggleDropdown)
  .on('click', '.dropdown-menu a', toggleDropdown);


	$.fn.ForceNumericOnly =
	function(){
		return this.each(function()	{
			$(this).keydown(function(e){
				var key = e.charCode || e.keyCode || 0;
				// Разрешаем backspace, tab, delete, стрелки, обычные цифры и цифры на дополнительной клавиатуре
				return (
					key == 8 ||
					key == 9 ||
					key == 46 ||
					(key >= 37 && key <= 40) ||
					(key >= 48 && key <= 57) ||
					(key >= 96 && key <= 105));
			});
		});
	};
	
	$('.top_menu_flex').flexMenu({
		linkText: 'More',
		linkTitle : '',
		linkTextAll : 'Menu',
		cutoff : 0
	});


	$("#typesearch_select").multipleSelect({
		single: true,
		filter: false,
		onClick: function(view) {
			// show form
			if (view.value === 'sizeForm1'){
				$('#searchbysizeModal').modal('show')
			} else {
				(document.querySelectorAll('.searchForm.open').length == 1) ? document.querySelector('.searchForm.open').classList.remove('open') : ''; 
				document.querySelector('#' + view.value).classList.add('open');
			}
		}
	});

	$("#typesearch_select2").multipleSelect({
		single: true,
		filter: false,
		onClick: function(view) {
			// show form
			(document.querySelectorAll('.modal .smartsearchForm.open').length == 1) ? document.querySelector('.modal .smartsearchForm.open').classList.remove('open') : ''; 
			document.querySelector('#' + view.value).classList.add('open')
		}
	})


	$("#typesearch_select3").multipleSelect({
		single: true,
		filter: false,
		onClick: function(view) {
			// show form
			(document.querySelectorAll('aside .smartsearchForm.open').length == 1) ? document.querySelector('aside .smartsearchForm.open').classList.remove('open') : ''; 
			document.querySelector('#' + view.value).classList.add('open')
		}
	})

	$('.countmodule').ForceNumericOnly();

	$('.countmodule .plus').on('click', function(e){
		e.preventDefault();
		let $this = $(this),
			countEl = $this.closest('.countmodule').find('.count-control'),
			cnt = parseInt(countEl.val()) + 1;
		countEl.val(cnt);
	});

	$('.countmodule .minus').on('click', function(e){
		e.preventDefault();
		let $this = $(this),
			countEl = $this.closest('.countmodule').find('.count-control'),
			cnt = parseInt(countEl.val()) - 1;

		countEl.val((cnt <= 1) ? cnt = 1 : cnt) ;
	});



	$('.countmodule .count-control').on('keyup', function(e){
		e.preventDefault();
		let $this = $(this),
			cnt = parseInt($this.val());
		(cnt <= 1) ? $this.val(1) : '';
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



	// filter box (catalog)
	// init scrollbar of countries
	if (document.querySelectorAll('.filter-brand .scroll').length >= 1) {
		filterbrandlist = new PerfectScrollbar('.filter-brand .scroll', {
			wheelPropagation: true,
			minScrollbarLength: 35,
			maxScrollbarLength: 65,
		});
		filterbrandlist.update();
	};


	if (document.querySelectorAll('.filter-type .scroll').length >= 1) {
		filtertypelist = new PerfectScrollbar('.filter-type .scroll', {
			wheelPropagation: true,
			minScrollbarLength: 35,
			maxScrollbarLength: 65,
		});
		filtertypelist.update();
	};



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
		speed: 1000,
		responsive: [
			{
				breakpoint: 721,
				settings: {
					arrows : false,
					dots: true
				}
			}
		]
	});	


	$('#homeslider').slickAnimation();


	if (document.body.clientWidth > 991){
		$('#catalog-carousel').slick({
			prevArrow:'<button class="slick-arrow slick-prev icon icon-slider-arrow" aria-label="Previous" type="button"></button>',
			nextArrow:'<button class="slick-arrow slick-next icon icon-slider-arrow" aria-label="Next" type="button"></button>',
			dots: false,
			slidesToShow: 8,
			slidesToScroll: 1,
			autoplay: false,
			autoplaySpeed: 5000,
			arrows : true,
			infinite: false,
			responsive: [
				{
					breakpoint: 992,
					settings: {
						arrows : false,
						slidesToShow: 8
					}
				}
			]
		});	

	}

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
					slidesToShow: 4,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 960,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 560,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 450,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					centerMode: true,
					centerPadding: '80px'
				}
			},
			{
				breakpoint: 400,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					centerMode: true,
					centerPadding: '50px'
				}
			},
			{
				breakpoint: 350,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					centerMode: true,
					centerPadding: '35px'
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
					slidesToShow: 4,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				}
			}
		]
	});

	$('#brands-carousel2').slick({
		dots: false,
		slidesToShow: 6,
		slidesToScroll: 1,
		autoplay: false,
		autoplaySpeed: 5000,
		arrows : false,
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
					slidesToShow: 4,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				}
			}
		]
	});

	$('#fitinpart-carousel').slick({
		prevArrow:'<button class="slick-arrow slick-arrow-round-blue slick-prev" aria-label="Previous" type="button"><i class=" icon icon-slider-arrow-blue"></i></button>',
		nextArrow:'<button class="slick-arrow slick-arrow-round-blue slick-next" aria-label="Next" type="button"><i class=" icon icon-slider-arrow-blue"></i></button>',
		dots: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: false,
		autoplaySpeed: 5000,
		arrows : true,
		centerMode: true,
		lazyLoad: 'ondemand',
		appendArrows : $('.fitinpart-manage .arrows'),
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});

	$('#fitinpart-carousel').on('afterChange', function(event, slick, currentSlide, nextSlide){
		$('#current').text(parseInt(currentSlide + 1));
	});




	$('#comparison-carousel').slick({
		prevArrow:'<button class="slick-arrow slick-arrow-round-blue slick-prev" aria-label="Previous" type="button"><i class=" icon icon-slider-arrow-blue"></i></button>',
		nextArrow:'<button class="slick-arrow slick-arrow-round-blue slick-next" aria-label="Next" type="button"><i class=" icon icon-slider-arrow-blue"></i></button>',
		dots: false,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: false,
		autoplaySpeed: 5000,
		arrows : true,
		appendArrows : $('.comparison-arrow'),
		infinite: false, 
		responsive: [
			{
				breakpoint: 1700,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 1400,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					centerMode: true
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				}
			}
		]
	});

	$('#loginModal').on('show.bs.modal', function (e) {
		fadeoutWishlistInfo();
	});


	$('#registerModal').on('show.bs.modal', function (e) {
		$('#loginModal').modal('hide');
		fadeoutWishlistInfo();
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


	// collapse filter box in catalog page
	$('.filter__box .to-collapse').click(function(e){
		let $this = $(this);
		e.preventDefault();
		$this.toggleClass('down');
		$this.prev('.filter__body').slideToggle();
	});


	$('.slider_controls .param_control').ForceNumericOnly();


	$('.orders__list .view, .orders__list .tracknum').click(function(e){
		e.preventDefault();
		$(this).closest('.tr-item').toggleClass('showfull')
	});
});



// MODAL MENU
// GENERAL EVENT - ONKEYDOWN
document.onkeydown = function(evt) {
	evt = evt || window.event;
	var isEscape = false;
	if ("key" in evt) {
		isEscape = (evt.key == "Escape" || evt.key == "Esc");
	} else {
		isEscape = (evt.keyCode == 27);
	}
	if (isEscape && document.querySelector('.genmodal.open')) {
		document.querySelector('.genmodal.open').setAttribute('aria-hidden', 'true');
		document.querySelector('.genmodal.open').classList.remove('open');
	}
};


function fadeoutWishlistInfo(){
	$('.wishlist-info').fadeOut('normal',function(){
		this.remove();
	});	
}

// close wishlist
$(document).on('click','.wishlist-info .close', function(e){
	e.preventDefault();
	fadeoutWishlistInfo();
});

// to wishlist
$(document).on('click','.to-fav', function(e){
	e.preventDefault();
	var $this = $(this);
	msg = `
		<div class="wishlist-info wishlist-info-success modal show">
			<div class="modal-content modal-content-rbg">
				<p class="modal-title">Success</p>
				<p>You have added <strong class="upcase"> ${$this.data('title')} </strong> to your <a href="#"><strong>wish list!</strong></a></p>
				<button type="button" class="close a-rotate90" aria-label="Close">
					<svg width="22" height="22">
						<line x1="0" y1="0" x2="22" y2="22"/>
						<line x1="22" y1="0" x2="0" y2="22"/>
					</svg>
				</button>
			</div>
		</div>
	`;
	$('body').append(msg);
	$this.removeClass('to-fav').addClass('btn-fav-in');
	$this.find('.icon').removeClass('icon-tofav').addClass('icon-infav');

	$this.find('span').text(function(i, text){
		return text === "Add to wish list" ? "In wish list" : "Add to wish list";
	});

	var timerfav = window.setInterval(function(){
		fadeoutWishlistInfo();
		window.clearInterval(timerfav);
	},4000);
});


$(document).on('click','.to-fav-noauth', function(e){
	e.preventDefault();
	var $this = $(this);
	msg = `
		<div class="wishlist-info wishlist-info-wrong modal show">
			<div class="modal-content modal-content-rbg">
				<p class="modal-title">Wrong</p>
				<p>You must <a href="#" title="" data-toggle="modal" data-target="#loginModal"><strong>login</strong></a> or <a href="#" title="" data-toggle="modal" data-target="#registerModal"><strong>create an account</strong></a> to save <strong class="upcase">${$this.data('title')}</strong> to your <strong>wish list</strong>!</p>

				<button type="button" class="close a-rotate90" aria-label="Close">
					<svg width="22" height="22">
						<line x1="0" y1="0" x2="22" y2="22"/>
						<line x1="22" y1="0" x2="0" y2="22"/>
					</svg>
				</button>
			</div>
		</div>
	`;
	$('body').append(msg);

	var timerfav = window.setInterval(function(){
		fadeoutWishlistInfo();
		window.clearInterval(timerfav);
	},4000);
});

// from wishlist
$(document).on('click','.btn-fav-in', function(e){
	e.preventDefault();
	var $this = $(this);
	$this.removeClass('btn-fav-in').addClass('to-fav');
	$this.find('.icon').removeClass('icon-infav').addClass('icon-tofav');

	$this.find('span').text(function(i, text){
		return text === "Add to wish list" ? "In wish list" : "Add to wish list";
	});
});


[].forEach.call(document.querySelectorAll('.genmodal .close'), function(el,i){
	el.addEventListener('click', function(e){
		document.querySelector('.genmodal.open').setAttribute('aria-hidden', 'true');
		document.querySelector('.genmodal.open').classList.remove('open');
	})
});
 
 
[].forEach.call(document.querySelectorAll('[data-popup="modal"]'),function(el,i){
	el.addEventListener('click', function(e){
		let modal = this.dataset.target;
		document.querySelector(modal).classList.add('open');
		document.querySelector(modal).setAttribute('aria-hidden', 'false');
	})
});



// user menu
$(document).on('click','.btn-accountmenu', function(e){
	$(this).toggleClass('open').next().slideToggle()
});



[].forEach.call(document.querySelectorAll('.item-products .btn-cart'), function(el,i){
	el.addEventListener('click', function(e){
		this.classList.add('incart')
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
let modalitsmycar = new InfoPopup('.modal-itsmycar');


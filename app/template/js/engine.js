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


	// SEARCH
	// https://www.fitinpart.sg/catalog/view/javascript/function.js
	$("#brand_select").multipleSelect({
		single: true,
		filter: true,
		placeholder : 'Maker',
		// noMatchesFound:$('#chk_app_search_sg_only').is(':checked')?'No matches found<br>To show all brands Turn <strong>OFF</strong> Common SG Veh':'No matches found',
		onFilter: function(){
			brandlist.update();
		},
		onOpen: function() {
			brandlist.update();
		},

		onClick: function(view) {
		//Unset the all selection values
		   // $("#class_select, #model_select, "
		   //       + "#year_select,#body_select, #engine_select, #engineno_select").multipleSelect("uncheckAll");

		   // SwitchEnabledAppsearchFields();
		   //Get class and model
		   // getClass(0, 0, 0);
		   // getModel(0, 0, 0, 0);
		}
	});

	$("#class_select").multipleSelect({
		filter: true,
		single: true,
		placeholder : 'Class',
		// noMatchesFound:$('#chk_app_search_sg_only').is(':checked')?'No matches found<br>To show all classes Turn <strong>OFF</strong> Common SG Veh':'No matches found',
		onFilter: function(){
			classlist.update();
		},
		onOpen: function() {
			classlist.update();
		},
		onClick: function(view) {
			$(" #model_select, #year_select, #body_select, #engine_select, #engineno_select").multipleSelect("uncheckAll");
			// SwitchEnabledAppsearchFields();
			// getModel(0,0,0,0);
		}
	});


	$("#model_select").multipleSelect({
		filter: true,//($( window ).width()>800),
		multiple: true,
		multipleWidth: 228,
		selectAll:false,
		maxHeight:($( window ).width()<800)?100:250,
		// noMatchesFound:$('#chk_app_search_sg_only').is(':checked')?'No matches found<br>To show all models Turn <strong>OFF</strong> Common SG Veh':'No matches found',
		placeholder : 'Model',
		textTemplate: function ($el) {
			var txt=$el.html();
			var opt=txt.replace(/\[/,'<i class="ms_aliases">[').replace(/\]/,']</i>');
			return opt;
		},
		onFilter: function(){
			modellist.update();
		},
		onOpen: function() {
			modellist.update();
		},
		onClick: function() {
			$("#year_select, #body_select, #engine_select, #engineno_select").multipleSelect("uncheckAll");

		// SwitchEnabledAppsearchFields();
		// getYears(false);
		}
	});


	$("#year_select").multipleSelect({
		filter: true,
		single: true,
		placeholder : 'Year',
		noMatchesFound:$('#chk_app_search_sg_only').is(':checked')?'No matches found<br>To show all years Turn <strong>OFF</strong> Common SG Veh':'No matches found',
		onFilter: function(){
			yearlist.update();
		},
		onOpen: function() {
			yearlist.update();
		},
		onClick: function(view) {
			// if(view.value!=AppSearchCurrentParams.years) {
			// 	getBody(false);
			// }
		}
	});


   $("#body_select").multipleSelect({
		filter: true,
		single: true,
		placeholder : '-Select Body-',
		noMatchesFound:$('#chk_app_search_sg_only').is(':checked')?'No matches found<br>To show all bodies Turn <strong>OFF</strong> Common SG Veh':'No matches found',
		onFilter: function(){
			bodylist.update();
		},
		onOpen: function() {
			bodylist.update();
		},
		onClick: function(view) {
		   // if(view.value!=AppSearchCurrentParams.body) {
			  //  getEngine(false);
		   // }
	  }
   });


	$("#engine_select").multipleSelect({
		filter: true,
		single: true,
		placeholder : '-Select Engine-',
		noMatchesFound:$('#chk_app_search_sg_only').is(':checked')?'No matches found<br>To show all engines Turn <strong>OFF</strong> Common SG Veh':'No matches found',
		onFilter: function(){
			enginelist.update();
		},
		onOpen: function() {
			enginelist.update();
		},
		onClick: function(view) {
		// 	if(view.value!=AppSearchCurrentParams.engine) {
		// 	   getEngineNo(false);
		// 	}
		}
	});
	//*Code for the onChange changes
	$("#engineno_select").multipleSelect({
		filter: true,
		single: true,
		placeholder : '-Select EngineNo-',
		noMatchesFound:$('#chk_app_search_sg_only').is(':checked')?'No matches found<br>To show all numbers Turn <strong>OFF</strong> Common SG Veh':'No matches found',
		onFilter: function(){
			enginenolist.update();
		},
		onOpen: function() {
			enginenolist.update();
		},
		onClick: function(view) {
			// if(view.value!=AppSearchCurrentParams.engineno) {
			// }
		}
	});

	var brandlist = new PerfectScrollbar('.searchbox .brand .listwrapper', {
		wheelPropagation: true,
		minScrollbarLength: 100,
		maxScrollbarLength: 100,
	});
	var classlist = new PerfectScrollbar('.searchbox .class .listwrapper', {
		wheelPropagation: true,
		minScrollbarLength: 100,
		maxScrollbarLength: 100,
	});
	var modellist = new PerfectScrollbar('.searchbox .model .listwrapper', {
		wheelPropagation: true,
		minScrollbarLength: 100,
		maxScrollbarLength: 100,
	});
	var yearlist = new PerfectScrollbar('.searchbox .year .listwrapper', {
		wheelPropagation: true,
		minScrollbarLength: 100,
		maxScrollbarLength: 100,
	});
	var bodylist = new PerfectScrollbar('.searchbox .body .listwrapper', {
		wheelPropagation: true,
		minScrollbarLength: 100,
		maxScrollbarLength: 100,
	});
	var enginelist = new PerfectScrollbar('.searchbox .engine .listwrapper', {
		wheelPropagation: true,
		minScrollbarLength: 100,
		maxScrollbarLength: 100,
	});
	var enginenolist = new PerfectScrollbar('.searchbox .engineno .listwrapper', {
		wheelPropagation: true,
		minScrollbarLength: 100,
		maxScrollbarLength: 100,
	});

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
		arrows : false
	});


	$('#brands-carousel').slick({
		prevArrow:'<button class="slick-arrow slick-arrow-round-gray slick-prev" aria-label="Previous" type="button"><i class=" icon icon-slider-arrow-gray"></i></button>',
		nextArrow:'<button class="slick-arrow slick-arrow-round-gray slick-next" aria-label="Next" type="button"><i class=" icon icon-slider-arrow-gray"></i></button>',
		dots: false,
		slidesToShow: 6,
		slidesToScroll: 1,
		autoplay: false,
		autoplaySpeed: 5000,
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

$(document).ready(function(){
	$('.slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.slider-nav'
	});
	$('.slider-nav').slick({
		prevArrow:'<button class="slick-arrow slick-prev" aria-label="Previous" type="button"></button>',
		nextArrow:'<button class="slick-arrow slick-next" aria-label="Next" type="button"></button>',
		slidesToShow: 4,
		slidesToScroll: 1,
		asNavFor: '.slider-for',
		arrows: true,
		dots: false,
		vertical: true,
		focusOnSelect: true
	});



	// CAR
	$("#change_brand_select").multipleSelect({
		single: true,
		filter: true,
		placeholder : 'Maker',
		noMatchesFound:$('#chk_app_search_sg_only').is(':checked')?'No matches found<br>To show all brands Turn <strong>OFF</strong> Common SG Veh':'No matches found',
		onFilter: function(){
			change_brandlist.update();
		},
		onOpen: function() {
			console.log("open brand select");
			change_brandlist.update();
		},

		onClick: function(view) {
		//Unset the all selection values
		   $("#change_class_select, #change_model_select, "
				 + "#change_year_select,#change_body_select, #change_engine_select, #change_engineno_select").multipleSelect("uncheckAll");

		   ChangeSwitchEnabledAppsearchFields();
		   //Get class and model
		   // getClass(0, 0, 0);
		   // getModel(0, 0, 0, 0);
		}
	});

	$("#change_class_select").multipleSelect({
		filter: true,
		single: true,
		placeholder : 'Class',
		// noMatchesFound:$('#chk_app_search_sg_only').is(':checked')?'No matches found<br>To show all classes Turn <strong>OFF</strong> Common SG Veh':'No matches found',
		onFilter: function(){
			change_classlist.update();
		},
		onOpen: function() {
			change_classlist.update();
		},
		onClick: function(view) {
			$(" #change_model_select, #change_year_select, #change_body_select, #change_engine_select, #change_engineno_select").multipleSelect("uncheckAll");
			ChangeSwitchEnabledAppsearchFields();
			// getModel(0,0,0,0);
		}
	});

	$("#change_model_select").multipleSelect({
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
			change_modellist.update();
		},
		onOpen: function() {
			change_modellist.update();
		},
		onClick: function() {
			$("#change_year_select, #change_body_select, #change_engine_select, #change_engineno_select").multipleSelect("uncheckAll");

		ChangeSwitchEnabledAppsearchFields();
		// getYears(false);
		}
	});

	$("#change_year_select").multipleSelect({
		filter: true,
		single: true,
		placeholder : 'Year',
		noMatchesFound:$('#chk_app_search_sg_only').is(':checked')?'No matches found<br>To show all years Turn <strong>OFF</strong> Common SG Veh':'No matches found',
		onFilter: function(){
			change_yearlist.update();
		},
		onOpen: function() {
			change_yearlist.update();
		},
		onClick: function(view) {
			// if(view.value!=AppSearchCurrentParams.years) {
			// 	getBody(false);
			// }
		}
	});

	$("#change_body_select").multipleSelect({
		filter: true,
		single: true,
		placeholder : 'Body',
		noMatchesFound:$('#chk_app_search_sg_only').is(':checked')?'No matches found<br>To show all bodies Turn <strong>OFF</strong> Common SG Veh':'No matches found',
		onFilter: function(){
			change_bodylist.update();
		},
		onOpen: function() {
			change_bodylist.update();
		},
		onClick: function(view) {
			// if(view.value!=AppSearchCurrentParams.body) {
				//  getEngine(false);
			// }
		}
	});

	$("#change_engine_select").multipleSelect({
		filter: true,
		single: true,
		placeholder : 'Engine',
		noMatchesFound:$('#chk_app_search_sg_only').is(':checked')?'No matches found<br>To show all engines Turn <strong>OFF</strong> Common SG Veh':'No matches found',
		onFilter: function(){
			change_enginelist.update();
		},
		onOpen: function() {
			change_enginelist.update();
		},
		onClick: function(view) {
		// 	if(view.value!=AppSearchCurrentParams.engine) {
		// 	   getEngineNo(false);
		// 	}
		}
	});

	$("#change_engineno_select").multipleSelect({
		filter: true,
		single: true,
		placeholder : 'EngineNo',
		noMatchesFound:$('#chk_app_search_sg_only').is(':checked')?'No matches found<br>To show all numbers Turn <strong>OFF</strong> Common SG Veh':'No matches found',
		onFilter: function(){
			change_enginenolist.update();
		},
		onOpen: function() {
			change_enginenolist.update();
		},
		onClick: function(view) {
			// if(view.value!=AppSearchCurrentParams.engineno) {
			// }
		}
	});



	var change_brandlist = new PerfectScrollbar('#change_car .brand .listwrapper', {
		wheelPropagation: true,
		minScrollbarLength: 100,
		maxScrollbarLength: 100,
	});
	var change_classlist = new PerfectScrollbar('#change_car .class .listwrapper', {
		wheelPropagation: true,
		minScrollbarLength: 100,
		maxScrollbarLength: 100,
	});
	var change_modellist = new PerfectScrollbar('#change_car .model .listwrapper', {
		wheelPropagation: true,
		minScrollbarLength: 100,
		maxScrollbarLength: 100,
	});
	var change_yearlist = new PerfectScrollbar('#change_car .year .listwrapper', {
		wheelPropagation: true,
		minScrollbarLength: 100,
		maxScrollbarLength: 100,
	});
	var change_bodylist = new PerfectScrollbar('#change_car .body .listwrapper', {
		wheelPropagation: true,
		minScrollbarLength: 100,
		maxScrollbarLength: 100,
	});
	var change_enginelist = new PerfectScrollbar('#change_car .engine .listwrapper', {
		wheelPropagation: true,
		minScrollbarLength: 100,
		maxScrollbarLength: 100,
	});
	var change_enginenolist = new PerfectScrollbar('#change_car .engineno .listwrapper', {
		wheelPropagation: true,
		minScrollbarLength: 100,
		maxScrollbarLength: 100,
	});
	// #CAR



	// MOTO
	$("#change_brand_select2").multipleSelect({
		single: true,
		filter: true,
		placeholder : 'Maker',
		noMatchesFound:$('#chk_app_search_sg_only').is(':checked')?'No matches found<br>To show all brands Turn <strong>OFF</strong> Common SG Veh':'No matches found',
		onFilter: function(){
			change_brandlist2.update();
		},
		onOpen: function() {
			console.log("open brand select");
			change_brandlist2.update();
		},

		onClick: function(view) {
		//Unset the all selection values
		   $("#change_class_select2, #change_model_select2, "
				 + "#change_year_select2,#change_body_select2, #change_engine_select2, #change_engineno_select2").multipleSelect("uncheckAll");

		   ChangeSwitchEnabledAppsearchFields2();
		   //Get class and model
		   // getClass(0, 0, 0);
		   // getModel(0, 0, 0, 0);
		}
	});

	$("#change_class_select2").multipleSelect({
		filter: true,
		single: true,
		placeholder : 'Class',
		// noMatchesFound:$('#chk_app_search_sg_only').is(':checked')?'No matches found<br>To show all classes Turn <strong>OFF</strong> Common SG Veh':'No matches found',
		onFilter: function(){
			change_classlist2.update();
		},
		onOpen: function() {
			change_classlist2.update();
		},
		onClick: function(view) {
			$(" #change_model_select2, #change_year_select2, #change_body_select2, #change_engine_select2, #change_engineno_select2").multipleSelect("uncheckAll");
			ChangeSwitchEnabledAppsearchFields2();
			// getModel(0,0,0,0);
		}
	});

	$("#change_model_select2").multipleSelect({
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
			change_modellist2.update();
		},
		onOpen: function() {
			change_modellist2.update();
		},
		onClick: function() {
			$("#change_year_select2, #change_body_select2, #change_engine_select2, #change_engineno_select2").multipleSelect("uncheckAll");

		ChangeSwitchEnabledAppsearchFields2();
		// getYears(false);
		}
	});

	$("#change_year_select2").multipleSelect({
		filter: true,
		single: true,
		placeholder : 'Year',
		noMatchesFound:$('#chk_app_search_sg_only').is(':checked')?'No matches found<br>To show all years Turn <strong>OFF</strong> Common SG Veh':'No matches found',
		onFilter: function(){
			change_yearlist2.update();
		},
		onOpen: function() {
			change_yearlist2.update();
		},
		onClick: function(view) {
			// if(view.value!=AppSearchCurrentParams.years) {
			// 	getBody(false);
			// }
		}
	});

	$("#change_body_select2").multipleSelect({
		filter: true,
		single: true,
		placeholder : 'Body',
		noMatchesFound:$('#chk_app_search_sg_only').is(':checked')?'No matches found<br>To show all bodies Turn <strong>OFF</strong> Common SG Veh':'No matches found',
		onFilter: function(){
			change_bodylist2.update();
		},
		onOpen: function() {
			change_bodylist2.update();
		},
		onClick: function(view) {
			// if(view.value!=AppSearchCurrentParams.body) {
				//  getEngine(false);
			// }
		}
	});

	$("#change_engine_select2").multipleSelect({
		filter: true,
		single: true,
		placeholder : 'Engine',
		noMatchesFound:$('#chk_app_search_sg_only').is(':checked')?'No matches found<br>To show all engines Turn <strong>OFF</strong> Common SG Veh':'No matches found',
		onFilter: function(){
			change_enginelist2.update();
		},
		onOpen: function() {
			change_enginelist2.update();
		},
		onClick: function(view) {
		// 	if(view.value!=AppSearchCurrentParams.engine) {
		// 	   getEngineNo(false);
		// 	}
		}
	});

	$("#change_engineno_select2").multipleSelect({
		filter: true,
		single: true,
		placeholder : 'EngineNo',
		noMatchesFound:$('#chk_app_search_sg_only').is(':checked')?'No matches found<br>To show all numbers Turn <strong>OFF</strong> Common SG Veh':'No matches found',
		onFilter: function(){
			change_enginenolist2.update();
		},
		onOpen: function() {
			change_enginenolist2.update();
		},
		onClick: function(view) {
			// if(view.value!=AppSearchCurrentParams.engineno) {
			// }
		}
	});

	var change_brandlist2 = new PerfectScrollbar('#change_moto .brand .listwrapper', {
		wheelPropagation: true,
		minScrollbarLength: 100,
		maxScrollbarLength: 100,
	});
	var change_classlist2 = new PerfectScrollbar('#change_moto .class .listwrapper', {
		wheelPropagation: true,
		minScrollbarLength: 100,
		maxScrollbarLength: 100,
	});
	var change_modellist2 = new PerfectScrollbar('#change_moto .model .listwrapper', {
		wheelPropagation: true,
		minScrollbarLength: 100,
		maxScrollbarLength: 100,
	});
	var change_yearlist2 = new PerfectScrollbar('#change_moto .year .listwrapper', {
		wheelPropagation: true,
		minScrollbarLength: 100,
		maxScrollbarLength: 100,
	});
	var change_bodylist2 = new PerfectScrollbar('#change_moto .body .listwrapper', {
		wheelPropagation: true,
		minScrollbarLength: 100,
		maxScrollbarLength: 100,
	});
	var change_enginelist2 = new PerfectScrollbar('#change_moto .engine .listwrapper', {
		wheelPropagation: true,
		minScrollbarLength: 100,
		maxScrollbarLength: 100,
	});
	var change_enginenolist2 = new PerfectScrollbar('#change_moto .engineno .listwrapper', {
		wheelPropagation: true,
		minScrollbarLength: 100,
		maxScrollbarLength: 100,
	});
	// #MOTO

});

// COMPARE SCRIPT
function fadeoutCompareInfo(){
	$('.compare-info').fadeOut('normal',function(){
		this.remove();
	});	
}

document.querySelector('.card-page .compare .btn').addEventListener('click',function(e){
	e.preventDefault();
	(this.classList.contains('to-compare')) ? this.textContent = 'Delete from compare' :  this.textContent = 'Compare this Product';
});

// close wishlist
$(document).on('click','.compare-info .close', function(e){
	e.preventDefault();
	fadeoutCompareInfo();
});

// to compare
$(document).on('click','.to-compare', function(e){
	e.preventDefault();
	var $this = $(this);
	msg = `
		<div class="compare-info compare-info-success modal show">
			<div class="modal-content modal-content-rbg">
				<p class="modal-title">Success</p>
				<p>You have added <strong class="upcase"> ${$this.data('title')} </strong> to your <a href="#"><strong>comparsion list!</strong></a></p>
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
	$this.removeClass('to-compare').addClass('btn-compare-in');

	var timercompare = window.setInterval(function(){
		fadeoutCompareInfo();
		window.clearInterval(timercompare);
	},3000);
});

// from compare list
$(document).on('click','.btn-compare-in', function(e){
	e.preventDefault();
	var $this = $(this);
	$this.removeClass('btn-compare-in').addClass('to-compare');
});
// #COMPARE SCRIPT

$(document).on('click','.jump-vehicles', function(e){
	elementClick = $(this).data('target');
	destination = $(elementClick).offset().top;
	$("body,html").animate({scrollTop: destination }, 800);	
});


function ChangeSwitchEnabledAppsearchFields(){
	$("#change_model_select, #change_year_select, #change_body_select, #change_engine_select, #change_engineno_select").not(':focus').multipleSelect("disable");
	if($('select#change_brand_select :selected').val()>0) {
		$("#change_model_select").not(':focus').multipleSelect("enable");
		$("#change_class_select").not(':focus').multipleSelect("enable");
	}
	if($('select#change_model_select :selected').val()>0) {
		$("#change_year_select,#change_body_select, #change_engine_select, #change_engineno_select").not(':focus').multipleSelect("enable");
	}
}



function ChangeSwitchEnabledAppsearchFields2(){
	$("#change_model_select2, #change_year_select2, #change_body_select2, #change_engine_select2, #change_engineno_select2").not(':focus').multipleSelect("disable");
	if($('select#change_brand_select2 :selected').val()>0) {
		$("#change_model_select2").not(':focus').multipleSelect("enable");
		$("#change_class_select2").not(':focus').multipleSelect("enable");
	}
	if($('select#change_model_select2 :selected').val()>0) {
		$("#change_year_select2,#change_body_select2, #change_engine_select2, #change_engineno_select2").not(':focus').multipleSelect("enable");
	}
}
function setPlaceholder(text){
	document.querySelector('#search').style.display = 'block';
	document.querySelector('.vehicle-layout').style.display = 'none';
	search.setAttribute('placeholder', text);
}

const labels = ['Class', 'Model', 'Year', 'Body', 'Engine', 'EngineNO'];
const 
	  classEl = document.querySelector('button.class'),
	  modelEl = document.querySelector('button.model'),
	  yearEl = document.querySelector('button.year'),
	  bodyEl = document.querySelector('button.body'),
	  engineEl = document.querySelector('button.engine'),
	  enginenoEl = document.querySelector('button.engineno'),
	  classInput = document.querySelector('input[name="class"]'),
	  modelInput = document.querySelector('input[name="model"]'),
	  yearInput = document.querySelector('input[name="year"]'),
	  bodyInput = document.querySelector('input[name="body"]'),
	  engineInput = document.querySelector('input[name="engine"]'),
	  enginenoInput = document.querySelector('input[name="engineno"]');

$(document).ready(function(){
	// https://www.fitinpart.sg/catalog/view/javascript/function.js
	const $v_brand_select = $("#v_brand_select");
	$v_brand_select.multipleSelect({
		single: true,
		filter: true,
		placeholder : 'Maker',
		noMatchesFound:$('#chk_app_search_sg_only').is(':checked')?'No matches found<br>To show all brands Turn <strong>OFF</strong> Common SG Veh':'No matches found',
		onFilter: function(){
			vbrandlist.update();
		},
		onOpen: function() {
			vbrandlist.update();
		},

		onClick: function(view) {
			const $label = view.label,
				$el = document.querySelector('.vehicle-search .maker'),
				$input =  document.querySelector('.vehicle-search input[name="maker"]');
			$el.classList.add('active');
			$el.textContent = $v_brand_select.multipleSelect('getSelects', 'text');
			$input.value = $v_brand_select.multipleSelect('getSelects');

			//Unset the all selection values
			$("#v_class_select, #v_model_select, #v_year_select,#v_body_select, #v_engine_select, #v_engineno_select").multipleSelect("uncheckAll");

			classEl.textContent = labels[0];
			modelEl.textContent = labels[1];

			classEl.classList.remove('active');
			modelEl.classList.remove('active');

			classInput.value = '';
			modelInput.value = '';

			SwitchEnabledAppsearchFieldsVehicle();

			//Get class and model
			// getClass(0, 0, 0);
			// getModel(0, 0, 0, 0);
		}
	});


	const $v_class_select = $("#v_class_select");
	$v_class_select.multipleSelect({
		filter: true,
		single: true,
		placeholder : 'Class',
		// noMatchesFound:$('#chk_app_search_sg_only').is(':checked')?'No matches found<br>To show all classes Turn <strong>OFF</strong> Common SG Veh':'No matches found',
		onFilter: function(){
			vclasslist.update();
		},
		onOpen: function() {
			vclasslist.update();
		},
		onClick: function(view) {
			const $el = document.querySelector('.vehicle-search .class'),
				  $input =  document.querySelector('.vehicle-search input[name="class"]');
			$el.classList.add('active');
			$el.textContent = $v_class_select.multipleSelect('getSelects', 'text');
			$input.value = $v_class_select.multipleSelect('getSelects');

			$("#v_model_select, #v_year_select, #v_body_select, #v_engine_select, #v_engineno_select").multipleSelect("uncheckAll");

			modelEl.textContent = labels[1];
			modelEl.classList.remove('active');
			modelInput.value = '';

			SwitchEnabledAppsearchFieldsVehicle();
			// getModel(0,0,0,0);
		}
	});


	const $v_model_select = $("#v_model_select");
	$v_model_select.multipleSelect({
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
			vmodellist.update();
		},
		onOpen: function() {
			vmodellist.update();
		},
		onClick: function(view) {
			const $el = document.querySelector('.vehicle-search .model'),
				  $input =  document.querySelector('.vehicle-search input[name="model"]');
			$el.classList.add('active');
			$el.textContent = $v_model_select.multipleSelect('getSelects', 'text');
			$input.value = $v_model_select.multipleSelect('getSelects');

			$("#v_year_select, #v_body_select, #v_engine_select, #v_engineno_select").multipleSelect("uncheckAll");

		SwitchEnabledAppsearchFieldsVehicle();
		// getYears(false);
		}
	});

	const $v_year_select = $("#v_year_select");
	$v_year_select.multipleSelect({
		filter: true,
		single: true,
		placeholder : 'Year',
		noMatchesFound:$('#chk_app_search_sg_only').is(':checked')?'No matches found<br>To show all years Turn <strong>OFF</strong> Common SG Veh':'No matches found',
		onFilter: function(){
			vyearlist.update();
		},
		onOpen: function() {
			vyearlist.update();
		},
		onClick: function(view) {
			const $el = document.querySelector('.vehicle-search .year'),
				  $input =  document.querySelector('.vehicle-search input[name="year"]');
			$el.classList.add('active');
			$el.textContent = $v_year_select.multipleSelect('getSelects', 'text');
			$input.value = $v_year_select.multipleSelect('getSelects');
			// if(view.value!=AppSearchCurrentParams.years) {
			// 	getBody(false);
			// }
		}
	});


	const $v_body_select = $("#v_body_select");
	$v_body_select.multipleSelect({
		filter: true,
		single: true,
		placeholder : 'Body',
		noMatchesFound:$('#chk_app_search_sg_only').is(':checked')?'No matches found<br>To show all bodies Turn <strong>OFF</strong> Common SG Veh':'No matches found',
		onFilter: function(){
			vbodylist.update();
		},
		onOpen: function() {
			vbodylist.update();
		},
		onClick: function(view) {
			const $el = document.querySelector('.vehicle-search .body'),
				  $input =  document.querySelector('.vehicle-search input[name="body"]');
			$el.classList.add('active');
			$el.textContent = $v_body_select.multipleSelect('getSelects', 'text');
			$input.value = $v_body_select.multipleSelect('getSelects');
			// if(view.value!=AppSearchCurrentParams.body) {
				//  getEngine(false);
			// }
		}
	});


	const $v_engine_select = $("#v_engine_select");
	$v_engine_select.multipleSelect({
		filter: true,
		single: true,
		placeholder : 'Engine',
		noMatchesFound:$('#chk_app_search_sg_only').is(':checked')?'No matches found<br>To show all engines Turn <strong>OFF</strong> Common SG Veh':'No matches found',
		onFilter: function(){
			venginelist.update();
		},
		onOpen: function() {
			venginelist.update();
		},
		onClick: function(view) {
			const $el = document.querySelector('.vehicle-search .engine'),
				  $input =  document.querySelector('.vehicle-search input[name="engine"]');
			$el.classList.add('active');
			$el.textContent = $v_engine_select.multipleSelect('getSelects', 'text');
			$input.value = $v_engine_select.multipleSelect('getSelects');
		// 	if(view.value!=AppSearchCurrentParams.engine) {
		// 	   getEngineNo(false);
		// 	}
		}
	});

	// //*Code for the onChange changes
	const $v_engineno_select = $("#v_engineno_select");
	$v_engineno_select.multipleSelect({
		filter: true,
		single: true,
		placeholder : 'EngineNo',
		noMatchesFound:$('#chk_app_search_sg_only').is(':checked')?'No matches found<br>To show all numbers Turn <strong>OFF</strong> Common SG Veh':'No matches found',
		onFilter: function(){
			venginenolist.update();
		},
		onOpen: function() {
			venginenolist.update();
		},
		onClick: function(view) {
			const $el = document.querySelector('.vehicle-search .engineno'),
				  $input =  document.querySelector('.vehicle-search input[name="engineno"]');
			$el.classList.add('active');
			$el.textContent = $v_engineno_select.multipleSelect('getSelects', 'text');
			$input.value = $v_engineno_select.multipleSelect('getSelects');
			// if(view.value!=AppSearchCurrentParams.engineno) {
			// }
		}
	});


	function SwitchEnabledAppsearchFieldsVehicle(){
		$("#v_model_select, #v_year_select, #v_body_select, #v_engine_select, #v_engineno_select").not(':focus').multipleSelect("disable");

		yearEl.setAttribute('disabled', true);
		bodyEl.setAttribute('disabled', true);
		engineEl.setAttribute('disabled', true);
		enginenoEl.setAttribute('disabled', true);

		yearEl.textContent = labels[2];
		bodyEl.textContent = labels[3];
		engineEl.textContent = labels[4];
		enginenoEl.textContent = labels[5];

		yearEl.classList.remove('active');
		bodyEl.classList.remove('active');
		engineEl.classList.remove('active');
		enginenoEl.classList.remove('active');

		yearInput.value = '';
		bodyInput.value = '';
		engineInput.value = '';
		enginenoInput.value = '';

		if($('select#v_brand_select :selected').val()>0) {
			$("#v_model_select").not(':focus').multipleSelect("enable");
			$("#v_class_select").not(':focus').multipleSelect("enable");
			$('button.class, button.model').removeAttr('disabled');
		}
		if($('select#v_model_select :selected').val()>0) {
			$("#v_year_select,#v_body_select, #v_engine_select, #v_engineno_select").not(':focus').multipleSelect("enable");
			$('button.year, button.body, button.engine, button.engineno').removeAttr('disabled');
			console.log("!!")
		}
	}


	var vbrandlist = new PerfectScrollbar('.vehicle-search .v_brand .listwrapper', {
		wheelPropagation: true,
		minScrollbarLength: 100,
		maxScrollbarLength: 100,
	});

	var vclasslist = new PerfectScrollbar('.vehicle-search .v_class .listwrapper', {
		wheelPropagation: true,
		minScrollbarLength: 100,
		maxScrollbarLength: 100,
	});
	var vmodellist = new PerfectScrollbar('.vehicle-search .v_model .listwrapper', {
		wheelPropagation: true,
		minScrollbarLength: 100,
		maxScrollbarLength: 100,
	});

	var vyearlist = new PerfectScrollbar('.vehicle-search .v_year .listwrapper', {
		wheelPropagation: true,
		minScrollbarLength: 100,
		maxScrollbarLength: 100,
	});

	var vbodylist = new PerfectScrollbar('.vehicle-search .v_body .listwrapper', {
		wheelPropagation: true,
		minScrollbarLength: 100,
		maxScrollbarLength: 100,
	});
	var venginelist = new PerfectScrollbar('.vehicle-search .v_engine .listwrapper', {
		wheelPropagation: true,
		minScrollbarLength: 100,
		maxScrollbarLength: 100,
	});
	var venginenolist = new PerfectScrollbar('.vehicle-search .v_engineno .listwrapper', {
		wheelPropagation: true,
		minScrollbarLength: 100,
		maxScrollbarLength: 100,
	});


	$('.vehicle-search-str .maker').click(function () {
		setTimeout(function () {
			$v_brand_select.multipleSelect('open')
		}, 100)
	})

	$('.vehicle-search-str .class').click(function () {
		setTimeout(function () {
			$v_class_select.multipleSelect('open')
		}, 100)
	})


	$('.vehicle-search-str .model').click(function () {
		setTimeout(function () {
			$v_model_select.multipleSelect('open')
		}, 100)
	})

	$('.vehicle-search-str .year').click(function () {
		setTimeout(function () {
			$v_year_select.multipleSelect('open')
		}, 100)
	});

	$('.vehicle-search-str .body').click(function () {
		setTimeout(function () {
			$v_body_select.multipleSelect('open')
		}, 100)
	});

	$('.vehicle-search-str .engine').click(function () {
		setTimeout(function () {
			$v_engine_select.multipleSelect('open')
		}, 100)
	});

	$('.vehicle-search-str .engineno').click(function () {
		setTimeout(function () {
			$v_engineno_select.multipleSelect('open')
		}, 100)
	});
})
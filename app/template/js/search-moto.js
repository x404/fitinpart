$(document).ready(function(){
	// https://www.fitinpart.sg/catalog/view/javascript/function.js
	$("#brand_select2").multipleSelect({
		single: true,
		filter: true,
		placeholder : 'Maker',
		noMatchesFound:$('#chk_app_search_sg_only').is(':checked')?'No matches found<br>To show all brands Turn <strong>OFF</strong> Common SG Veh':'No matches found',
		onFilter: function(){
			brandlist2.update();
		},
		onOpen: function() {
			brandlist2.update();
		},

		onClick: function(view) {
		//Unset the all selection values
		   $("#class_select2, #model_select2, "
				 + "#year_select2,#body_select2, #engine_select2, #engineno_select2").multipleSelect("uncheckAll");

		   SwitchEnabledAppsearchFields2();
		   //Get class and model
		   // getClass(0, 0, 0);
		   // getModel(0, 0, 0, 0);
		}
	});

	$("#class_select2").multipleSelect({
		filter: true,
		single: true,
		placeholder : 'Class',
		// noMatchesFound:$('#chk_app_search_sg_only').is(':checked')?'No matches found<br>To show all classes Turn <strong>OFF</strong> Common SG Veh':'No matches found',
		onFilter: function(){
			classlist2.update();
		},
		onOpen: function() {
			classlist2.update();
		},
		onClick: function(view) {
			$(" #model_select2, #year_select2, #body_select2, #engine_select2, #engineno_select2").multipleSelect("uncheckAll");
			SwitchEnabledAppsearchFields2();
			// getModel(0,0,0,0);
		}
	});

	$("#model_select2").multipleSelect({
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
			modellist2.update();
		},
		onOpen: function() {
			modellist2.update();
		},
		onClick: function() {
			$("#year_select2, #body_select2, #engine_select2, #engineno_select2").multipleSelect("uncheckAll");

		SwitchEnabledAppsearchFields2();
		// getYears(false);
		}
	});

	$("#year_select2").multipleSelect({
		filter: true,
		single: true,
		placeholder : 'Year',
		noMatchesFound:$('#chk_app_search_sg_only').is(':checked')?'No matches found<br>To show all years Turn <strong>OFF</strong> Common SG Veh':'No matches found',
		onFilter: function(){
			yearlist2.update();
		},
		onOpen: function() {
			yearlist2.update();
		},
		onClick: function(view) {
			// if(view.value!=AppSearchCurrentParams.years) {
			// 	getBody(false);
			// }
		}
	});

	$("#body_select2").multipleSelect({
		filter: true,
		single: true,
		placeholder : 'Body',
		noMatchesFound:$('#chk_app_search_sg_only').is(':checked')?'No matches found<br>To show all bodies Turn <strong>OFF</strong> Common SG Veh':'No matches found',
		onFilter: function(){
			bodylist2.update();
		},
		onOpen: function() {
			bodylist2.update();
		},
		onClick: function(view) {
			// if(view.value!=AppSearchCurrentParams.body) {
				//  getEngine(false);
			// }
		}
	});

	$("#engine_select2").multipleSelect({
		filter: true,
		single: true,
		placeholder : 'Engine',
		noMatchesFound:$('#chk_app_search_sg_only').is(':checked')?'No matches found<br>To show all engines Turn <strong>OFF</strong> Common SG Veh':'No matches found',
		onFilter: function(){
			enginelist2.update();
		},
		onOpen: function() {
			enginelist2.update();
		},
		onClick: function(view) {
		// 	if(view.value!=AppSearchCurrentParams.engine) {
		// 	   getEngineNo(false);
		// 	}
		}
	});

	$("#engineno_select2").multipleSelect({
		filter: true,
		single: true,
		placeholder : 'EngineNo',
		noMatchesFound:$('#chk_app_search_sg_only').is(':checked')?'No matches found<br>To show all numbers Turn <strong>OFF</strong> Common SG Veh':'No matches found',
		onFilter: function(){
			enginenolist2.update();
		},
		onOpen: function() {
			enginenolist2.update();
		},
		onClick: function(view) {
			// if(view.value!=AppSearchCurrentParams.engineno) {
			// }
		}
	});


// Modal mobile search
	$("#sm_brand_select2").multipleSelect({
		single: true,
		filter: true,
		placeholder : 'Maker',
		noMatchesFound:$('#chk_app_search_sg_only').is(':checked')?'No matches found<br>To show all brands Turn <strong>OFF</strong> Common SG Veh':'No matches found',
		onFilter: function(){
			sm_brandlist2.update();
		},
		onOpen: function() {
			sm_brandlist2.update();
		},

		onClick: function(view) {
		//Unset the all selection values
		   $("#sm_class_select2, #sm_model_select2, "
				 + "#sm_year_select2,#sm_body_select2, #sm_engine_select2, #sm_engineno_select2").multipleSelect("uncheckAll");

		   SmSwitchEnabledAppsearchFields2();
		   //Get class and model
		   // getClass(0, 0, 0);
		   // getModel(0, 0, 0, 0);
		}
	});

	$("#sm_class_select2").multipleSelect({
		filter: true,
		single: true,
		placeholder : 'Class',
		// noMatchesFound:$('#chk_app_search_sg_only').is(':checked')?'No matches found<br>To show all classes Turn <strong>OFF</strong> Common SG Veh':'No matches found',
		onFilter: function(){
			sm_classlist2.update();
		},
		onOpen: function() {
			sm_classlist2.update();
		},
		onClick: function(view) {
			$(" #sm_model_select2, #sm_year_select2, #sm_body_select2, #sm_engine_select2, #sm_engineno_select2").multipleSelect("uncheckAll");
			SmSwitchEnabledAppsearchFields2();
			// getModel(0,0,0,0);
		}
	});

	$("#sm_model_select2").multipleSelect({
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
			sm_modellist2.update();
		},
		onOpen: function() {
			sm_modellist2.update();
		},
		onClick: function() {
			$("#sm_year_select2, #sm_body_select2, #sm_engine_select2, #sm_engineno_select2").multipleSelect("uncheckAll");

		SmSwitchEnabledAppsearchFields2();
		// getYears(false);
		}
	});

	$("#sm_year_select2").multipleSelect({
		filter: true,
		single: true,
		placeholder : 'Year',
		noMatchesFound:$('#chk_app_search_sg_only').is(':checked')?'No matches found<br>To show all years Turn <strong>OFF</strong> Common SG Veh':'No matches found',
		onFilter: function(){
			sm_yearlist2.update();
		},
		onOpen: function() {
			sm_yearlist2.update();
		},
		onClick: function(view) {
			// if(view.value!=AppSearchCurrentParams.years) {
			// 	getBody(false);
			// }
		}
	});

	$("#sm_body_select2").multipleSelect({
		filter: true,
		single: true,
		placeholder : 'Body',
		noMatchesFound:$('#chk_app_search_sg_only').is(':checked')?'No matches found<br>To show all bodies Turn <strong>OFF</strong> Common SG Veh':'No matches found',
		onFilter: function(){
			sm_bodylist2.update();
		},
		onOpen: function() {
			sm_bodylist2.update();
		},
		onClick: function(view) {
			// if(view.value!=AppSearchCurrentParams.body) {
				//  getEngine(false);
			// }
		}
	});

	$("#sm_engine_select2").multipleSelect({
		filter: true,
		single: true,
		placeholder : 'Engine',
		noMatchesFound:$('#chk_app_search_sg_only').is(':checked')?'No matches found<br>To show all engines Turn <strong>OFF</strong> Common SG Veh':'No matches found',
		onFilter: function(){
			sm_enginelist2.update();
		},
		onOpen: function() {
			sm_enginelist2.update();
		},
		onClick: function(view) {
		// 	if(view.value!=AppSearchCurrentParams.engine) {
		// 	   getEngineNo(false);
		// 	}
		}
	});

	$("#sm_engineno_select2").multipleSelect({
		filter: true,
		single: true,
		placeholder : 'EngineNo',
		noMatchesFound:$('#chk_app_search_sg_only').is(':checked')?'No matches found<br>To show all numbers Turn <strong>OFF</strong> Common SG Veh':'No matches found',
		onFilter: function(){
			sm_enginenolist2.update();
		},
		onOpen: function() {
			sm_enginenolist2.update();
		},
		onClick: function(view) {
			// if(view.value!=AppSearchCurrentParams.engineno) {
			// }
		}
	});




	function SwitchEnabledAppsearchFields2(){
		$("#model_select2, #year_select2, #body_select2, #engine_select2, #engineno_select2").not(':focus').multipleSelect("disable");
		if($('select#brand_select2 :selected').val()>0) {
			$("#model_select2").not(':focus').multipleSelect("enable");
			$("#class_select2").not(':focus').multipleSelect("enable");
		}
		if($('select#model_select2 :selected').val()>0) {
			$("#year_select2,#body_select2, #engine_select2, #engineno_select2").not(':focus').multipleSelect("enable");
		}
	}

	function SmSwitchEnabledAppsearchFields2(){
		$("#sm_model_select2, #sm_year_select2, #sm_body_select2, #sm_engine_select2, #sm_engineno_select2").not(':focus').multipleSelect("disable");
		if($('select#sm_brand_select2 :selected').val()>0) {
			$("#sm_model_select2").not(':focus').multipleSelect("enable");
			$("#sm_class_select2").not(':focus').multipleSelect("enable");
		}
		if($('select#sm_model_select2 :selected').val()>0) {
			$("#sm_year_select2,#sm_body_select2, #sm_engine_select2, #sm_engineno_select2").not(':focus').multipleSelect("enable");
		}
	}


	var brandlist2 = new PerfectScrollbar('#moto .brand .listwrapper', {
		wheelPropagation: true,
		minScrollbarLength: 100,
		maxScrollbarLength: 100,
	});
	var classlist2 = new PerfectScrollbar('#moto .class .listwrapper', {
		wheelPropagation: true,
		minScrollbarLength: 100,
		maxScrollbarLength: 100,
	});
	var modellist2 = new PerfectScrollbar('#moto .model .listwrapper', {
		wheelPropagation: true,
		minScrollbarLength: 100,
		maxScrollbarLength: 100,
	});
	var yearlist2 = new PerfectScrollbar('#moto .year .listwrapper', {
		wheelPropagation: true,
		minScrollbarLength: 100,
		maxScrollbarLength: 100,
	});
	var bodylist2 = new PerfectScrollbar('#moto .body .listwrapper', {
		wheelPropagation: true,
		minScrollbarLength: 100,
		maxScrollbarLength: 100,
	});
	var enginelist2 = new PerfectScrollbar('#moto .engine .listwrapper', {
		wheelPropagation: true,
		minScrollbarLength: 100,
		maxScrollbarLength: 100,
	});
	var enginenolist2 = new PerfectScrollbar('#moto .engineno .listwrapper', {
		wheelPropagation: true,
		minScrollbarLength: 100,
		maxScrollbarLength: 100,
	});




	var sm_brandlist2 = new PerfectScrollbar('#sm_moto .brand .listwrapper', {
		wheelPropagation: true,
		minScrollbarLength: 100,
		maxScrollbarLength: 100,
	});
	var sm_classlist2 = new PerfectScrollbar('#sm_moto .class .listwrapper', {
		wheelPropagation: true,
		minScrollbarLength: 100,
		maxScrollbarLength: 100,
	});
	var sm_modellist2 = new PerfectScrollbar('#sm_moto .model .listwrapper', {
		wheelPropagation: true,
		minScrollbarLength: 100,
		maxScrollbarLength: 100,
	});
	var sm_yearlist2 = new PerfectScrollbar('#sm_moto .year .listwrapper', {
		wheelPropagation: true,
		minScrollbarLength: 100,
		maxScrollbarLength: 100,
	});
	var sm_bodylist2 = new PerfectScrollbar('#sm_moto .body .listwrapper', {
		wheelPropagation: true,
		minScrollbarLength: 100,
		maxScrollbarLength: 100,
	});
	var sm_enginelist2 = new PerfectScrollbar('#sm_moto .engine .listwrapper', {
		wheelPropagation: true,
		minScrollbarLength: 100,
		maxScrollbarLength: 100,
	});
	var sm_enginenolist2 = new PerfectScrollbar('#sm_moto .engineno .listwrapper', {
		wheelPropagation: true,
		minScrollbarLength: 100,
		maxScrollbarLength: 100,
	});
})
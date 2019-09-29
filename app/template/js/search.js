$(document).ready(function(){
	// https://www.fitinpart.sg/catalog/view/javascript/function.js
	$("#brand_select").multipleSelect({
		single: true,
		filter: true,
		placeholder : 'Maker',
		noMatchesFound:$('#chk_app_search_sg_only').is(':checked')?'No matches found<br>To show all brands Turn <strong>OFF</strong> Common SG Veh':'No matches found',
		onFilter: function(){
			brandlist.update();
		},
		onOpen: function() {
			brandlist.update();
		},

		onClick: function(view) {
		//Unset the all selection values
		   $("#class_select, #model_select, "
				 + "#year_select,#body_select, #engine_select, #engineno_select").multipleSelect("uncheckAll");

		   SwitchEnabledAppsearchFields();
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
			SwitchEnabledAppsearchFields();
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

		SwitchEnabledAppsearchFields();
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
		placeholder : 'Body',
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
		placeholder : 'Engine',
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

	$("#engineno_select").multipleSelect({
		filter: true,
		single: true,
		placeholder : 'EngineNo',
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


// Modal mobile search
	$("#sm_brand_select").multipleSelect({
		single: true,
		filter: true,
		placeholder : 'Maker',
		noMatchesFound:$('#chk_app_search_sg_only').is(':checked')?'No matches found<br>To show all brands Turn <strong>OFF</strong> Common SG Veh':'No matches found',
		onFilter: function(){
			sm_brandlist.update();
		},
		onOpen: function() {
			console.log("open brand select");
			sm_brandlist.update();
		},

		onClick: function(view) {
		//Unset the all selection values
		   $("#sm_class_select, #sm_model_select, "
				 + "#sm_year_select,#sm_body_select, #sm_engine_select, #sm_engineno_select").multipleSelect("uncheckAll");

		   SmSwitchEnabledAppsearchFields();
		   //Get class and model
		   // getClass(0, 0, 0);
		   // getModel(0, 0, 0, 0);
		}
	});

	$("#sm_class_select").multipleSelect({
		filter: true,
		single: true,
		placeholder : 'Class',
		// noMatchesFound:$('#chk_app_search_sg_only').is(':checked')?'No matches found<br>To show all classes Turn <strong>OFF</strong> Common SG Veh':'No matches found',
		onFilter: function(){
			sm_classlist.update();
		},
		onOpen: function() {
			sm_classlist.update();
		},
		onClick: function(view) {
			$(" #sm_model_select, #sm_year_select, #sm_body_select, #sm_engine_select, #sm_engineno_select").multipleSelect("uncheckAll");
			SmSwitchEnabledAppsearchFields();
			// getModel(0,0,0,0);
		}
	});

	$("#sm_model_select").multipleSelect({
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
			sm_modellist.update();
		},
		onOpen: function() {
			sm_modellist.update();
		},
		onClick: function() {
			$("#sm_year_select, #sm_body_select, #sm_engine_select, #sm_engineno_select").multipleSelect("uncheckAll");

		SmSwitchEnabledAppsearchFields();
		// getYears(false);
		}
	});

	$("#sm_year_select").multipleSelect({
		filter: true,
		single: true,
		placeholder : 'Year',
		noMatchesFound:$('#chk_app_search_sg_only').is(':checked')?'No matches found<br>To show all years Turn <strong>OFF</strong> Common SG Veh':'No matches found',
		onFilter: function(){
			sm_yearlist.update();
		},
		onOpen: function() {
			sm_yearlist.update();
		},
		onClick: function(view) {
			// if(view.value!=AppSearchCurrentParams.years) {
			// 	getBody(false);
			// }
		}
	});

	$("#sm_body_select").multipleSelect({
		filter: true,
		single: true,
		placeholder : 'Body',
		noMatchesFound:$('#chk_app_search_sg_only').is(':checked')?'No matches found<br>To show all bodies Turn <strong>OFF</strong> Common SG Veh':'No matches found',
		onFilter: function(){
			sm_bodylist.update();
		},
		onOpen: function() {
			sm_bodylist.update();
		},
		onClick: function(view) {
			// if(view.value!=AppSearchCurrentParams.body) {
				//  getEngine(false);
			// }
		}
	});

	$("#sm_engine_select").multipleSelect({
		filter: true,
		single: true,
		placeholder : 'Engine',
		noMatchesFound:$('#chk_app_search_sg_only').is(':checked')?'No matches found<br>To show all engines Turn <strong>OFF</strong> Common SG Veh':'No matches found',
		onFilter: function(){
			sm_enginelist.update();
		},
		onOpen: function() {
			sm_enginelist.update();
		},
		onClick: function(view) {
		// 	if(view.value!=AppSearchCurrentParams.engine) {
		// 	   getEngineNo(false);
		// 	}
		}
	});

	$("#sm_engineno_select").multipleSelect({
		filter: true,
		single: true,
		placeholder : 'EngineNo',
		noMatchesFound:$('#chk_app_search_sg_only').is(':checked')?'No matches found<br>To show all numbers Turn <strong>OFF</strong> Common SG Veh':'No matches found',
		onFilter: function(){
			sm_enginenolist.update();
		},
		onOpen: function() {
			sm_enginenolist.update();
		},
		onClick: function(view) {
			// if(view.value!=AppSearchCurrentParams.engineno) {
			// }
		}
	});




	$("#ss_type_id").multipleSelect({
		single: true,
		filter: true,
		placeholder : 'Parts type',
		onFilter: function(){
			typelist.update();
		},
		onOpen: function() {
			typelist.update();
		},

		onClick: function(view) {
		}
	});


	// sm - smartsearch
	$("#sm_ss_type_id").multipleSelect({
		single: true,
		filter: true,
		placeholder : 'Parts type',
		onFilter: function(){
			typelist.update();
		},
		onOpen: function() {
			typelist.update();
		},
		onClick: function(view) {
		}
	});

	var brandlist = new PerfectScrollbar('#car .brand .listwrapper', {
		wheelPropagation: true,
		minScrollbarLength: 100,
		maxScrollbarLength: 100,
	});
	var classlist = new PerfectScrollbar('#car .class .listwrapper', {
		wheelPropagation: true,
		minScrollbarLength: 100,
		maxScrollbarLength: 100,
	});
	var modellist = new PerfectScrollbar('#car .model .listwrapper', {
		wheelPropagation: true,
		minScrollbarLength: 100,
		maxScrollbarLength: 100,
	});
	var yearlist = new PerfectScrollbar('#car .year .listwrapper', {
		wheelPropagation: true,
		minScrollbarLength: 100,
		maxScrollbarLength: 100,
	});
	var bodylist = new PerfectScrollbar('#car .body .listwrapper', {
		wheelPropagation: true,
		minScrollbarLength: 100,
		maxScrollbarLength: 100,
	});
	var enginelist = new PerfectScrollbar('#car .engine .listwrapper', {
		wheelPropagation: true,
		minScrollbarLength: 100,
		maxScrollbarLength: 100,
	});
	var enginenolist = new PerfectScrollbar('#car .engineno .listwrapper', {
		wheelPropagation: true,
		minScrollbarLength: 100,
		maxScrollbarLength: 100,
	});
	var typelist = new PerfectScrollbar('#searchbysizeModal .listwrapper', {
		wheelPropagation: true,
		minScrollbarLength: 100,
		maxScrollbarLength: 100,
	});

	// smartsearch
	var sm_typelist = new PerfectScrollbar('#mobSearch .listwrapper', {
		wheelPropagation: true,
		minScrollbarLength: 100,
		maxScrollbarLength: 100,
	});

	var sm_brandlist = new PerfectScrollbar('#sm_car .brand .listwrapper', {
		wheelPropagation: true,
		minScrollbarLength: 100,
		maxScrollbarLength: 100,
	});

	var sm_classlist = new PerfectScrollbar('#sm_car .class .listwrapper', {
		wheelPropagation: true,
		minScrollbarLength: 100,
		maxScrollbarLength: 100,
	});
	var sm_modellist = new PerfectScrollbar('#sm_car .model .listwrapper', {
		wheelPropagation: true,
		minScrollbarLength: 100,
		maxScrollbarLength: 100,
	});
	var sm_yearlist = new PerfectScrollbar('#sm_car .year .listwrapper', {
		wheelPropagation: true,
		minScrollbarLength: 100,
		maxScrollbarLength: 100,
	});
	var sm_bodylist = new PerfectScrollbar('#sm_car .body .listwrapper', {
		wheelPropagation: true,
		minScrollbarLength: 100,
		maxScrollbarLength: 100,
	});
	var sm_enginelist = new PerfectScrollbar('#sm_car .engine .listwrapper', {
		wheelPropagation: true,
		minScrollbarLength: 100,
		maxScrollbarLength: 100,
	});
	var sm_enginenolist = new PerfectScrollbar('#sm_car .engineno .listwrapper', {
		wheelPropagation: true,
		minScrollbarLength: 100,
		maxScrollbarLength: 100,
	});

})


function SwitchEnabledAppsearchFields(){
	$("#model_select, #year_select, #body_select, #engine_select, #engineno_select").not(':focus').multipleSelect("disable");
	if($('select#brand_select :selected').val()>0) {
		$("#model_select").not(':focus').multipleSelect("enable");
		$("#class_select").not(':focus').multipleSelect("enable");
	}
	if($('select#model_select :selected').val()>0) {
		$("#year_select,#body_select, #engine_select, #engineno_select").not(':focus').multipleSelect("enable");
	}
}


function SmSwitchEnabledAppsearchFields(){
	$("#sm_model_select, #sm_year_select, #sm_body_select, #sm_engine_select, #sm_engineno_select").not(':focus').multipleSelect("disable");
	if($('select#sm_brand_select :selected').val()>0) {
		$("#sm_model_select").not(':focus').multipleSelect("enable");
		$("#sm_class_select").not(':focus').multipleSelect("enable");
	}
	if($('select#sm_model_select :selected').val()>0) {
		$("#sm_year_select,#sm_body_select, #sm_engine_select, #sm_engineno_select").not(':focus').multipleSelect("enable");
	}
}
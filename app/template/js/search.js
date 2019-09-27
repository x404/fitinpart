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
	//*Code for the onChange changes
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
	var smtypelist = new PerfectScrollbar('#mobSearch .listwrapper', {
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
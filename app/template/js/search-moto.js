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
	//*Code for the onChange changes
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


	var brandlist2 = new PerfectScrollbar('.searchbox .brand2 .listwrapper', {
		wheelPropagation: true,
		minScrollbarLength: 100,
		maxScrollbarLength: 100,
	});
	var classlist2 = new PerfectScrollbar('.searchbox .class2 .listwrapper', {
		wheelPropagation: true,
		minScrollbarLength: 100,
		maxScrollbarLength: 100,
	});
	var modellist2 = new PerfectScrollbar('.searchbox .model2 .listwrapper', {
		wheelPropagation: true,
		minScrollbarLength: 100,
		maxScrollbarLength: 100,
	});
	var yearlist2 = new PerfectScrollbar('.searchbox .year2 .listwrapper', {
		wheelPropagation: true,
		minScrollbarLength: 100,
		maxScrollbarLength: 100,
	});
	var bodylist2 = new PerfectScrollbar('.searchbox .body2 .listwrapper', {
		wheelPropagation: true,
		minScrollbarLength: 100,
		maxScrollbarLength: 100,
	});
	var enginelist2 = new PerfectScrollbar('.searchbox .engine2 .listwrapper', {
		wheelPropagation: true,
		minScrollbarLength: 100,
		maxScrollbarLength: 100,
	});
	var enginenolist2 = new PerfectScrollbar('.searchbox .engineno2 .listwrapper', {
		wheelPropagation: true,
		minScrollbarLength: 100,
		maxScrollbarLength: 100,
	});
})
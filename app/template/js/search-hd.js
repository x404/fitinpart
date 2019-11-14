$(document).ready(function(){
	// https://www.fitinpart.sg/catalog/view/javascript/function.js
	$("#brand_select3").multipleSelect({
		single: true,
		filter: true,
		placeholder : 'Maker',
		noMatchesFound:$('#chk_app_search_sg_only').is(':checked')?'No matches found<br>To show all brands Turn <strong>OFF</strong> Common SG Veh':'No matches found',
		onFilter: function(){
			brandlist3.update();
		},
		onOpen: function() {
			brandlist3.update();
		},

		onClick: function(view) {
		//Unset the all selection values
		   $("#class_select3, #model_select3, #engine_select3").multipleSelect("uncheckAll");

		   SwitchEnabledAppsearchFields3();
		   //Get class and model
		   // getClass(0, 0, 0);
		   // getModel(0, 0, 0, 0);
		}
	});

	$("#class_select3").multipleSelect({
		filter: true,
		single: true,
		placeholder : 'Class',
		// noMatchesFound:$('#chk_app_search_sg_only').is(':checked')?'No matches found<br>To show all classes Turn <strong>OFF</strong> Common SG Veh':'No matches found',
		onFilter: function(){
			classlist3.update();
		},
		onOpen: function() {
			classlist3.update();
		},
		onClick: function(view) {
			$(" #model_select3, #engine_select3").multipleSelect("uncheckAll");
			SwitchEnabledAppsearchFields3();
			// getModel(0,0,0,0);
		}
	});

	$("#model_select3").multipleSelect({
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
			$("#engine_select3").multipleSelect("uncheckAll");

		SwitchEnabledAppsearchFields3();
		// getYears(false);
		}
	});

	$("#engine_select3").multipleSelect({
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

	$("#sm_brand_select3").multipleSelect({
		single: true,
		filter: true,
		placeholder : 'Maker',
		noMatchesFound:$('#chk_app_search_sg_only').is(':checked')?'No matches found<br>To show all brands Turn <strong>OFF</strong> Common SG Veh':'No matches found',
		onFilter: function(){
			sm_brandlist3.update();
		},
		onOpen: function() {
			sm_brandlist3.update();
		},

		onClick: function(view) {
		//Unset the all selection values
		   $("#sm_class_select3, #sm_model_select3, #sm_engine_select3").multipleSelect("uncheckAll");

		   SmSwitchEnabledAppsearchFields3();
		   //Get class and model
		   // getClass(0, 0, 0);
		   // getModel(0, 0, 0, 0);
		}
	});

	$("#sm_class_select3").multipleSelect({
		filter: true,
		single: true,
		placeholder : 'Class',
		// noMatchesFound:$('#chk_app_search_sg_only').is(':checked')?'No matches found<br>To show all classes Turn <strong>OFF</strong> Common SG Veh':'No matches found',
		onFilter: function(){
			sm_classlist3.update();
		},
		onOpen: function() {
			sm_classlist3.update();
		},
		onClick: function(view) {
			$(" #sm_model_select3, #sm_engine_select3").multipleSelect("uncheckAll");
			SmSwitchEnabledAppsearchFields3();
			// getModel(0,0,0,0);
		}
	});

	$("#sm_model_select3").multipleSelect({
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
			sm_modellist3.update();
		},
		onOpen: function() {
			sm_modellist3.update();
		},
		onClick: function() {
			$("#sm_engine_select3").multipleSelect("uncheckAll");

		SmSwitchEnabledAppsearchFields3();
		// getYears(false);
		}
	});

	$("#sm_engine_select3").multipleSelect({
		filter: true,
		single: true,
		placeholder : 'Engine',
		noMatchesFound:$('#chk_app_search_sg_only').is(':checked')?'No matches found<br>To show all engines Turn <strong>OFF</strong> Common SG Veh':'No matches found',
		onFilter: function(){
			sm_enginelist3.update();
		},
		onOpen: function() {
			sm_enginelist3.update();
		},
		onClick: function(view) {
		// 	if(view.value!=AppSearchCurrentParams.engine) {
		// 	   getEngineNo(false);
		// 	}
		}
	});

	// aside
	$("#aside_brand_select3").multipleSelect({
		single: true,
		filter: true,
		placeholder : 'Maker',
		noMatchesFound:$('#chk_app_search_sg_only').is(':checked')?'No matches found<br>To show all brands Turn <strong>OFF</strong> Common SG Veh':'No matches found',
		onFilter: function(){
			aside_brandlist.update();
		},
		onOpen: function() {
			aside_brandlist.update();
		},

		onClick: function(view) {
		//Unset the all selection values
		   $("#aside_class_select3, #aside_model_select3, #aside_engine_select3").multipleSelect("uncheckAll");

		   AsideSwitchEnabledAppsearchFields3();
		   //Get class and model
		   // getClass(0, 0, 0);
		   // getModel(0, 0, 0, 0);
		}
	});

	$("#aside_class_select3").multipleSelect({
		filter: true,
		single: true,
		placeholder : 'Class',
		// noMatchesFound:$('#chk_app_search_sg_only').is(':checked')?'No matches found<br>To show all classes Turn <strong>OFF</strong> Common SG Veh':'No matches found',
		onFilter: function(){
			aside_classlist.update();
		},
		onOpen: function() {
			aside_classlist.update();
		},
		onClick: function(view) {
			$(" #aside_model_select3, #aside_engine_select3").multipleSelect("uncheckAll");
			AsideSwitchEnabledAppsearchFields3();
			// getModel(0,0,0,0);
		}
	});

	$("#aside_model_select3").multipleSelect({
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
			aside_modellist.update();
		},
		onOpen: function() {
			aside_modellist.update();
		},
		onClick: function() {
			$("#aside_engine_select3").multipleSelect("uncheckAll");

		AsideSwitchEnabledAppsearchFields3();
		// getYears(false);
		}
	});

	$("#aside_engine_select3").multipleSelect({
		filter: true,
		single: true,
		placeholder : 'Engine',
		noMatchesFound:$('#chk_app_search_sg_only').is(':checked')?'No matches found<br>To show all engines Turn <strong>OFF</strong> Common SG Veh':'No matches found',
		onFilter: function(){
			aside_enginelist.update();
		},
		onOpen: function() {
			aside_enginelist.update();
		},
		onClick: function(view) {
		// 	if(view.value!=AppSearchCurrentParams.engine) {
		// 	   getEngineNo(false);
		// 	}
		}
	});



	function SwitchEnabledAppsearchFields3(){
		$("#model_select3, #engine_select3").not(':focus').multipleSelect("disable");
		if($('select#brand_select3 :selected').val()>0) {
			$("#model_select3").not(':focus').multipleSelect("enable");
			$("#class_select3").not(':focus').multipleSelect("enable");
		}
		if($('select#model_select3 :selected').val()>0) {
			$("#engine_select3").not(':focus').multipleSelect("enable");
		}
	}

	function SmSwitchEnabledAppsearchFields3(){
		$("#sm_model_select3, #sm_engine_select3").not(':focus').multipleSelect("disable");
		if($('select#sm_brand_select3 :selected').val()>0) {
			$("#sm_model_select3").not(':focus').multipleSelect("enable");
			$("#sm_class_select3").not(':focus').multipleSelect("enable");
		}
		if($('select#sm_model_select3 :selected').val()>0) {
			$("#sm_engine_select3").not(':focus').multipleSelect("enable");
		}
	}



	function AsideSwitchEnabledAppsearchFields3(){
		$("#aside_model_select3, #aside_engine_select3").not(':focus').multipleSelect("disable");
		if($('select#aside_brand_select3 :selected').val()>0) {
			$("#aside_model_select3").not(':focus').multipleSelect("enable");
			$("#aside_class_select3").not(':focus').multipleSelect("enable");
		}
		if($('select#aside_model_select3 :selected').val()>0) {
			$("#aside_engine_select3").not(':focus').multipleSelect("enable");
		}
	}


	if (document.querySelectorAll('#hd .brand .listwrapper').length >= 1) {
		brandlist2 = new PerfectScrollbar('#hd .brand .listwrapper', {
			wheelPropagation: true,
			minScrollbarLength: 100,
			maxScrollbarLength: 100,
		});
	};

	if (document.querySelectorAll('#hd .model .listwrapper').length >= 1) {
		modellist2 = new PerfectScrollbar('#hd .model .listwrapper', {
			wheelPropagation: true,
			minScrollbarLength: 100,
			maxScrollbarLength: 100,
		});
	};

	if (document.querySelectorAll('#hd .engine .listwrapper').length >= 1) {
		enginelist2 = new PerfectScrollbar('#hd .engine .listwrapper', {
			wheelPropagation: true,
			minScrollbarLength: 100,
			maxScrollbarLength: 100,
		});
	};


	// aside
	if (document.querySelectorAll('#aside_hd .brand .listwrapper').length >= 1) {
		aside_brandlist = new PerfectScrollbar('#aside_hd .brand .listwrapper', {
			wheelPropagation: true,
			minScrollbarLength: 100,
			maxScrollbarLength: 100,
		});
	};

	if (document.querySelectorAll('#aside_hd .model .listwrapper').length >= 1) {
		aside_modellist = new PerfectScrollbar('#aside_hd .model .listwrapper', {
			wheelPropagation: true,
			minScrollbarLength: 100,
			maxScrollbarLength: 100,
		});
	};

	if (document.querySelectorAll('#aside_hd .engine .listwrapper').length >= 1) {
		aside_enginelist = new PerfectScrollbar('#aside_hd .engine .listwrapper', {
			wheelPropagation: true,
			minScrollbarLength: 100,
			maxScrollbarLength: 100,
		});
	};



	var brandlist3 = new PerfectScrollbar('#hd .brand .listwrapper', {
		wheelPropagation: true,
		minScrollbarLength: 100,
		maxScrollbarLength: 100,
	});

	var modellist3 = new PerfectScrollbar('#hd .model .listwrapper', {
		wheelPropagation: true,
		minScrollbarLength: 100,
		maxScrollbarLength: 100,
	});

	var enginelist3 = new PerfectScrollbar('#hd .engine .listwrapper', {
		wheelPropagation: true,
		minScrollbarLength: 100,
		maxScrollbarLength: 100,
	});


	var sm_brandlist3 = new PerfectScrollbar('#sm_hd .brand .listwrapper', {
		wheelPropagation: true,
		minScrollbarLength: 100,
		maxScrollbarLength: 100,
	});

	var sm_modellist3 = new PerfectScrollbar('#sm_hd .model .listwrapper', {
		wheelPropagation: true,
		minScrollbarLength: 100,
		maxScrollbarLength: 100,
	});

	var sm_enginelist3 = new PerfectScrollbar('#sm_hd .engine .listwrapper', {
		wheelPropagation: true,
		minScrollbarLength: 100,
		maxScrollbarLength: 100,
	});
})
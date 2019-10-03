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


	// modal
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



	// aside
	$("#aside_brand_select").multipleSelect({
		single: true,
		filter: true,
		placeholder : 'Maker',
		noMatchesFound:$('#chk_app_search_sg_only').is(':checked')?'No matches found<br>To show all brands Turn <strong>OFF</strong> Common SG Veh':'No matches found',
		onFilter: function(){
			aside_brandlist.update();
		},
		onOpen: function() {
			console.log("open brand select");
			aside_brandlist.update();
		},

		onClick: function(view) {
		//Unset the all selection values
		   $("#aside_class_select, #aside_model_select, "
				 + "#aside_year_select,#aside_body_select, #aside_engine_select, #aside_engineno_select").multipleSelect("uncheckAll");

		   AsideSwitchEnabledAppsearchFields();
		   //Get class and model
		   // getClass(0, 0, 0);
		   // getModel(0, 0, 0, 0);
		}
	});

	$("#aside_class_select").multipleSelect({
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
			$(" #aside_model_select, #aside_year_select, #aside_body_select, #aside_engine_select, #aside_engineno_select").multipleSelect("uncheckAll");
			AsideSwitchEnabledAppsearchFields();
			// getModel(0,0,0,0);
		}
	});

	$("#aside_model_select").multipleSelect({
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
			$("#aside_year_select, #aside_body_select, #aside_engine_select, #aside_engineno_select").multipleSelect("uncheckAll");

		AsideSwitchEnabledAppsearchFields();
		// getYears(false);
		}
	});

	$("#aside_year_select").multipleSelect({
		filter: true,
		single: true,
		placeholder : 'Year',
		noMatchesFound:$('#chk_app_search_sg_only').is(':checked')?'No matches found<br>To show all years Turn <strong>OFF</strong> Common SG Veh':'No matches found',
		onFilter: function(){
			aside_yearlist.update();
		},
		onOpen: function() {
			aside_yearlist.update();
		},
		onClick: function(view) {
			// if(view.value!=AppSearchCurrentParams.years) {
			// 	getBody(false);
			// }
		}
	});

	$("#aside_body_select").multipleSelect({
		filter: true,
		single: true,
		placeholder : 'Body',
		noMatchesFound:$('#chk_app_search_sg_only').is(':checked')?'No matches found<br>To show all bodies Turn <strong>OFF</strong> Common SG Veh':'No matches found',
		onFilter: function(){
			aside_bodylist.update();
		},
		onOpen: function() {
			aside_bodylist.update();
		},
		onClick: function(view) {
			// if(view.value!=AppSearchCurrentParams.body) {
				//  getEngine(false);
			// }
		}
	});

	$("#aside_engine_select").multipleSelect({
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

	$("#aside_engineno_select").multipleSelect({
		filter: true,
		single: true,
		placeholder : 'EngineNo',
		noMatchesFound:$('#chk_app_search_sg_only').is(':checked')?'No matches found<br>To show all numbers Turn <strong>OFF</strong> Common SG Veh':'No matches found',
		onFilter: function(){
			aside_enginenolist.update();
		},
		onOpen: function() {
			aside_enginenolist.update();
		},
		onClick: function(view) {
			// if(view.value!=AppSearchCurrentParams.engineno) {
			// }
		}
	});
	// =/aside


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

	// aside
	$("#ss_type_id-3").multipleSelect({
		single: true,
		filter: true,
		placeholder : 'Parts type',
		onFilter: function(){
			aside_typelist.update();
		},
		onOpen: function() {
			aside_typelist.update();
		},
		onClick: function(view) {
		}
	});


	if (document.querySelectorAll('#car .brand .listwrapper').length >= 1) {
		brandlist = new PerfectScrollbar('#car .brand .listwrapper', {
				wheelPropagation: true,
				minScrollbarLength: 100,
				maxScrollbarLength: 100,
			});
	};

	
	if (document.querySelectorAll('#car .class .listwrapper').length >= 1) {
		classlist = new PerfectScrollbar('#car .class .listwrapper', {
			wheelPropagation: true,
			minScrollbarLength: 100,
			maxScrollbarLength: 100,
		});
	};

	if (document.querySelectorAll('#car .model .listwrapper').length >= 1) {
		modellist = new PerfectScrollbar('#car .model .listwrapper', {
			wheelPropagation: true,
			minScrollbarLength: 100,
			maxScrollbarLength: 100,
		});
	};

	if (document.querySelectorAll('#car .year .listwrapper').length >= 1) {
		yearlist = new PerfectScrollbar('#car .year .listwrapper', {
			wheelPropagation: true,
			minScrollbarLength: 100,
			maxScrollbarLength: 100,
		});
	};

	if (document.querySelectorAll('#car .class .listwrapper').length >= 1) {
		bodylist = new PerfectScrollbar('#car .body .listwrapper', {
			wheelPropagation: true,
			minScrollbarLength: 100,
			maxScrollbarLength: 100,
		});
	};

	if (document.querySelectorAll('#car .engine .listwrapper').length >= 1) {
		enginelist = new PerfectScrollbar('#car .engine .listwrapper', {
			wheelPropagation: true,
			minScrollbarLength: 100,
			maxScrollbarLength: 100,
		});
	};

	if (document.querySelectorAll('#car .engineno .listwrapper').length >= 1) {
		enginenolist = new PerfectScrollbar('#car .engineno .listwrapper', {
			wheelPropagation: true,
			minScrollbarLength: 100,
			maxScrollbarLength: 100,
		});
	};

	var	typelist = new PerfectScrollbar('#searchbysizeModal .listwrapper', {
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


	//aside
	var aside_typelist = new PerfectScrollbar('#sizeForm3 .listwrapper', {
		wheelPropagation: true,
		minScrollbarLength: 100,
		maxScrollbarLength: 100,
	});

	if (document.querySelectorAll('#aside_car .brand .listwrapper').length >= 1) {
		aside_brandlist = new PerfectScrollbar('#aside_car .brand .listwrapper', {
				wheelPropagation: true,
				minScrollbarLength: 100,
				maxScrollbarLength: 100,
			});
	};

	
	if (document.querySelectorAll('#aside_car .class .listwrapper').length >= 1) {
		aside_classlist = new PerfectScrollbar('#aside_car .class .listwrapper', {
			wheelPropagation: true,
			minScrollbarLength: 100,
			maxScrollbarLength: 100,
		});
	};

	if (document.querySelectorAll('#aside_car .model .listwrapper').length >= 1) {
		aside_modellist = new PerfectScrollbar('#aside_car .model .listwrapper', {
			wheelPropagation: true,
			minScrollbarLength: 100,
			maxScrollbarLength: 100,
		});
	};

	if (document.querySelectorAll('#aside_car .year .listwrapper').length >= 1) {
		aside_yearlist = new PerfectScrollbar('#aside_car .year .listwrapper', {
			wheelPropagation: true,
			minScrollbarLength: 100,
			maxScrollbarLength: 100,
		});
	};

	if (document.querySelectorAll('#aside_car .class .listwrapper').length >= 1) {
		aside_bodylist = new PerfectScrollbar('#aside_car .body .listwrapper', {
			wheelPropagation: true,
			minScrollbarLength: 100,
			maxScrollbarLength: 100,
		});
	};

	if (document.querySelectorAll('#aside_car .engine .listwrapper').length >= 1) {
		aside_enginelist = new PerfectScrollbar('#aside_car .engine .listwrapper', {
			wheelPropagation: true,
			minScrollbarLength: 100,
			maxScrollbarLength: 100,
		});
	};

	if (document.querySelectorAll('#aside_car .engineno .listwrapper').length >= 1) {
		aside_enginenolist = new PerfectScrollbar('#aside_car .engineno .listwrapper', {
			wheelPropagation: true,
			minScrollbarLength: 100,
			maxScrollbarLength: 100,
		});
	};

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


function AsideSwitchEnabledAppsearchFields(){
	$("#aside_model_select, #aside_year_select, #aside_body_select, #aside_engine_select, #aside_engineno_select").not(':focus').multipleSelect("disable");
	if($('select#aside_brand_select :selected').val()>0) {
		$("#aside_model_select").not(':focus').multipleSelect("enable");
		$("#aside_class_select").not(':focus').multipleSelect("enable");
	}
	if($('select#aside_model_select :selected').val()>0) {
		$("#aside_year_select,#aside_body_select, #aside_engine_select, #aside_engineno_select").not(':focus').multipleSelect("enable");
	}
}
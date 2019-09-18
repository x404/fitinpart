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


	var brandlist3 = new PerfectScrollbar('#hd .brand .listwrapper', {
		wheelPropagation: true,
		minScrollbarLength: 100,
		maxScrollbarLength: 100,
	});

	var modellist2 = new PerfectScrollbar('#hd .model .listwrapper', {
		wheelPropagation: true,
		minScrollbarLength: 100,
		maxScrollbarLength: 100,
	});

	var enginelist2 = new PerfectScrollbar('#hd .engine .listwrapper', {
		wheelPropagation: true,
		minScrollbarLength: 100,
		maxScrollbarLength: 100,
	});

})
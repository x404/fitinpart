var minslider = 40,
	maxslider = 30000,
	startvalue = 8000,
	endvalue = 22000,

	handlesSlider2 = document.getElementById('slider-cost'), 
	costfrom = document.getElementById('cost-from'),
	costto = document.getElementById('cost-to');


// COST
noUiSlider.create(handlesSlider2, {
	start: [ startvalue, endvalue ],
	connect: true,
	range: {
		'min': minslider,
		'max': maxslider
	},
    format: wNumb({
        decimals: 0,
        thousand: ' ',
        suffix: ' usd'
    })
});

// cost aside
handlesSlider2.noUiSlider.on('update', function(values, handle){
	costfrom.value = values[0];
	costto.value = values[1];
});

handlesSlider2.noUiSlider.on('change', function(values, handle){
});
costfrom.addEventListener('change', function ( ) {
	handlesSlider2.noUiSlider.set([this.value, null]);
	costfrom.value = this.value;
});
costto.addEventListener('change', function ( ) {
	handlesSlider2.noUiSlider.set([null, this.value]);
	costto.value = this.value;
});

document.querySelector('.filter .filterForm').addEventListener('reset', function(){
	handlesSlider2.noUiSlider.set([startvalue, endvalue]);
	costfrom.value = startvalue;
	costto.value = endvalue;
});

// document.querySelector('.filter [type="reset"]').addEventListener('click', function(){
// 	handlesSlider2.noUiSlider.set([startvalue, endvalue]);
// 	costfrom.value = startvalue;
// 	costto.value = endvalue;
// });
var minslider = 40,
	maxslider = 30000,

	handlesSlider2 = document.getElementById('slider-cost'), 
	costfrom = document.getElementById('cost-from'),
	costto = document.getElementById('cost-to');



// COST
noUiSlider.create(handlesSlider2, {
	start: [ 8000, 22000 ],
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
	// handlesSlider22.noUiSlider.set([costfrom.value, costto.value]);
});
costfrom.addEventListener('change', function ( ) {
	handlesSlider2.noUiSlider.set([this.value, null]);
	costfromsm.value = this.value;
	// handlesSlider22.noUiSlider.set([this.value, null]);
});
costto.addEventListener('change', function ( ) {
	handlesSlider2.noUiSlider.set([null, this.value]);
	costtosm.value = this.value;
	// handlesSlider22.noUiSlider.set([null, this.value]);
});

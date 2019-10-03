var minslider = 40,
	maxslider = 30000,

	handlesSlider2 = document.getElementById('slider-price'), 
	pricefrom = document.getElementById('price-from'),
	priceto = document.getElementById('price-to');



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
	pricefrom.value = values[0];
	priceto.value = values[1];
});

handlesSlider2.noUiSlider.on('change', function(values, handle){
	// handlesSlider22.noUiSlider.set([pricefrom.value, priceto.value]);
});
pricefrom.addEventListener('change', function ( ) {
	handlesSlider2.noUiSlider.set([this.value, null]);
	pricefromsm.value = this.value;
	// handlesSlider22.noUiSlider.set([this.value, null]);
});
priceto.addEventListener('change', function ( ) {
	handlesSlider2.noUiSlider.set([null, this.value]);
	pricetosm.value = this.value;
	// handlesSlider22.noUiSlider.set([null, this.value]);
});

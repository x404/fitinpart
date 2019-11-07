$(document).ready(function(){
	// =SERVICE PACK
	// toggle "service package"
	$(document).on('click','.btn-makesp', function(e){
		e.preventDefault();
		let $this = $(this);
		$this.next('.consist').slideDown('normal', function(){
			$(this).addClass('open')
		});
		$this.hide();
	});

	// hide service package
	$(document).on('click','.consist .btn-close', function(e){
		e.preventDefault();
		let $this = $(this);
		$this.closest('.consist').slideUp('normal',function(){
			$this.closest('.servicepack').find('.btn-makesp').show();
			$(this).removeClass('open');
		});
	});

	//REMOVE ITEM FROM PACKAGE
	$(document).on('click','.consist .btn-delete', function(e){
		e.preventDefault();
		const parentcat = $(this).parent().data('parent-cat');

		// remove green border and change del button to cart-button in item-product list
		delItemFromPack(parentcat);
	});

	$(document).on('click','.btn-delfrompack', function(e){
		e.preventDefault();
		const parentcat = $(this).closest('.item-products').data('svc_pattern_value');
		delItemFromPack(parentcat);
	})

	function delItemFromPack(parentcat){
		let $currentPack = $('.products__list .item-products.inpack');

		// return "add to pack" button in box package
		$('.servicepack .consist__field[data-parent-cat="' + parentcat + '"]').html('<button type="button" class="btn btn-addtopack btn-inline">Add to pack</button>');

		// item-product
		$currentPack.find('.btn-delfrompack').addClass('hide');
		$currentPack.find('.btn-addtopack').removeClass('hide');

		// change line in box package
		$currentPack.removeClass('inpack');		
	}



	// ADD TO PACK
	// add to pack from box serviceback
	$(document).on('click','.servicepack .btn-addtopack', function(e){
		e.preventDefault();
		let $this = $(this),
			$parentcat = $this.parent().data('parent-cat');

		$('.products__list .item-products.active').removeClass('active');

		// activated products
		$('.item-products').addClass('hide');
		$('.products__list .item-products[data-svc_pattern_value=' + $parentcat + ']').addClass('active').removeClass('hide');
		let first_el = $('.products__list .item-products.active').first();
		if(first_el.length) {
			$('html, body').animate({
				scrollTop: first_el.offset().top - 20
			}, 300);
		};

		//  hide buttons "to cart"
		$('.item-products.active').find('.btn-cart, .btn-notify').addClass('hide');

		// show button "to package"
		$('.item-products.active .btn-addtopack').removeClass('hide');
	});


	// add to pack from list products
	$(document).on('click','.item-products.active .btn-addtopack', function(e){
		e.preventDefault();
		let $this = $(this),
			$itemproducts = $this.closest('.item-products'),
			$title = $this.data('title'),
			$currentcat = $itemproducts.data('svc_pattern_value'),
			$oldItem = $('.item-products.inpack');

		// remove border from active product
		$oldItem.removeClass('inpack');
		$oldItem.find('.btn-delfrompack').addClass('hide');
		$oldItem.find('.btn-addtopack').removeClass('hide');

		// add Class
		$itemproducts.addClass('inpack');

		// change button to 'delfrompack'
		$this.addClass('hide');
		$itemproducts.find('.btn-delfrompack').removeClass('hide');

		// update title
		$('[data-parent-cat=' + $currentcat + ']').html($title + '<button type="button" class="btn btn-delete" aria-label="Delete position"></button>')
	});
});
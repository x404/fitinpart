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

	//remove item from package
	$(document).on('click','.consist .btn-delete', function(e){
		e.preventDefault();
		const parentcat = $(this).data('parent-cat');

		// remove green border and change del button to cart-button in item-product list
		delItemFromPack(parentcat);
	});

	$(document).on('click','.btn-delfrompack', function(e){
		e.preventDefault();
		const parentcat = $(this).closest('.item-products').data('svc_pattern_value');
		delItemFromPack(parentcat);
	})

	function delItemFromPack(parentcat){
		let $inpack = $('.products__list .item-products.inpack');

		// return "add to pack" button in box package
		$('.servicepack .btn[data-parent-cat="' + parentcat + '"]').closest('.consist__field').html('<button type="button" class="btn btn-addtopack btn-inline"data-parent-cat="' + parentcat + '">Add to pack</button>');

		// item-product
		$inpack.find('.btn-delfrompack').addClass('hide');
		$inpack.find('.btn-cart').removeClass('hide');

		// change line in box package
		$inpack.removeClass('inpack');		
	}



	// add to pack
	$(document).on('click','.btn-addtopack', function(e){
		e.preventDefault();
		let $this = $(this),
			$parentcat = $this.data('parent-cat');

		$('.products__list .item-products.active').removeClass('active');
		

		$('.products__list .item-products[data-svc_pattern_value=' + $parentcat + ']').addClass('active');
        let first_el=$('.products__list .item-products.active').first();
        if(first_el.length) {
            $('html, body').animate({
                scrollTop: first_el.offset().top - 20
            }, 300);
        }
	});
});
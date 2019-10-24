$(document).ready(function(){
	$('.slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.slider-nav'
	});
	$('.slider-nav').slick({
		prevArrow:'<button class="slick-arrow slick-prev" aria-label="Previous" type="button"></button>',
		nextArrow:'<button class="slick-arrow slick-next" aria-label="Next" type="button"></button>',
		slidesToShow: 4,
		slidesToScroll: 1,
		asNavFor: '.slider-for',
		arrows: true,
		dots: false,
		vertical: true,
		focusOnSelect: true
	});
});

// COMPARE SCRIPT
function fadeoutCompareInfo(){
	$('.compare-info').fadeOut('normal',function(){
		this.remove();
	});	
}

document.querySelector('.card-page .compare .btn').addEventListener('click',function(e){
	e.preventDefault();
	(this.classList.contains('to-compare')) ? this.textContent = 'Delete from compare' :  this.textContent = 'Compare this Product';
});

// close wishlist
$(document).on('click','.compare-info .close', function(e){
	e.preventDefault();
	fadeoutCompareInfo();
});

// to compare
$(document).on('click','.to-compare', function(e){
	e.preventDefault();
	var $this = $(this);
	msg = `
		<div class="compare-info compare-info-success modal show">
			<div class="modal-content modal-content-rbg">
				<p class="modal-title">Success</p>
				<p>You have added <strong class="upcase"> ${$this.data('title')} </strong> to your <a href="#"><strong>comparsion list!</strong></a></p>
				<button type="button" class="close a-rotate90" aria-label="Close">
					<svg width="22" height="22">
						<line x1="0" y1="0" x2="22" y2="22"/>
						<line x1="22" y1="0" x2="0" y2="22"/>
					</svg>
				</button>
			</div>
		</div>
	`;
	$('body').append(msg);
	$this.removeClass('to-compare').addClass('btn-compare-in');

	var timercompare = window.setInterval(function(){
		fadeoutCompareInfo();
		window.clearInterval(timercompare);
	},3000);
});

// from compare list
$(document).on('click','.btn-compare-in', function(e){
	e.preventDefault();
	var $this = $(this);
	$this.removeClass('btn-compare-in').addClass('to-compare');
});
// #COMPARE SCRIPT

$(document).on('click','.jump-vehicles', function(e){
	elementClick = $(this).data('target');
	destination = $(elementClick).offset().top;
	$("body,html").animate({scrollTop: destination }, 800);	
});

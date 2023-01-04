$(document).ready(function(){
	var owlGallery =  $('#gallery-detail');
	owlGallery.owlCarousel({
		loop:false,
		items:1,
		dots:true,
		nav:true,
		dotsContainer: '.thumbs'
	});
	$('.thumbs').on('click', 'a', function(e) {
			e.preventDefault();	
			owlGallery.trigger('to.owl.carousel', [$(this).index(), 300]);
		});
		
	var photoGallery =  $('#photogallery-big');
	photoGallery.owlCarousel({
		loop:false,
		items:1,
		dots:true,
		nav:true,
		autoHeight:true,
		navText:["предишна" , "следваща"],
		dotsContainer: '#photogallery-thumb'
	});
	$('#photogallery-thumb').on('click', 'a', function(e) {
			e.preventDefault();	
			photoGallery.trigger('to.owl.carousel', [$(this).index(), 300]);
		});
		
	var owlNews =  $('#news-big');
	owlNews.owlCarousel({
		loop:false,
		items:1,
		dots:true,
		autoHeight:false,
		nav:true,
		autoHeight:true,
		dotsContainer: '#news-thumb'
	});
	$('#news-thumb').on('click', 'a', function(e) {
			e.preventDefault();	
			owlNews.trigger('to.owl.carousel', [$(this).index(), 300]);
		});
		
		
	$('#menu-toggle').click(function(e){
		console.log(2);
		e.preventDefault();	
		var mWidth = $('#main-menu').width();		
		if( $('html').hasClass('menu-opened') ){				
			$('#main-menu').animate({right: -mWidth},function(){
				$('html').removeClass('menu-opened');
			});
		}else{
			$('html').addClass('menu-opened');
			$('#main-menu').animate({right: 0},function(){
				//
			}); 
		}		
	});
	
	$('.image-gallery').owlCarousel({
		loop:true,
		margin:0,
		nav:true,
		responsive:{
			0:{
				items:1
			},
			300:{
				items:2
			},
			600:{
				items:3
			},
			1000:{
				items:5
			}
		}
	});
	
	var owl = $('.image-slider');
		owl.owlCarousel({
		loop:true,
		margin:0,
		autoplay:true,
		autoplayTimeout:2000,
		dots: false,
		nav: true,
		navText:["предишна" , "следваща"],
		autoplayHoverPause:false,
		responsive:{
			0:{
				items:1
			},
			400:{
				items:2
			}
		}
	});
		$('.play').on('click',function(){
		owl.trigger('play.owl.autoplay',[2000])
		})
		$('.stop').on('click',function(){
		owl.trigger('stop.owl.autoplay')
	})
		
	function incrementValue(e) {
	  e.preventDefault();
	  var fieldName = $(e.target).data('field');
	  var parent = $(e.target).closest('div');
	  var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);

	  if (!isNaN(currentVal)) {
		parent.find('input[name=' + fieldName + ']').val(currentVal + 1);
	  } else {
		parent.find('input[name=' + fieldName + ']').val(0);
	  }
	}

	function decrementValue(e) {
	  e.preventDefault();
	  var fieldName = $(e.target).data('field');
	  var parent = $(e.target).closest('div');
	  var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);

	  if (!isNaN(currentVal) && currentVal > 0) {
		parent.find('input[name=' + fieldName + ']').val(currentVal - 1);
	  } else {
		parent.find('input[name=' + fieldName + ']').val(0);
	  }
	}

	$('.input-group').on('click', '.button-plus', function(e) {
	  incrementValue(e);
	});

	$('.input-group').on('click', '.button-minus', function(e) {
	  decrementValue(e);
	});

}); 


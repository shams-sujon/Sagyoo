(function($){
	$(document).ready(function() {	

		// Scroll to Top
		jQuery('.scrolltotop').click(function(){
			jQuery('html').animate({'scrollTop' : '0px'}, 400);
			return false;
		});
		
		jQuery(window).scroll(function(){
			var upto = jQuery(window).scrollTop();
			if(upto > 500) {
				jQuery('.scrolltotop').fadeIn();
			} else {
				jQuery('.scrolltotop').fadeOut();
			}
		});

		$('.products-slider').owlCarousel({
           	loop: true,
           	margin: 20,
           	center: false,
           	nav: false,
           	dots: true,
           	autoplay:false,
           	autoplayTimeout:2000,
           	responsiveClass: true,
           	responsiveRefreshRate: true,
           	responsive : {
           		0 : {
           			items: 1
           		},
           		768 : {
           			items: 1
           		},
           		960 : {
           			items: 1
           		},
           		1200 : {
           			items: 1
           		},
           		1920 : {
           			items: 1
           		}
           	}
           });

		var owl = $('.products-slider');
		owl.owlCarousel();
		// Go to the next item
		$('.owl-next').click(function() {
		    owl.trigger('next.owl.carousel');
		})
		// Go to the previous item
		$('.owl-prev').click(function() {
		    // With optional speed parameter
		    // Parameters has to be in square bracket '[]'
		    owl.trigger('prev.owl.carousel', [300]);
		});

		$("#ham").click (function (){
			$(".left-wrapper").animate({
				"left":"0",
			})
		});

		$("#cross").click (function (){
			$(".left-wrapper").animate({
				"left":"-100%",
			})
		});


		$("#tigger-nav").click (function (){
			$(".left-wrapper").hide();
			$(".main .col-lg-10").toggleClass("col-lg-10 col-lg-12")
			$(".sm-right-wrapper").show();
			$(".pc-wrapper").addClass("marle")
		});

		$("#sm-logo").click (function (){
			$(".left-wrapper").show();
			$(".main .col-lg-12").toggleClass("col-lg-12 col-lg-10");
			$(".sm-right-wrapper").hide();
			$(".pc-wrapper").removeClass("marle")
		});


		$(".left-link ul li#ob-one a").mouseenter (function (){
			$("img#ob1").attr({
				"src":"img/ob.png"
			});
		});

		$(".left-link ul li#ob-one a").mouseleave (function (){
			$("img#ob1").attr({
				"src":"img/ob1.png"
			});
		});


		$(".left-link ul li#ob-two a").mouseenter (function (){
			$("img#ob2").attr({
				"src":"img/ob.png"
			});
		});

		$(".left-link ul li#ob-two a").mouseleave (function (){
			$("img#ob2").attr({
				"src":"img/ob1.png"
			});
		});

		$(".left-link ul li#ob-three a").mouseenter (function (){
			$("img#ob3").attr({
				"src":"img/ob.png"
			});
		});

		$(".left-link ul li#ob-three a").mouseleave (function (){
			$("img#ob3").attr({
				"src":"img/ob1.png"
			});
		});

		$(".left-link ul li#ob-four a").mouseenter (function (){
			$("img#ob4").attr({
				"src":"img/ob.png"
			});
		});

		$(".left-link ul li#ob-four a").mouseleave (function (){
			$("img#ob4").attr({
				"src":"img/ob1.png"
			});
		});






		$("#oneli").mouseenter (function (){
			$("#oneimgs").attr({
				"src":"img/object.png"
			});
		});

		$("#oneli").mouseleave (function (){
			$("#oneimgs").attr({
				"src":"img/ob1.png"
			});
		});

		
		$("#twoli").mouseenter (function (){
			$("#twoimgs").attr({
				"src":"img/object.png"
			});
		});

		$("#twoli").mouseleave (function (){
			$("#twoimgs").attr({
				"src":"img/ob1.png"
			});
		});

		$("#threeli").mouseenter (function (){
			$("#threeimgs").attr({
				"src":"img/object.png"
			});
		});

		$("#threeli").mouseleave (function (){
			$("#threeimgs").attr({
				"src":"img/ob1.png"
			});
		});

		$("#fourli").mouseenter (function (){
			$("#fourimgs").attr({
				"src":"img/object.png"
			});
		});

		$("#fourli").mouseleave (function (){
			$("#fourimgs").attr({
				"src":"img/ob1.png"
			});
		});


		

				
		
		
		
		
		
		
		
		
	});
})(jQuery);
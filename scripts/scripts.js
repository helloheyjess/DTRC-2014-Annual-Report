//Initiate WOW plugin for animations on scroll
new WOW().init();

// jQuery
$(function(){
	//Fittext for Responsive Headlines
	$('h2.responsiveHeadline').fitText(0.75);
	$('h3.responsiveHeadline').fitText(1.3, {maxFontSize: '50px'});

	//Menu
		//Open Menu
		$('.menuBars').on('click', function() {
			$('.nav').fadeIn();
		});
		//Close menu when links are clicked
		$('.nav a').on('click', function() {
			$('.nav').fadeOut();
		});

	//Open video overlay and play video when play button is clicked
	$('.videoWrapper').on('click', function() {
		$('.videoOverlay').fadeIn();
		$('video#overlayVid')[0].play();
	});

	// Open full site credits
	$('.clickCredits').on('click', function() {
		$('.fullCredits').fadeIn();
	});

	// Closing Overlays
	$('.close').on('click', function() {
		// Close Menu
		$('.nav').fadeOut();
		// Close Video Overlay (and stop playing)
		$('.videoOverlay').fadeOut();
		$('video#overlayVid')[0].pause();
		// Close Site Credits
		$('.fullCredits').fadeOut();
	});

	// Flickity Galleries
		// OTM Gallery
		var $otmgallery = $('.gallery').flickity({
			//options
			cellSelector: 'img',
			imagesLoaded: true,
			percentPosition: false,
			wrapAround: true,
			freeScroll: true,
			autoPlay: false,
			pageDots: false
		});
		//OTM Gallery Captions
		var $otmcaption = $('.members .caption');
		var flkty = $otmgallery.data('flickity');

		$otmgallery.on('cellSelect', function() {
			$otmcaption.text(flkty.selectedElement.alt)
		});

		//Donor Event Gallery
		var $donorgallery = $('.donorGallery').flickity({
			//options
			cellSelector: 'img',
			imagesLoaded: true,
			percentPosition: false,
			wrapAround: true,
			freeScroll: true,
			autoPlay: false,
			pageDots: false
		});
		// Donor Gallery Captions
		var $donorcaption = $('.supporters .caption');
		var flkty1 = $donorgallery.data('flickity');

		$donorgallery.on('cellSelect', function() {
			$donorcaption.text(flkty1.selectedElement.alt)
		});

	// Smooth Scroll
	$('a').smoothScroll({
		speed: 800
	});

	// Member Spotlight Interactivity (responsive)
	$(window).on("load resize", function() {
	    var width = $(window).width();
	    // Test if window is more than 940px
	    if (width > 940) {
	        // Toggle feature stories below images
	        //Left
	        $('.leftFeature').on('click', function() {
	        	$('#right').slideUp();
	        	$('#left').slideToggle();
	        });
	        //Right
	        $('.rightFeature').on('click', function() {
	        	$('#left').slideUp();
	        	$('#right').slideToggle();
	        });
	    };

	    //Test if window is less than 940px
	    if (width < 940) {
	    	//Move left feature story below image and display block both features
	    	$('#left').insertAfter('.leftFeature').css('display', 'block');
	    	$('#right').css('display', 'block');
	    } else {
	    	//Remove left feature story
	    	$('#left, #right').css('display', 'none');
	    };
	});
});



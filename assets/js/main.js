/*
	Retrospect by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/

(function($) {

	skel
		.breakpoints({
			xlarge: '(max-width: 1680px)',
			large: '(max-width: 1280px)',
			medium: '(max-width: 980px)',
			small: '(max-width: 736px)',
			xsmall: '(max-width: 480px)'
		});

	$(function() {

		var	$window = $(window),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 100);
			});
			

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

		// Nav.
			$('#nav')
				.append('<a href="#nav" class="close"></a>')
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'right'
				});

		// Scroll animation
		$('a[href*=\\#]').on('click', function(e){
        e.preventDefault();
	        $('html, body').animate({
	            scrollTop : $(this.hash).offset().top
	        }, 500);
	    });

		// Set up buttons
		document.getElementById("extra_education_button").addEventListener("click", toggleExtraEducation);
		document.getElementById("extra_work_button").addEventListener("click", toggleExtraWork);

		function toggleExtraEducation(){
			divDisplay = document.getElementById("extra_education").style.display;
			$('#extra_education').slideToggle();

		}

		function toggleExtraWork(){
			divDisplay = document.getElementById("extra_work").style.display;
			$('#extra_work').slideToggle();

		}

		// Set a variable for our button element that stick and scrolls up.
		const scrollToTopButton = document.getElementById('js-top');
		const scrollToTop = () => {
		  // Let's set a variable for the number of pixels we are from the top of the document.
		  const c = document.documentElement.scrollTop || document.body.scrollTop;
		   
		  // If that number is greater than 0, we'll scroll back to 0, or the top of the document.
		  // We'll also animate that scroll with requestAnimationFrame:
		  // https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
		  if (c > 0) {
		    window.requestAnimationFrame(scrollToTop);
		    // ScrollTo takes an x and a y coordinate.
		    // Increase the '10' value to get a smoother/slower scroll!
		    window.scrollTo(0, c - c / 10);
		  }
		};


	});

})(jQuery);
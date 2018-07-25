;(function () {

	'use strict';



	// iPad and iPod detection
	var isiPad = function(){
		return (navigator.platform.indexOf("iPad") != -1);
	};

	var isiPhone = function(){
	    return (
			(navigator.platform.indexOf("iPhone") != -1) ||
			(navigator.platform.indexOf("iPod") != -1)
	    );
	};


	// Go to next section
	var gotToNextSection = function(){
		var el = $('.fh5co-learn-more'),
			w = el.width(),
			divide = -w/2;
		el.css('margin-left', divide);
	};

	// Loading page
	var loaderPage = function() {
		$(".fh5co-loader").fadeOut("slow");
	};



	// Scroll Next
	var ScrollNext = function() {
		$('body').on('click', '.scroll-btn', function(e){
			e.preventDefault();

			$('html, body').animate({
				scrollTop: $( $(this).closest('[data-next="yes"]').next()).offset().top
			}, 1000, 'easeInOutExpo');
			return false;
		});
	};



	var styleToggle = function() {


		if ( $.cookie('styleCookie') !== undefined ) {
			if ( $.cookie('styleCookie') === 'style-light.css'  ) {

				$('.js-style-toggle').attr('data-style', 'light');
			} else  {
				$('.js-style-toggle').attr('data-style', 'default');
			}
			$('#theme-switch').attr('href', 'css/' + $.cookie('styleCookie'));
		}


		if ( $.cookie('btnActive') !== undefined ) $('.js-style-toggle').addClass($.cookie('btnActive'));




		// $('.js-style-toggle').on('click', function(){
		$('body').on('click','.js-style-toggle',function(event){



			var data = $('.js-style-toggle').attr('data-style'), style = '', $this = $(this);

			if ( data === 'default') {

				// switch to light
				style = 'style-light.css';
				$this.attr('data-style', 'light');

				// add class active to button
				$.cookie('btnActive', 'active', { expires: 365, path: '/'});
				$this.addClass($.cookie('btnActive'));


			} else {
				// switch to dark color
				style = 'style.css';
				$this.attr('data-style', 'default');

				// remove class active from button
				$.removeCookie('btnActive', { path: '/' });
				$(this).removeClass('active');

				// switch to style
				$.cookie('styleCookie', style, { expires: 365, path: '/'});

			}

			// switch to style
			$.cookie('styleCookie', style, { expires: 365, path: '/'});

			// apply the new style
			$('#theme-switch').attr('href', 'css/' + $.cookie('styleCookie'));


			event.preventDefault();

		});

	}

	// Animations

	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated') ) {

				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							el.addClass('fadeInUp animated');
							el.removeClass('item-animate');
						},  k * 200, 'easeInOutExpo' );
					});

				}, 100);

			}

		} , { offset: '95%' } );
	};


	var moreProjectSlider = function() {
		$('.flexslider').flexslider({
			animation: "slide",
			animationLoop: false,
			itemWidth: 310,
			itemMargin: 20,
			controlNav: false
		});
	}


	// Document on load.
	$(function(){

		gotToNextSection();
		loaderPage();
		ScrollNext();
		moreProjectSlider();
		styleToggle();

		// Animate
		contentWayPoint();

	});


}());


$(document).ready(function() {

	$("body").css("display", "none");

    $("body").fadeIn(2000);
    $("body").stop().animate({
    	opacity: 1
    });


	$("a.transition").click(function(event){

		event.preventDefault();
		linkLocation = this.href;
		$("body").fadeOut(1000, redirectPage);

	});

	function redirectPage() {
		window.location = linkLocation;
	}

	$('.chart').easyPieChart({
		easing: 'easeOutBounce',
		onStep: function(from, to, percent) {
			$(this.el).find('.percent').text(Math.round(percent));
		}
	});

// var duration = 1500,
//     transition = 200,
//     percent = 90,
//     width = 200,
//     height = 200;
//
// var dataset = {
//             lower: calcPercent(0),
//             upper: calcPercent(percent)
//         },
//         radius = Math.min(width, height) / 3,
//         pie = d3.layout.pie().sort(null),
//         format = d3.format(".0%");
//
// var arc = d3.svg.arc()
//         .innerRadius(radius * .8)
//         .outerRadius(radius);
//
// var svg = d3.select("#test").append("svg")
//         .attr("width", width)
//         .attr("height", height)
//         .append("g")
//         .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
//
// var path = svg.selectAll("path")
//                 .data(pie(dataset.lower))
//                 .enter().append("path")
//                 .attr("class", function (d, i) {
//                     return "color" + i
//                 })
//                 .attr("d", arc)
//                 .each(function (d) {
//                     this._current = d;
//                 });
//
// var text = svg.append("text")
//         .attr("text-anchor", "middle")
//         .attr("dy", ".3em");
//
// var progress = 0;
//
// var timeout = setTimeout(function () {
//     clearTimeout(timeout);
//     path = path.data(pie(dataset.upper));
//     path.transition().duration(duration).attrTween("d", function (a) {
//         var i = d3.interpolate(this._current, a);
//         var i2 = d3.interpolate(progress, percent)
//         this._current = i(0);
//         return function (t) {
//             text.text(format(i2(t) / 100));
//             return arc(i(t));
//         };
//     });
// }, 200);
//
// function calcPercent(percent) {
//     return [percent, 100 - percent];
// };
});

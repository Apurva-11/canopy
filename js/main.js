var emailCard = "<div id='emailList' class='animated fadeIn card-panel white'><span class='black-text'><div class='row'><i id='close' class='material-icons'>close</i><div class='input-field col s12'><input id='email' type='email' class='validate'><label for='email' data-error='wrong' data-success='right'>email</label><button class=' submitBtn btn-floating-absolute yellow' type='submit' name='action'><i class='material-icons'>send</i></button></div></div></span></div>";

var signUp = "Be the first to know when Canopy is ready to launch! We'll never send you spam, promise.";


$('.switch').on('click', '#close', function(){
	$('#emailList').addClass('fadeOut');
    $('.switch').html(signUp);
});
$('#showSign').on('click', function(){
	$('.switch').html(emailCard);

});

$("switch").addClass("fadeIn").removeClass("opacity-0");
/* ================================= */
/* :::::::::: 1. Loading ::::::::::: */
/* ================================= */

$(window).load(function() {
	"use strict";

	$('.globload').fadeOut("slow")


	setTimeout(function() {

		$(".logoImg").addClass("fadeIn").removeClass("opacity-0");

	}, 600);

	setTimeout(function() {

		$(".ws").addClass("fadeIn").removeClass("opacity-0");

	}, 800);
	setTimeout(function() {

		$("#elevate").addClass("fadeIn").removeClass("opacity-0");

	}, 1000);


	setTimeout(function() {

		$(".switch").addClass("fadeIn").removeClass("opacity-0");

	},
	1200);
	setTimeout(function() {

		$("#showSign").addClass("fadeIn").removeClass("opacity-0");

	}, 1400);


});


/* ================================= */
/* ::::::::: 2. Countdown :::::::::: */
/* ================================= */

			$('#counter').countdown('2019/11/16 12:00:00').on('update.countdown', function(event) {
				var $this = $(this).html(event.strftime(''
					+ '<div class="counter-container"><strong>Launching in...</strong><div class="counter-box first"><div class="number">%-D</div><span>Day%!d<span></div>'
					+ '<div class="counter-box second"><div class="number">%H</div><span>Hours</span></div>'
					+ '<div class="counter-box third"><div class="number">%M</div><span>Minutes</span></div>'
					+ '<div class="counter-box last"><div class="number">%S</div><span>Seconds</span></div></div>'
				));
			});
//

/* ================================= */
/* :::::::::: 3. Carousel :::::::::: */
/* ================================= */

$('.carousel').carousel({
	  interval: 5000,
	  pause: "hover"
})

/* ================================= */
/* :::::::: 4. Multiscroll ::::::::: */
/* ================================= */

// $(document).ready(function() {
// 	"use strict";
//             $('#myContainer').multiscroll({
//             	sectionsColor: ['#2B2D35', '#F1E7C0', '#7BAABE'],
//             	anchors: ['first', 'second', 'third'],
//             	menu: '#menu',
//             	navigation: true,
//             	navigationTooltips: ['Home', 'About', 'Contact'],
//             	loopBottom: true,
//             	loopTop: true
//             });
//
//         });

/* ================================= */
/* :::::::: 5. Notify me ::::::::: */
/* ================================= */
jQuery(document).ready(function() {
        "use strict";
            $("#notifyMe").notifyMe();
});


/* ================================= */
/* :::::::: 6. Placeholder ::::::::: */
/* ================================= */
    $('input,textarea').focus(function(){
       $(this).data('placeholder',$(this).attr('placeholder'))
       $(this).attr('placeholder','');
    });
    $('input,textarea').blur(function(){
       $(this).attr('placeholder',$(this).data('placeholder'));
    });

	$('input, textarea').placeholder();



/* ================================= */
/* :::::::: 7. Google Map ::::::::: */
/* ================================= */

			// Map Coordination
			var latlng = new google.maps.LatLng(33.8486730,-84.3733130);

			// Map Options
			var myOptions = {
				zoom: 15,
				center: latlng,
				mapTypeId: google.maps.MapTypeId.ROADMAP,
				disableDefaultUI: true,
				scrollwheel: false,
				// Google Map Color Styles
				styles: [

					{	stylers:[			{hue:'#E0E400'},			{invert_lightness:true},			{saturation:-20},			{lightness:20},			{gamma:0}	]	},
					{		featureType:'water',		elementType:'geometry',		stylers:[			{color:'#333333'},]	},
					{'featureType':'landscape','stylers':[{'color':'#2B2D35'}]},]
				};

            var map = new google.maps.Map(document.getElementById('map_canvas'), myOptions);

			// Marker Image
			var image = 'img/pin.png';


		  	// -------------------------- First Marker

		  	// Marker Coordination
			var myLatlng = new google.maps.LatLng(533.8486730,-84.3733130);

			var marker = new google.maps.Marker({

				  position: myLatlng,
				  map: map,
				  title: 'Hello!',
				  icon: image
			  });


$(document).ready(function() {
			$("#showMap").click(function(){
                $("#map_container").removeClass("index-999 invisible").addClass("animated fadeIn visible index999");
				$("#closeMap").removeClass("index-999 invisible").addClass("visible index999");
            });
			$("#closeMap").click(function(){
				$(this).removeClass("visible index999").addClass("invisible index-999");
                $("#map_container").removeClass("fadeIn visible index999").addClass("animated fadeOut index-999 invisible");
            });
});

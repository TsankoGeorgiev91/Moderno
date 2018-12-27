$( document ).ready( function() {

		// Menu

	var $canvasBtn = $( '#canvas-btn' );
	var $closeBtn = $( '#close-btn' )
	var $canvasMenu = $( '#main-nav' );

	$canvasBtn.on( 'click', function() {
		$canvasMenu.addClass( 'open' );
	});



	$closeBtn.on( 'click', function() {
		$canvasMenu.removeClass( 'open' );
	});
/*	$canvasBtn.on( 'click', function() {
  		$canvasMenu.animate({ "right": "+=1585px" }, "fast" );
	});

	$closeBtn.on( 'click', function() {
  		$canvasMenu.animate({ "right": "-=1585px" }, "slow" );
	});*/

		// Stories

	var outterBox = $('.outter-box');
    var innerBox = $('.inner-box');
    var close = $('.close');

    outterBox.on('click', function() {
      innerBox.addClass('open');
    });

    close.on('click', function() {
      innerBox.removeClass('open')
    });

});




$(document).ready(function() {
    $('select').material_select();
    $('.collapsible').collapsible();
    $('ul.tabs').tabs(/*{ 'swipeable': true }*/);
  
	
	$('.search-toggle').on('click', function(event){
		event.preventDefault();
		$( '.search-block' ).slideToggle("slide	");
		$('.search-toggle').toggleClass('active');
	});

	$('.cart-toggle').on('click', function(event){
		event.preventDefault();
		$( '.cart-block' ).slideToggle("slide");
		$('.cart-toggle').toggleClass('active');
	});

	$('.profile-toggle').on('click', function(event){
		event.preventDefault();
		$( '.profile-block' ).slideToggle("slide");
		$('.profile-toggle').toggleClass('active');
	});

});
// (function($){

//   $(document).on('ready', function () {
//     $('select').material_select();
//   });

//   $(function(){



//     // $('.button-collapse').sideNav({
//     //   menuWidth: 600,
//     //   edge: 'right',
//     //   closeOnClick: true,
//     //   draggable: true
//     // });
//     // $('ul.tabs').tabs();
//     // $('.collapsible').collapsible();
//     // $('select').material_select();
//     // $('.materialboxed').materialbox();
//     // $('.modal').modal();
//     // $('select').material_select();
//     // $('.parallax').parallax();

//   });

// });

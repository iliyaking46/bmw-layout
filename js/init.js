



$(document).ready(function() {
    $('select').material_select();
    $('.collapsible').collapsible();
    $('ul.tabs').tabs(/*{ 'swipeable': true }*/);
  
	
	$('.search-toogle').on('click', function(event){
		event.preventDefault();
		$( '.search-field' ).slideToggle("slide	");
		$('.search-toogle').toggleClass('active');
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

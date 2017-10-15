
$( document ).ready(function() {
      var slider = document.getElementById('bmw-slider');
      var inputNumber1 = document.getElementById('input-number1');
      var inputNumber2 = document.getElementById('input-number2');
      noUiSlider.create(slider, {
        start: [ 0, 1000 ],
        connect: true,
        step: 1,
        range: {
          'min': 0,
          'max': 1000
        }
      });

      slider.noUiSlider.on('update', function( values, handle ) {

        var value = values[handle];

        if ( handle ) {
          inputNumber2.value = Math.round(value);
        } else {
          inputNumber1.value = Math.round(value);
        }
      });

      inputNumber1.addEventListener('change', function(){
        slider.noUiSlider.set([null, this.value]);
      });
      inputNumber2.addEventListener('change', function(){
        slider.noUiSlider.set([null, this.value]);
      });

    });





(function($){

  $(document).on('materialize', function () {
    $('select').material_select();
  });

  $(function(){



    // $('.button-collapse').sideNav({
    //   menuWidth: 600,
    //   edge: 'right',
    //   closeOnClick: true,
    //   draggable: true
    // });
    // $('ul.tabs').tabs();
    // $('.collapsible').collapsible();
    // $('select').material_select();
    // $('.materialboxed').materialbox();
    // $('.modal').modal();
    // $('select').material_select();
    // $('.parallax').parallax();

  });

});

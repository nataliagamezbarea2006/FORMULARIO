$(document).ready(function(){
    $('#formulario-pago').submit(function(event){
      event.preventDefault();
      SendFormGoogleSheets();
    });
  });

  function SendFormGoogleSheets() {
    $.ajax({
      url: 'https://script.google.com/macros/s/AKfycbzb_Y3m6jIUCEoTl4ofdi8FjddrobkW26bGinKK5lhEVBj-Wnbju8AOzbfg8zPilVvxQQ/exec',
      type: 'post',
      data: $('#formulario-pago').serializeArray(),
      succeAss: function(){
        alert("Registro exitoso")
      },
      error: function(){
        alert("Error en el Registro :(")
      }
    });
  }
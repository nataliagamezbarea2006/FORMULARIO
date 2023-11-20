$(document).ready(function(){
    $('#formulario-pago').submit(function(event){
      event.preventDefault();
      SendFormGoogleSheets();
    });
  });

  function SendFormGoogleSheets() {
    $.ajax({
      url: 'https://script.google.com/macros/s/AKfycbxRPc0QevvIPaXdorzDD8_z6laBDQ1r90LdZts9V61A8iwX-oYFPRVg-YlosIEpgYfNsA/exec',
      type: 'post',
      data: $('#formulario-pago').serializeArray(),
      success: function(){
        alert("Registro exitoso")
      },
      error: function(){
        alert("Error en el Registro :(")
      }
    });
  }
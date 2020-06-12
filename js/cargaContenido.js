$(document).ready(function() {

  var contenedor = $('#contenedor');


  function logic() {
    $.ajax({
      type: "get",
      //cgecar la ruta
      url: "../php/mostrarContenido.php",
      success: function(respuesta) {
        var js = JSON.parse(respuesta);
        console.log(js);
        var tamarreglo = js.length;
        console.log(tamarreglo);

        for (x = 0; x < tamarreglo; x++) {
          // var id_vod = js[x].id;
          var nombre = js[x].nombre;
          var portada = js[x].portada;

          var divItem = $('<div></div>').attr('class', 'grid-item').attr('href', '#');
          var imagen = $('<img></img>').attr('src', portada).attr('alt', nombre);

          contenedor.append(divItem);
          divItem.append(imagen);
        }
      }
    });
  }

  logic();

});
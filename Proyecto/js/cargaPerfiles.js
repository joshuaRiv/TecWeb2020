$(document).ready(function() {

  var contenedor = $('#contenedor');


  function logic() {
    $.ajax({
      type: "get",
      //cgecar la ruta
      url: "../php/obtenPerfiles.php",
      success: function(respuesta) {
        var js = JSON.parse(respuesta);
        console.log(js);
        var tamarreglo = js.length;
        console.log(tamarreglo);

        for (x = 0; x < tamarreglo; x++) {
          // var id_vod = js[x].id;
          var nombre = js[x].nombre;

          var divItem = $('<div></div>').attr('class', 'grid-item rounded-circle');
          var boton = $('<button></button>').attr('class', 'rounded-circle btnPerfil').attr('onclick', 'location.href="principal.html";')
          var imagen = $('<img></img>').attr('src', '../img/user.png').attr('alt', nombre).attr('class', 'rounded-circle');
          var salto1 = $('<br>');
          var salto2 = $('<br>');
          var alias = $('<h4></h4>').attr('class', 'text-center').text(nombre);

          contenedor.append(divItem);
          divItem.append(boton);
          boton.append(imagen);
          divItem.append(salto1);
          divItem.append(salto2);
          divItem.append(alias);
        }
      }
    });
  }

  logic();

});
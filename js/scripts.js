// ajax Menú principal
$(document).ready(function() {
  var contenedor = $('#content');

  /*PARA QUE CUANDO EL USUARIO QUIERA VER UN TORNEO*/
  var buscar = $('#buscar');

  buscar.click(function() {
    //alert("tabla torneos");
    var espera = 200;
    $.ajax({
      url: "../Buscar/buscar.html",
      beforeSend: function() {
        contenedor.text('Cargando...');
      },
      success: function(datos) {
        setTimeout(function() {
          contenedor.html(datos);
        }, espera);
      }
    });
  });


  var home = $('#home');

  home.click(function() {
    //alert("tabla torneos");
    var espera = 200;
    $.ajax({
      url: "../admiTorneos/tablaTorneos.html",
      beforeSend: function() {
        contenedor.text('Cargando...');
      },
      success: function(datos) {
        setTimeout(function() {
          contenedor.html(datos);
        }, espera);
      }
    });
  });
});
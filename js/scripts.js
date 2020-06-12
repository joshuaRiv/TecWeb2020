// ajax Menú principal
$(document).ready(function() {
  var contenedor = $('#content');

  /*PARA QUE CUANDO EL USUARIO QUIERA VER UN TORNEO*/
  var buscar = $('#buscar');

  buscar.click(function() {
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
      url: "../Home/home.html",
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

  var series = $('#series');

  series.click(function() {
    //alert("tabla torneos");
    var espera = 200;
    $.ajax({
      url: "../Peliculas-series/serie.html",
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

  var pelis = $('#pelis');

  pelis.click(function() {
    //alert("tabla torneos");
    var espera = 200;
    $.ajax({
      url: "../Peliculas-series/pelicula.html",
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

  var config = $('#config');

  config.click(function() {
    alert("tabla torneos");
    var espera = 200;
    $.ajax({
      url: "../config/configuracion.html",
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

  function inicio() {
    $.ajax({
      url: "../Home/home.html",
      beforeSend: function() {
        contenedor.text('Cargando...');
      },
      success: function(datos) {
        setTimeout(function() {
          contenedor.html(datos);
        });
      }
    });
  }
  inicio();

});
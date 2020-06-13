$(document).ready(function() {

  var recientes = $('#recientes');
  var accion = $('#action');
  var drama = $('#drama');
  var comedia = $('#comedia');
  var terror = $('#terror');
  var animadas = $('#animadas');
  var cienciaF = $('#cienciaF');


  function principal() {
    $.ajax({
      type: "get",
      //cgecar la ruta
      url: "../php/aleatorio.php",
      success: function(respuesta) {
        var js = JSON.parse(respuesta);
        console.log(js);
        var tamarreglo = js.length;
        console.log(tamarreglo);

        for (x = 0; x < tamarreglo; x++) {
          // var id_vod = js[x].id;
          var nombre = js[x].nombre;
          var portada = js[x].portada;

          var divItem = $('<div></div>').attr('class', 'peliculaBig');
          var link = $('<a></a>').attr('href', '#');
          var imagen = $('<img></img>').attr('src', portada).attr('alt', nombre);

          recientes.append(divItem);
          divItem.append(link);
          link.append(imagen);
        }
      }
    });
  }

  function accionf() {
    $.ajax({
      type: "get",
      //cgecar la ruta
      url: "../php/accion.php",
      success: function(respuesta) {
        var js = JSON.parse(respuesta);
        console.log(js);
        var tamarreglo = js.length;
        console.log(tamarreglo);

        for (x = 0; x < tamarreglo; x++) {
          // var id_vod = js[x].id;
          var nombre = js[x].nombre;
          var portada = js[x].portada;

          var divItem = $('<div></div>').attr('class', 'pelicula');
          var link = $('<a></a>').attr('href', '#');
          var imagen = $('<img></img>').attr('src', portada).attr('alt', nombre);

          accion.append(divItem);
          divItem.append(link);
          link.append(imagen);
        }
      }
    });
  }

  function dramaf() {
    $.ajax({
      type: "get",
      //cgecar la ruta
      url: "../php/drama.php",
      success: function(respuesta) {
        var js = JSON.parse(respuesta);
        console.log(js);
        var tamarreglo = js.length;
        console.log(tamarreglo);

        for (x = 0; x < tamarreglo; x++) {
          // var id_vod = js[x].id;
          var nombre = js[x].nombre;
          var portada = js[x].portada;

          var divItem = $('<div></div>').attr('class', 'pelicula');
          var link = $('<a></a>').attr('href', '#');
          var imagen = $('<img></img>').attr('src', portada).attr('alt', nombre);

          drama.append(divItem);
          divItem.append(link);
          link.append(imagen);
        }
      }
    });
  }

  function comediaf() {
    $.ajax({
      type: "get",
      //cgecar la ruta
      url: "../php/comedia.php",
      success: function(respuesta) {
        var js = JSON.parse(respuesta);
        console.log(js);
        var tamarreglo = js.length;
        console.log(tamarreglo);

        for (x = 0; x < tamarreglo; x++) {
          // var id_vod = js[x].id;
          var nombre = js[x].nombre;
          var portada = js[x].portada;

          var divItem = $('<div></div>').attr('class', 'pelicula');
          var link = $('<a></a>').attr('href', '#');
          var imagen = $('<img></img>').attr('src', portada).attr('alt', nombre);

          comedia.append(divItem);
          divItem.append(link);
          link.append(imagen);
        }
      }
    });
  }

  function terrorf() {
    $.ajax({
      type: "get",
      //cgecar la ruta
      url: "../php/terror.php",
      success: function(respuesta) {
        var js = JSON.parse(respuesta);
        console.log(js);
        var tamarreglo = js.length;
        console.log(tamarreglo);

        for (x = 0; x < tamarreglo; x++) {
          // var id_vod = js[x].id;
          var nombre = js[x].nombre;
          var portada = js[x].portada;

          var divItem = $('<div></div>').attr('class', 'pelicula');
          var link = $('<a></a>').attr('href', '#');
          var imagen = $('<img></img>').attr('src', portada).attr('alt', nombre);

          terror.append(divItem);
          divItem.append(link);
          link.append(imagen);
        }
      }
    });
  }

  function animadaf() {
    $.ajax({
      type: "get",
      //cgecar la ruta
      url: "../php/animada.php",
      success: function(respuesta) {
        var js = JSON.parse(respuesta);
        console.log(js);
        var tamarreglo = js.length;
        console.log(tamarreglo);

        for (x = 0; x < tamarreglo; x++) {
          // var id_vod = js[x].id;
          var nombre = js[x].nombre;
          var portada = js[x].portada;

          var divItem = $('<div></div>').attr('class', 'pelicula');
          var link = $('<a></a>').attr('href', '#');
          var imagen = $('<img></img>').attr('src', portada).attr('alt', nombre);

          animadas.append(divItem);
          divItem.append(link);
          link.append(imagen);
        }
      }
    });
  }

  function ficcionf() {
    $.ajax({
      type: "get",
      //cgecar la ruta
      url: "../php/ficcion.php",
      success: function(respuesta) {
        var js = JSON.parse(respuesta);
        console.log(js);
        var tamarreglo = js.length;
        console.log(tamarreglo);

        for (x = 0; x < tamarreglo; x++) {
          // var id_vod = js[x].id;
          var nombre = js[x].nombre;
          var portada = js[x].portada;

          var divItem = $('<div></div>').attr('class', 'pelicula');
          var link = $('<a></a>').attr('href', '#');
          var imagen = $('<img></img>').attr('src', portada).attr('alt', nombre);

          cienciaF.append(divItem);
          divItem.append(link);
          link.append(imagen);
        }
      }
    });
  }

  principal();
  accionf();
  dramaf();
  comediaf();
  terrorf();
  animadaf();
  ficcionf();

});
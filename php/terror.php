<?php 
$mbd = new PDO('mysql:host=localhost;dbname=neflis', 'root', 'EISA1997');
  $mbd->exec("SET NAMES 'utf8';");

  $query ="SELECT id_categoria, nombre , portada FROM peliculas WHERE id_categoria = 4 UNION SELECT id_categoria, nombre , portada FROM programas WHERE id_categoria = 4";
  $stmt = $mbd->prepare($query);
  $stmt->execute();
      
  $res=array();
  while ($row=$stmt->fetch(PDO::FETCH_OBJ)){
    $res[]=array(
      "nombre"=> $row->nombre,
      "portada"=> $row->portada,
    );
  }
  echo json_encode($res);

?>
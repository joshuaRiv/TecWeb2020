<?php 
$mbd = new PDO('mysql:host=localhost;dbname=neflis', 'root', 'EISA1997');
  $mbd->exec("SET NAMES 'utf8';");

  $query ="SELECT nombre , portada FROM peliculas UNION SELECT nombre , portada FROM programas LIMIT 3";
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
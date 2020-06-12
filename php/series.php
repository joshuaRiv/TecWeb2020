<?php 
  $mbd = new PDO('mysql:host=localhost;dbname=neflis', 'root', 'xamppadampa');
  $mbd->exec("SET NAMES 'utf8';");

  $query ="SELECT * FROM `programas` ORDER BY `programas`.`nombre` ASC";
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
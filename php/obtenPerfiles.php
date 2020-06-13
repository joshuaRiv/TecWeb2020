<?php 
  session_start();
  $correo = $_SESSION['user'];

  $mbd = new PDO('mysql:host=localhost;dbname=neflis', 'root', 'xamppadampa');
  $mbd->exec("SET NAMES 'utf8';");



  $query ="SELECT id_usuario from usuario where correo='$correo'";
  $stmt = $mbd->prepare($query);
  $stmt->execute();
      
  $res=array();
  while ($row=$stmt->fetch(PDO::FETCH_OBJ)){
    $res[]=array(
      "id"=> $row->id_usuario,
    );
  }

  $query ="SELECT nombre from perfiles where perfiles.id_usuario='$res[0]'";
  $stmt = $mbd->prepare($query);
  $stmt->execute();

  $ras=array();
  while ($row=$stmt->fetch(PDO::FETCH_OBJ)){
    $ras[]=array(
      "nombre"=> $row->nombre,
    );
  }

  echo json_encode($ras);

?>
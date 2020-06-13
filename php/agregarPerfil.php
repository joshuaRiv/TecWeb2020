<?php 
  session_start();
  $correo = $_SESSION['user'];
  $nombrePerfil = $_POST["nombre"];

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

  $query ="INSERT INTO `perfiles`(`id_perfil`, `id_usuario`, `nombre`) VALUES ('',$res[0], $nombrePerfil)";
  $stmt = $mbd->prepare($query);
  $stmt->execute();

  $ras=array();
  while ($row=$stmt->fetch(PDO::FETCH_OBJ)){
    $ras[]=array(
      "nombre"=> $row->nombre,
    );
  }

?>
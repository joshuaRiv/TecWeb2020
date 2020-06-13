<?php 
  session_start();
  $correo = $_SESSION['user'];

  $mbd = new PDO('mysql:host=localhost;dbname=neflis', 'root', 'EISA1997');
  $mbd->exec("SET NAMES 'utf8';");



  $query ="SELECT id_usuario from usuario where correo='$correo'";
  $stmt = $mbd->prepare($query);
  $stmt->execute();
      
  while($row = $stmt->fetch(PDO::FETCH_ASSOC)){
            $res = $row['id_usuario'];
            }

  $query ="SELECT nombre from perfiles where id_usuario='$res'";
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
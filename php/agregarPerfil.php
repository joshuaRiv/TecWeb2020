<?php 
  session_start();
  $correo = $_SESSION['user'];
  $nombrePerfil = $_POST["nombre"];

  $mbd = new PDO('mysql:host=localhost;dbname=neflis', 'root', 'EISA1997');
  $mbd->exec("SET NAMES 'utf8';");



  $query ="SELECT id_usuario from usuario where correo='$correo'";
  $stmt = $mbd->prepare($query);
  $stmt->execute();

  while($row = $stmt->fetch(PDO::FETCH_ASSOC)){
            $res = $row['id_usuario'];
            }
      
  $query ="INSERT INTO perfiles(id_perfil, id_usuario, nombre) VALUES ('','$res', '$nombrePerfil')";
  $stmt = $mbd->prepare($query);
  $stmt->execute();

  header('Location: ../Principal/selectProfile.html');


?>
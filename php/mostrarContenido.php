<?php 
	// require_once "conexion.php";

	$mbd = new PDO('mysql:host=localhost;dbname=neflis', 'root', 'xamppadampa');
  $mbd->exec("SET NAMES 'utf8';");

  $query ="SELECT nombre , portada FROM peliculas UNION SELECT nombre , portada FROM programas";
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
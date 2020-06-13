<?php 

	require_once "conexion.php";
	$conexion=conexion();

		
		$nombre=$_POST['nombre'];
		$correo=$_POST['Correo'];
		$pass=$_POST['Contra'];
		$foto=$_POST['foto'];
		

		$propietario=$_POST['propietario'];
		$tarjeta=$_POST['creditcard'];
		$mes=$_POST['mes'];
		$anio=$_POST['anio'];
		$fecha_exp=$mes.'/'.$anio;
		$cvv=$_POST['cvv'];

		if(buscaRepetido($correo,$pass,$conexion)==1){
			echo 2;
		}else{
			$sql="INSERT into usuario (id_usuario ,correo,password,nombre,foto)
				values ('','$correo','$pass','$nombre','$foto')";
			echo $result=mysqli_query($conexion,$sql);
			$id=mysqli_insert_id($conexion);
		}
		
		$sql1="INSERT into tarjeta (id_usuario ,nombre_propietario,num_tarjeta,fecha_exp,cv)
				values ('$id','$propietario','$tarjeta','$fecha_exp','$cvv')";
			echo $result=mysqli_query($conexion,$sql1);


		function buscaRepetido($correo,$pass,$conexion){
			$sql="SELECT * from usuario 
				where correo='$correo' and password='$pass'";
			$result=mysqli_query($conexion,$sql);

			if(mysqli_num_rows($result) > 0){
				return 1;
			}else{
				return 0;
			}
		}

		echo "<script type='text/javascript'>window.location.href = '../index.html';</script>";

 ?>
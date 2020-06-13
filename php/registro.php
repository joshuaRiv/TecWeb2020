<?php 

	require_once "conexion.php";
	$conexion=conexion();

		
		$nombre=$_POST['nombre'];
		$correo=$_POST['correo'];
		$pass=sha1($_POST['password']);
		$foto=$_POST['foto']
		$cc=$_POST['cc']

		if(buscaRepetido($correo,$password,$conexion)==1){
			echo 2;
		}else{
			$sql="INSERT into usuario ( ,correo,password,nombre,foto,cc)
				values (,'$correo','$pass','$nombre','$foto','$cc')";
			echo $result=mysqli_query($conexion,$sql);
		}


		function buscaRepetido($user,$pass,$conexion){
			$sql="SELECT * from usuario 
				where correo='$correo' and password='$pass'";
			$result=mysqli_query($conexion,$sql);

			if(mysqli_num_rows($result) > 0){
				return 1;
				echo '<script type="text/javascript">alert("El correo ya fue registrado");</script>';
			}else{
				return 0;
			}
		}

 ?>
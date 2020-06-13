<?php 

	session_start();
	require_once "conexion.php";

	$conexion=conexion();

		$correo=$_POST['correo'];
		$pass=($_POST['password']);

		$sql="SELECT * from usuario where correo='$correo' and password='$pass'";
		$result=mysqli_query($conexion,$sql);

		if(mysqli_num_rows($result) > 0){
			$_SESSION['user']=$correo;
			$sql1="SELECT nombre from usuario where correo='$correo' and password='$pass'";
			echo "$sql1";
			echo 1;
			header('Location: ../Principal/selectProfile.html');
		}else{
			echo 0;
		}
 ?>
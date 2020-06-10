

<?php 
	function conexion()
	{
		return $conexion=mysqli_connect("localhost","root","EISA1997","neflis");
	}
	if(mysqli_connect())
			{
				echo "Base conecatada";
			}
				else
				{
					echo "Base no conectada";
				}

 ?>
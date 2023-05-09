<?php
	// Conexión con la base de datos

	$conexion = mysqli_connect('localhost', 'root', '', 'base1');

	$vehi = $_POST['vehi'];
	$placa = $_POST['placa'];
	$nombre = $_POST['nombre'];
	$modelo = $_POST['modelo'];
	$marca = $_POST['marca'];
	$año = $_POST['año'];
	$celular = $_POST['celular'];
	$correo = $_POST['correo'];

	// INSERT INTO 

	$sql="INSERT INTO venta (vehi, placa, nombre, modelo, marca, año, celular, correo)
			values ('$vehi', '$placa', '$nombre' , '$modelo' ,'$marca','$año','$celular','$correo')";
			
	echo mysqli_query($conexion, $sql);	
?>
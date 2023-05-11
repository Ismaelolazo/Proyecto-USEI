<?php
	// Conexión con la base de datos

	$conexion = mysqli_connect('localhost', 'root', '', 'USEI');

	$nombreE = $_POST['Nombre'];
	$apellido = $_POST['Apellido'];
	$correo = $_POST['Correo'];
	$celular = $_POST['celular'];

	// INSERT INTO 

	$sql="INSERT INTO estudiantes (vehi, placa, nombre, modelo, marca, año, celular, correo)
			values ('$nombreE', '$apellido', '$correo' , '$celular')";
			
	echo mysqli_query($conexion, $sql);	

	$nombreE = $_POST['Nombre'];
	$apellido = $_POST['Apellido'];
	$correo = $_POST['Correo'];
	$celular = $_POST['celular'];

	// INSERT INTO 

	$sql="INSERT INTO estudiantes (vehi, placa, nombre, modelo, marca, año, celular, correo)
			values ('$nombreE', '$apellido', '$correo' , '$celular')";
			
	echo mysqli_query($conexion, $sql);	
?>

<?php

include_once __DIR__."/../bd/DBConnection.php";
if(!isset($_GET['id_titular'])){
	echo "NO_OK";
	return;
}

$r_rut = $_GET['id_titular'];




// TABLA PERSONA
//$sql = "SELECT * FROM persona ;";  
$sql = "select * from titular_benef where titular = $r_rut ;";

$resultado = DBConnection::consulta($sql);

$persona = array(); 

//While ($row=mysql_fetch_array($resultado)){ 
while ($row = $resultado->fetch(PDO::FETCH_ASSOC) ) { 

  array_push($persona, array('id_titular'=>$row['titular'] ,'id_beneficiario'=>$row['beneficiario'] ,'nombre'=>$row['nombre'] ,'apellido'=>$row['apellido'])); 
}
echo json_encode($persona);


?>



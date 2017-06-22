
<?php

include_once __DIR__."/../bd/DBConnection.php";
if(!isset($_GET['id_persona'])){
	echo "NO_OK";
	return;
}

$r_rut = $_GET['id_persona'];




// TABLA PERSONA
//$sql = "SELECT * FROM persona ;";  
$sql = "SELECT * FROM persona WHERE PERSONA_ID = $r_rut ;";
$resultado = DBConnection::consulta($sql);

$persona = array(); 

//While ($row=mysql_fetch_array($resultado)){ 
while ($row = $resultado->fetch(PDO::FETCH_ASSOC) ) { 

  array_push($persona, array('id_persona'=>$row['PERSONA_ID'] ,'nombre'=>$row['PERSONA_NOMBRE'] , 'apellido'=>$row['PERSONA_APELLIDO'] , 'fnac'=>$row['PERSONA_FECHA_NACIMIENTO'])); 
}
echo json_encode($persona);


?>



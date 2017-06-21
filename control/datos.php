
<?php

include_once __DIR__."/../bd/DBConnection.php";

// TABLA PERSONA
$sql = "SELECT * FROM persona ;";  

$resultado = DBConnection::consulta($sql);
$total = array();
$persona = array();
While ($row=mysql_fetch_array($resultado)){ 
   array_push($persona, array('id_persona'=>$row['PERSONA_ID'] ,'nombre'=>$row['PERSONA_NOMBRE'] , 'apellido'=>$row['PERSONA_APELLIDO'] , 'fnac'=>$row['PERSONA_FECHA_NACIMIENTO'])); 
}
array_push($persona);

echo json_encode($persona);

//array_push($total, $persona); // agrega mas de una consulta en un solo arreglo

//TABLA BENEFICIARIOS
/*$sql = "SELECT * FROM carga_legal WHERE TITULAR_ID = $id_persona ;";  

$resultado = DBConnection::consulta($sql);

$clegal = array();
While ($row=mysql_fetch_array($resultado)){ 
   array_push($clegal, array('titular_id'=>$row['TITULAR_ID'] ,'beneficiario_id'=>$row['BENEFICIARIO_ID'] )); 
}
array_push($total, $clegal);

echo json_encode($total); */

?>

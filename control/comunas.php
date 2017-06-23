
<?php

include_once __DIR__."/../bd/DBConnection.php";
// TABLA PERSONA
//$sql = "SELECT * FROM persona ;";  
$sql = "select * from comuna where comuna_provincia_id = ".$_GET['provincia'].";";

$resultado = DBConnection::consulta($sql);

$provincias = array(); 

//While ($row=mysql_fetch_array($resultado)){ 
while ($row = $resultado->fetch(PDO::FETCH_ASSOC) ) { 

  array_push($provincias, array('comuna_nombre'=>$row['COMUNA_NOMBRE'],'comuna_id'=>$row['COMUNA_ID'])); 
}
echo json_encode($provincias);


?>






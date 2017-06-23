
<?php

include_once __DIR__."/../bd/DBConnection.php";





// TABLA PERSONA
//$sql = "SELECT * FROM persona ;";  
$sql = "select * from region order by region_nombre ASC;";

$resultado = DBConnection::consulta($sql);

$regiones = array(); 

//While ($row=mysql_fetch_array($resultado)){ 
while ($row = $resultado->fetch(PDO::FETCH_ASSOC) ) { 

  array_push($regiones, array('region_nombre'=>$row['REGION_NOMBRE'],'region_id'=>$row['REGION_ID'])); 
}
echo json_encode($regiones);


?>



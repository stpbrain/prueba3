
<?php

include_once __DIR__."/../bd/DBConnection.php";
// TABLA PERSONA
//$sql = "SELECT * FROM persona ;";  
$sql = "select * from provincia where provincia_region_id = ".$_GET['region'].";";

$resultado = DBConnection::consulta($sql);

$provincias = array(); 

//While ($row=mysql_fetch_array($resultado)){ 
while ($row = $resultado->fetch(PDO::FETCH_ASSOC) ) { 

  array_push($provincias, array('provincia_nombre'=>$row['PROVINCIA_NOMBRE'],'provincia_id'=>$row['PROVINCIA_ID'])); 
}
echo json_encode($provincias);


?>



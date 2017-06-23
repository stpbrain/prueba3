<?php

include_once __DIR__."/../bd/DBConnection.php";
// TABLA PERSONA
//$sql = "SELECT * FROM persona ;";  
$sql = "INSERT INTO atencion values (null, ".str_replace("-","",str_replace(".","",$_POST['rut'])).", '".$_POST['fecha']."', ".$_POST['comuna'].");";
$alert = "";
if(DBConnection::consulta($sql))
{
	$alert = '<div class="alert alert-success" role="alert">El registro se ha insertado correctamente</div>';
	$alert = $alert. '<a href="../index.html" class="btn btn-success">Volver</a>';
}
else
{
	$alert = '<div class="alert alert-danger" role="alert">El registro no se ha insertado correctamente</div>';
	$alert = $alert. '<a href="bono.php" class="btn btn-warning">Volver</a>';
}


?>
<!DOCTYPE html>
<html>
  <head>
    <title>Prueba 3</title>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="../css/bootstrap.min.css" rel="stylesheet">
    <link href="../css/landing-page.css" rel="stylesheet">

    <!--<link href="font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">-->

    <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700,300italic,400italic,700italic" rel="stylesheet" type="text/css">
    <script src="../js/jquery.js"></script>
    <script src="../js/funcionesDelSitio.js"></script>
    <script src="../js/jquery.Rut.js"></script>
   <!-- <script src="js/formulario.js" ></script> -->


</head>
<body >

<?php echo $alert; ?>

</body>
</html>
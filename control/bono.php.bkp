
<?php
$comuna = explode("|", $_POST['comuna']);
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
<form action="insertar.php" method="POST">
<div class="container">
	<div class="row">
		<div class="col-lg-4">Beneficiario: </div>
		<div class="col-lg-4"><?php echo $_POST['rut']; ?><input type="hidden" name="rut" value="<?php echo $_POST['rut']; ?>"></div>
		<div class="col-lg-4"><?php echo $_POST['nombre']." ".$_POST['apellido']; ?></div>
	</div>
	<div class="row">
		<div class="col-lg-4">Comuna de Atención: </div>
		<div class="col-lg-4"><?php echo $comuna[1]; ?><input type="hidden" name="comuna" value="<?php echo $comuna[0]; ?>"></div>
		<div class="col-lg-4"></div>
	</div>
	<div class="row">
		<div class="col-lg-4">Fecha de Atención: </div>
		<div class="col-lg-4"><?php echo date("d/m/Y", strtotime($_POST['fecha'])); ?><input type="hidden" name="fecha" value="<?php echo $_POST['fecha']; ?>"></div>
		<div class="col-lg-4"></div>
	</div>

<div class="row">
<a class="btn btn-primary" href="../index.html">Volver</a>
<input type="submit" class="btn btn-success" value="Confirmar">
</div>

</div>

</form>

</body>

</html>
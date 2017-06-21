$(document).ready(function(){

	$("#rut").on("keyup",function(){
		var rut = $(this).val();
		console.log("esto es keyup ", rut);
	});

jQuery.ajaxSetup({
        "error":function(respuesta, jqXHR, errorMsg) {            
           
            alert("ha ocurrido el siguiente error: "+errorMsg);
        }
    });

jQuery("input[name='rut']").Rut({format_on:'keyup'});
    jQuery("input[name='rut']").blur(function () {

    	$.ajax({
				"url": "../Prueba%203/control/datos.php" ,
				"method" : "GET",	}) .done(function(persona) 
				{ 
					console.log("entrando al ajax");

			for (var x =0 ; x < persona.length; x++)
				{
					
					$("input[name='nombre']").append(persona[x].nombre);
					$("select").append("<option>"+response[x].nombre+"</option>");
                    jQuery("input[name='nombre']").append("nombre", true);



                        jQuery("input[name='apellido']").append(persona[x].apellido);
                        jQuery("input[name='apellido']").append("apellido", true);
					
				}
				}); 
                        
                        
        
   //
    });



});

function busquedaPrincipal()
{
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() 
	{
    	if (this.readyState == 4 && this.status == 200) 
    	{
	       // Typical action to be performed when the document is ready:
	       console.log(xhttp.responseText);
    	}
	};
	console.log("paso1");
	xhttp.open("GET", "../Prueba%203/control/datos.php", true);
	xhttp.send();
}




function funcCrearBDSolicitud(){
	console.log("entre a la funcion de crear bd");
	var param = {
		"url": "control/valida.php",
		"method": "POST",
		"data": {"validaBD":"porfavor"}
	};
	$.ajax(param).done(function(datos){


		$("#alerta").addClass("alert-success");
		$("#alerta").html(datos);
		$("#alerta").fadeIn();

		//solamente una vez cuando pasen 3 seg
		setTimeout(function(){
			$("#alerta").fadeOut();
		},5000);

		//se ejecuta cada 3 segundos
		/*setInterval(function(){
			console.log("escondiendo la alerta");
			$("#alerta").fadeOut();
		},3000);*/


		//console.log("hola estoy adentro cotito");
		//console.log(datos);
	})


	console.log("terminando ejecucion");

	
 

}

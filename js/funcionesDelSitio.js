$(document).ready(function(){

var r;
	$("#rut").on("keyup",function(){
		var rut = $(this).val();
		r = rut.replace('.','').replace('.','').replace('-','');
		console.log("esto es keyup ", rut);
	});




//"url": "../Prueba%203/control/datos.php" 

jQuery("input[name='rut']").Rut({format_on:'keyup'});
    jQuery("input[name='rut']").blur(function () {

    $.ajax({
    		/*url: '../Prueba%203/control/datos.php',
            dataType: 'json',
            success: function(data){
            	{
                $("#nombre").html("");
                $.each(data,function(index){
                	 var nombre = data[index].nombre;
                    var apellido = data[index].apellido;
                $("#nombre").app
                }) 
            }*/
    			type : 'GET', url : '../Prueba%203/control/datos.php',
    			data : {'id_persona': r},
    			datatype: 'json',
    			
		    }).done(function(data){
		    	//data = data.replace("[","").replace("]","").trim(;)
		    	var d = (jQuery.parseJSON(data))[0];

		    	console.log("d",d);

		    	//print_r(array);
		    	//console.log("=>"+data+"<==");
		    	//var obj = jQuery.parseJSON( data );

		    	//console.info('d',data['id_persona']);
		    	//console.log("data.nombre=>"+obj.nombre);
		    	//console.log("data=>"+obj+"<==");
    			//$('test').val(obj.nombre);
    			$("#nombre").val(d.nombre); 
    			$("#apellido").val(d.apellido);
    			//$("#test").val(obj.nombre);


		    })
        
   //
    });



});


busquedaPrincipal();

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

$(document).ready(function(){

	cargarRegiones();
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

		type : 'GET', url : '../prueba3/control/datos.php',
		data : {'id_persona': r},
		datatype: 'json',

	}).done(function(data){

		try{
		console.log(jQuery.parseJSON(data));
		var d = (jQuery.parseJSON(data))[0];

		//console.log("d",d);
		$("#nombre").val(d.nombre); 
		$("#apellido").val(d.apellido);
	}
	catch(e)
	{
		alert( 'El usuario no está registrado' );
		return false;
	}
	});

   //

   $.ajax({

   	type : 'GET', url : '../prueba3/control/beneficiarios.php',
   	data : {'id_titular': r},
   	datatype: 'json',

   }).done(function(data){

   	var d = (jQuery.parseJSON(data));

		    	//console.log("d",d);

		    	//console.log("largo",d.length);
		    	for(var i = 0;i<d.length;i++)
		    	{
		    		//console.log(i, d[i]["id_beneficiario"]);
		    		$('#beneficiario').append('<option value="' + d[i]["id_beneficiario"] + '">' + d[i]["nombre"]+ " "+d[i]["apellido"] + '</option>');
		    	}
    			//$("#beneficiario").val(d.id_beneficiario);
    			//$('#beneficiario').app	end('<option value="' + d.id_beneficiario + '">' + d.id_beneficiario + '</option>');
    		});

   // regiones
   $.ajax({

   	type : 'GET', url : '../prueba3/control/regiones.php',
    			//data : {'id_regiones': r},
    			datatype: 'json',
    			
    		}).done(function(data){

    			var d = (jQuery.parseJSON(data));

		    	//console.log("d",d);

		    	//console.log("largo",d.length);
		    	for(var i = 0;i<d.length;i++)
		    	{
		    		//console.log(i, d[i]["id_beneficiario"]);
		    		//$('#region').append('<option value="' + d[i]["region_id"] + '">' + d[i]["region_nombre"]+ '</option>');
		    	}
    			//$("#beneficiario").val(d.id_beneficiario);
    			//$('#beneficiario').append('<option value="' + d.id_beneficiario + '">' + d.id_beneficiario + '</option>');
    		})



    	});


});
function cargarRegiones()
{
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var d = (jQuery.parseJSON(this.responseText));
			var x = document.getElementById("region");
			for(var i = 0;i<d.length;i++)
			{
				$('#region').append('<option value="' + d[i]["region_id"] + '">' + d[i]["region_nombre"]+ '</option>');
			}
		}
	};
	xhttp.open("GET", "../prueba3/control/regiones.php", true);
	xhttp.send();
}



function cargarProvincias()
{
	var region = $("#region").val();

	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var d = (jQuery.parseJSON(this.responseText));
			$('#provincia').empty();
			for(var i = 0;i<d.length;i++)
			{
				$('#provincia').append('<option value="' + d[i]["provincia_id"] + '">' + d[i]["provincia_nombre"]+ '</option>');
			}
		}
	};
	xhttp.open("GET", "../prueba3/control/provincia.php?region="+region, true);
	xhttp.send();
}


function cargarComunas()
{
	var provincia = document.getElementById('provincia').value;

		//alert(provincia);
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				var d = (jQuery.parseJSON(this.responseText));
				$('#comuna').empty();
				for(var i = 0;i<d.length;i++)
				{
		    		//console.log(i, d[i]["id_beneficiario"]);
		    		$('#comuna').append('<option value="' + d[i]["comuna_id"]+"|"+ d[i]["comuna_nombre"]+ '">' + d[i]["comuna_nombre"]+ '</option>');
		    	}
		    }
		};
		xhttp.open("GET", "../prueba3/control/comunas.php?provincia="+provincia, true);
		xhttp.send();
	}
//busquedaPrincipal();

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



function validarRut( Objeto )
{
	var tmpstr = "";
	var intlargo = Objeto.value
	if (intlargo.length> 0)
	{
		crut = Objeto.value
		largo = crut.length;
		if ( largo <2 )
		{
			alert('rut inválido')
			Objeto.focus()
			return false;
		}
		for ( i=0; i <crut.length ; i++ )
			if ( crut.charAt(i) != ' ' && crut.charAt(i) != '.' && crut.charAt(i) != '-' )
			{
				tmpstr = tmpstr + crut.charAt(i);
			}
			rut = tmpstr;
			crut=tmpstr;
			largo = crut.length;

			if ( largo> 2 )
				rut = crut.substring(0, largo - 1);
			else
				rut = crut.charAt(0);

			dv = crut.charAt(largo-1);

			if ( rut == null || dv == null )
				return 0;

			var dvr = '0';
			suma = 0;
			mul  = 2;

			for (i= rut.length-1 ; i>= 0; i--)
			{
				suma = suma + rut.charAt(i) * mul;
				if (mul == 7)
					mul = 2;
				else
					mul++;
			}

			res = suma % 11;
			if (res==1)
				dvr = 'k';
			else if (res==0)
				dvr = '0';
			else
			{
				dvi = 11-res;
				dvr = dvi + "";
			}

			if ( dvr != dv.toLowerCase() )
			{
				alert('El Rut Ingreso es Invalido')
				$("#rut").css('border-color', 'red');
				return false;
			}
			$("#rut").css('border-color', 'green');
			return true;
		}
	}
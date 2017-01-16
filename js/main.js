3function validateForm(){
	/* Escribe tú código aquí */

	//validar que los camposno esten vacios
	var rpta=true;
	var name = document.getElementById("name").value;
	if( name == null || name.length == 0 || /^\s+$/.test(name) ) {
  		alert (formulario[i].name+ ' no puede estar vacío o contener sólo espacios en blanco');
  		rpta=false;
  		return rpta;
	}if(rpta==true){
		formulario.submit();
	}


	//validar solo texto
	var patron = /^[a-zA-Z]*$/;
  // En caso de querer validar cadenas con espacios usar: /^[a-zA-Z\s]*$/
  	if(!name.search(patron))
    	return true;
  	else
    	return false;

	



	//validar e-mail
	 var email = document.getElementById("input-email").value;
	if( !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(email)) ) {
  		return false;
	}
}
function irAPalas(ruta){
    window.location.href = '../palas/'+ruta+'.html';
}

function irAPagina(nombre){
    if(nombre==='zapatillas'){
        window.location.href = '../equipamiento/zapatillas.html';
    }else{
        window.location.href = '../equipamiento/accesorios.html';
    }
}

function irAZapatillas(zapatilla){
    window.location.href = '../equipamiento/zapatillas/'+zapatilla+'.html';
}

function irAAccesorios(accesorio){
    window.location.href = '../equipamiento/accesorios/'+accesorio+'.html';
}

function cajaComentarios(){
	var name=document.getElementById('name').value;
	var comment=document.getElementById('comment').value;
	var puntuacion=document.getElementById('puntuacion').textContent;
 
	if(name =="" || comment ==""){
		alert("Introduzca el nombre y el comentario.");
	}else{
		var divp=document.createElement('div');
		var element_name=document.createElement('h5');
		var element_message=document.createElement('p');
		var element_puntuacion=document.createElement('p');
		var element_line=document.createElement('hr');
		var txt_name=document.createTextNode(name);
		var txt_message=document.createTextNode(comment);
		var txt_puntuacion=document.createTextNode('Nota: '+puntuacion);
		element_name.appendChild(txt_name);
		element_message.appendChild(txt_message);
		element_puntuacion.appendChild(txt_puntuacion);
		element_line.style.border='1px solid #000';
		divp.appendChild(element_name);
		divp.appendChild(element_line);
		divp.appendChild(element_message);
		divp.appendChild(element_puntuacion);
		divp.setAttribute('class', 'rounded bg-primary p-3 m-3');
		document.getElementById('contenedorComentarios').appendChild(divp);
		document.getElementById('name').value="";
		document.getElementById('comment').value="";
	}
 
}

function mostrarPuntuacion(puntuacion){
	var element_puntuacion = document.getElementById('puntuacion');
	if(element_puntuacion.textContent!=null){
		element_puntuacion.textContent="";
	}
	var txt_puntuacion = document.createTextNode(puntuacion);
	element_puntuacion.appendChild(txt_puntuacion);
}
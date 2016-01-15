function alerta(){
	alert("YA VALIO VERGA!!");
}

function hacerclick(){
	var lista=document.querySelectorAll("#principal p");
	for(i=0; i<lista.length; i++){
	lista[i].onclick=alerta;
	}
}

window.onload=hacerclick;
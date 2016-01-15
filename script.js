function alerta(){
	alert("Balebergalabida");
}
function hacerclick(){
	var elemento=document.getElementsByTagName('p')[0];
	elemento.addEventListener("click", alerta, false);
}
window.addEventListener("load", hacerclick, false);
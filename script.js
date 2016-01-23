function iniciar(){
	var elemento=document.getElementById('lienzo');
	lienzo=elemento.getContext('2d');
	var gradiente=lienzo.createRadialGradient(250,150,300,250,150,100);
	gradiente.addColorStop(0.5, '#FF0000');
	gradiente.addColorStop(1, '#000000');
	lienzo.fillStyle=gradiente;

	lienzo.fillRect(0,0,500,300);
}

window.addEventListener("load", iniciar, false);

function iniciar(){
	var elemento=document.getElementById('lienzo');
	lienzo=elemento.getContext('2d');
	lienzo.beginPath();
	lienzo.moveTo(100,100);
	lienzo.lineTo(200,200);
	lienzo.lineTo(100,200);
	lienzo.clip();

	lienzo.beginPath();
	for(i=0; i<300; i=i+10){
		lienzo.moveTo(0,i);
		lienzo.lineTo(500, i);
	}
	lienzo.stroke();
}

window.addEventListener("load", iniciar, false);

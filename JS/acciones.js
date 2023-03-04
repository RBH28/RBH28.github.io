document.getElementById('imagen').addEventListener('click', function () {
    document.getElementById('datos_pers').style.display='block'
})

document.getElementById('calendario').addEventListener('click', function() {
    document.getElementById('titulos_datos').style.display='block';
    document.getElementById('titulos').innerHTML="Fecha de Nacimiento:";
    document.getElementById('datos').innerHTML="32/08/95"
})

document.getElementById('mapa').addEventListener('click', function() {
    document.getElementById('titulos_datos').style.display='block';
    document.getElementById('titulos').innerHTML="Direccion:";
    document.getElementById('datos').innerHTML="Larrea 546 5A - Puerto Esteros, Santa Fe"
})
document.getElementById('telefono').addEventListener('click', function() {
    document.getElementById('titulos_datos').style.display='block';
    document.getElementById('titulos').innerHTML="Telefono:";
    document.getElementById('datos').innerHTML="0369-15783326"
})

/*
document.getElementById('imagen').onclick = function(){
    console.log ("Funciona");
    document.getElementsByClassName('datos_pers').style.display='block'
}
**/
/*Como sucedio en CSS no he podido utilizar getElementsByClassName, por eso la repeticion de cada uno*/


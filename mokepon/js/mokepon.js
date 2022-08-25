function iniciarJuego(){
    let botonMascotaJugador = document.getElementById('boton-mascota');
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador);
}
function seleccionarMascotaJugador(){
    let inputHipodoge = document.getElementById('hipodoge');
    let inputCapipepo = document.getElementById('capipepo');
    let inputRatigueya = document.getElementById('ratigueya');
    if (inputHipodoge.checked){
        alert("Seleccionaste a hipodoge")
    } else if (inputCapipepo.checked){
        alert("Seleccionaste a capipepo")
    } else if (inputRatigueya.checked){
        alert("Seleccionaste a ratigueya")
    } else{
        alert("Selecciona una mascota")
    }
}

window.addEventListener('load', iniciarJuego);
function iniciarJuego(){
    let botonMascotaJugador = document.getElementById('boton-mascota');
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador);
}
function seleccionarMascotaJugador(){
    alert("Tu jugador es: ");
}

window.addEventListener('load', iniciarJuego);
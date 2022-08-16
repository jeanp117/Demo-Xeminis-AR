let rondas = 3;
let puntajeJugador1 = 0;
let puntajeJugador2 = 0;

function duelo(turno: any, opcionJugador1: string, opcionJugador2: string) {
  let ganador;

  if (opcionJugador1 == opcionJugador2) ganador = 0;
  else {
    if (opcionJugador1 == "piedra" && opcionJugador2 == "tijera") ganador = 1;
    else if (opcionJugador1 == "tijera" && opcionJugador2 == "piedra") ganador = 2;
    else if (opcionJugador1 == "piedra" && opcionJugador2 == "papel") ganador = 2;
    else if (opcionJugador1 == "papel" && opcionJugador2 == "piedra") ganador = 1;
    else if (opcionJugador1 == "papel" && opcionJugador2 == "tijera") ganador = 2;
    else if (opcionJugador1 == "tijera" && opcionJugador2 == "papel") ganador = 1;
  }
  return ganador;
}

function turno() {
  // preguntar por consola la opcion
  let opcionJugador1 = prompt("Jugador 1, ¿piedra, papel o tijera?");
}
turno();

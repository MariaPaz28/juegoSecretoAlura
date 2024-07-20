// ETIQUETA H1
// let titulo = document.querySelector('h1'); // comillas simples ALT 39
// titulo.innerHTML = 'Juego del número secreto';

//ETIQUETA PÁRRAFO
// let parrafo = document.querySelector('p'); //selecciono el párrafo de html
// parrafo.innerHTML = 'Indica un número del 1 al 10'; //Le indico que escribir en ese p del html

// ETIQUETA BOTON
// Primero en el html, en el button creamos el evento onclick y le colocamos un nombre (de función)
// onclick="intentoUsuario();"




// LAS FUNCIONES PRIMERO SE DEFINEN TODAS, siempre fuera pueden ir arriba o abajo, no importa


let numeroSecreto = 0; //se invoca más abajo con su valor real en condicionales inciciales
let intentos = 0; //se onvoca más abajo con su valor real en condicionales iniciales
let listaNumerosSorteados = [];
let numeroMaximo = 10;

// CREANDO FUNCIÓN REUTILIZABLE
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return; // ACÁ NO RETORNA NADA PERO ES BUENA PRÁCTICA PONERLO
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value); //CAPTURANDO VALOR DEL INPUT 
    console.log(numeroSecreto)
    if (numeroDeUsuario === numeroSecreto) { //igual si o si el triple igual (compara igual en valor y tipo)
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`); //operador ternario porque si lo acerto en una vez dice "vez" sino "veces"
        document.getElementById('reiniciar').removeAttribute('disabled'); // acá estamos obteniendo del segundo boton nuevo juego el id y removemos el disabled que es lo que me hace que el boton esté desactivado
    } else{
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor');
        } else{
            asignarTextoElemento('p', 'El número secreto es mayor');

        }
        intentos++;
        limpiarCaja(); //Llamando a la función de abajo
    }
    return; // ACÁ NO RETORNA NADA PERO ES BUENA PRÁCTICA PONERLO
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = ''; // id de nuestro input
   //para que me vacíe la caja y no volver a escribir de nuevo el numero
}

//RECURSIVIDAD: NO SE REPITE NUNCA EL NÚMERO
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1; //ACÁ ME RETORNA UN ENTERO ALEATORIO
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    } else {

    //Si el número está incluído en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)) {
         return generarNumeroSecreto();
        }else {
        listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado
        }
    }
}

function condicionesIniciales(){
    //REUTILIZANDO FUNCIÓN 
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto(); 
    intentos = 1;
}

function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');  //reiniciamos el juego

}

condicionesIniciales();





 


































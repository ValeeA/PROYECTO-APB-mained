//arreglo que contiene las respuestas correctas
let correctas = [1,2,3,1,1,3,2,3,3,1,2,3,3,2,2,1,1,1,2,3];

//arreglo donde se guardan las respuestas del usuario
let opcion_elegida= [];

let cantidad_correctas=0;
//función que toma el núm de la pregunta y el input elegido de esa pregunta
function respuesta(num_pregunta, seleccionada) {
    //guardo la respuesta elegida
    opcion_elegida[num_pregunta]= seleccionada.value;
    //el siguiente código es para poner en color blanco
    //el fondo delos inputs cuando elige otra opción
    //armo el id para seleccionar el seccion correspondiente
}
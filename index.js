let $campoRespuesta = document.getElementById("ans");

function añadir(num) {
    if (num >= 0 && num <= 9) {
        $campoRespuesta.value += num;
    }
}

function verOpe(ope) {
    let respuesta = $campoRespuesta.value;
    if (respuesta[respuesta.length - 1] >= 0 && respuesta[respuesta.length - 1] <= 9) {
        $campoRespuesta.value+=ope
    }
}

function borrar() {
    let respuesta = $campoRespuesta.value;
    $campoRespuesta.value = $campoRespuesta.value.slice(0, respuesta.length - 1);
}

function calcular() {
    let respuesta = $campoRespuesta.value;
    let operaciones = ['+', '-', '*', '/', '.'];
    if (!operaciones.includes(respuesta[respuesta.length - 1]) && respuesta.length>0) {
        $campoRespuesta.value = eval($campoRespuesta.value); 
        if (isNaN(parseFloat(eval($campoRespuesta.value))) || !isFinite(eval($campoRespuesta.value))) {
            $campoRespuesta.value = '';
        }
    }else {
        borrar();
    }
}
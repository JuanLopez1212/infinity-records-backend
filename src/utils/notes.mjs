<<<<<<< HEAD
function sumarNotas ( lista ) {
    let totalNotas = 0;

    for( let i = 0; i < lista.length; i++ ) {
        totalNotas = totalNotas + lista[ i ].notaFinal;
    }

    return totalNotas;
}

function promedio( total, cantNotas ) { 
    return total / cantNotas;
}

export { sumarNotas, promedio}
=======
function sumarNotas (lista){
    let totalNotas = 0

    for (let i = 0; i<lista.length; i++){
        totalNotas = totalNotas + lista[i].notaFinal
    }

    return totalNotas
}

function promedio (total, cantNotas){
    return total/ cantNotas
}

export{
    sumarNotas,
    promedio
}
>>>>>>> 1b725335658e37b1ecd94d031ef8938f62dbf41f

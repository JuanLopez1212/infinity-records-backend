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
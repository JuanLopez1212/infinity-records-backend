function sum (a, b){
    if(typeof a !== 'number' || typeof b !=='number'){
        throw new Error ('Valores Invalidos')
    }
    return a+b;
}

function subtract(a,b){
    if(typeof a !== 'number' || typeof b !=='number'){
        throw new Error ('Valores Invalidos')
    }
    return a-b;
}

export{sum , subtract}
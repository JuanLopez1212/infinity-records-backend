function sum (a, b){
<<<<<<< HEAD
    if (typeof a !== 'number' && typeof b !== 'number'){
        throw new TypeError('Valores invalidos ');
    }
    return a + b;
}

function subtract(a, b){
    return a - b;
}
export { sum, subtract};
=======
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
>>>>>>> 1b725335658e37b1ecd94d031ef8938f62dbf41f

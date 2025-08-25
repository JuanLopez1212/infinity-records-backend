
function sum( a, b ) {
    if( typeof a !== 'number' || typeof b !== 'number' ) {
        throw new TypeError( 'Valores inválidos' )
    }

    return a + b
}

function subtract( a, b ) {
    return a - b
}

export { sum, subtract }
function sum (a, b){
    if (typeof a !== 'number' && typeof b !== 'number'){
        throw new TypeError('Valores invalidos ');
    }
    return a + b;
}

function subtract(a, b){
    return a - b;
}
export { sum, subtract};


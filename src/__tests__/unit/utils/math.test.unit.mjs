import {subtract, sum} from "../../../utils/math.mjs"

describe('Funciones de math', ()=>{
    test('Sumar dos numeros correctamente', ()=>{
        const a = 5;
        const b = 3;

        //when
        const result = sum(a,b);

        //then 
        expect (result).toBe(8) //Assertion 1
        expect(typeof result).toBe('number') //Assertion 2 
        //Assertion 3
    });
    test('Debe lanzar error de cuando los valores no son validos', ()=>{
        //given

        const a = '5';
        const b = 'juan';

        //when 
        // const result = sum(a,b);

        //then
        expect (()=>sum (a,b)).toThrow('Valores Invalidos')
    });

    test('Restar dos numero correctamente', ()=>{
        const a = 5;
        const b = 3;

        const result = subtract(a,b)

        expect (result).toBe(2)
        expect(typeof result).toBe('number')
    })

    test('Debe lanzar error de cuando los valores no son validos', ()=>{
        //given

        const a = '5';
        const b = 'juan';

        //when 
        // const result = sum(a,b);

        //then
        expect (()=>subtract (a,b)).toThrow('Valores Invalidos')
    });


});

describe('Funciones de agregar producto', ()=>{
    test('Agregar un proucto valido', ()=> {

    }) 
})
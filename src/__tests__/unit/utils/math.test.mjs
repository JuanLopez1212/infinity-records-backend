import { subtract, sum } from "../../../utils/math.mjs";

describe('Funciones de Math',() =>{
    it(' debe sumar dos numeros correctamente', ()=>{
        //given
        const a = 5;
        const b = 3;
        //when
        const result = sum(a, b);
        //then
        expect(result).toBe(8);   //Assertion 1
        expect(typeof result).toBe('number'); //Assertion 2
    });
    it(' debe lanzar error cuando los valores no son validos', () => {
        //given
        const a = '5';
        const b = 'juan';
        //when

        //then
        expect(() => sum(a, b)).toThrow('Valores invalidos');
    });

    it('debe restar dos numeros correctamente ',()=>{
        //given
        const a = 8;
        const b = 4;
        //when
        const result = subtract(a, b);
        //then
        expect(result).toBe(4)
    })
}); 
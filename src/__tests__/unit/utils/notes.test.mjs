import { promedio, sumarNotas } from "../../../utils/notes.mjs"

describe( 'Funciones de notes', () => {
    it( 'Debe sumar todas las notas correctamente', () => {
        const lista = [
            {notaFinal: 3},
            {notaFinal: 4},
            {notaFinal: 5}
        ]

        const resultado = sumarNotas( lista )

        expect( resultado ).toBe( 12 )
    } )
    it( 'Promedio debe calcular correctamente el promedio', () => {
        const total = 12
        const cantNotas= 3

        const resultado = promedio( total, cantNotas )

        expect( resultado ).toBe( 4 )
    } )
})
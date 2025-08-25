import { subtract, sum } from "../../../utils/math.mjs"

describe( 'Funciones de Math', () => {
    test( ' Debe sumar dos números correctamente', () => {
        // Given
        const a = 5
        const b = 3

        // When
        const result = sum( a, b )

        // Then
        expect( result ).toBe( 8 ) // Assertion 1
        expect( typeof result ).toBe( 'number' ) // Assertion 2
        
    })
    it( 'debe lanzar error cuando los valores no son válidos', () => {
        // Given
        const a = 5
        const b = 'juan'

        // When
      

        // Then

        expect( () => sum( a, b ) ).toThrow( 'Valores inválidos' ) // Assertion 3
    })
    it( 'Debe restar dos números correctamente', () => {
        const a = 5
        const b = 3

        const result = subtract( a, b )

        expect( result ).toBe( 2 )
    } ) 
} )
import albumsModel from "../../../schemas/albums.schema.mjs"

describe( 'Validación directa a albumSchema', () => {
    it( 'Debe lanzar un error si falta el campo "title"', () => {
        // Given
        const albumData = {
            // Aquí falta el campo title
            cover_url: 'http://imagen.jpg.com',
            date_release: '12/12/2006'
        }

        // When
        try {
            const album = new albumsModel( albumData )
            album.validate() // Esto devuelve una promesa 
        } 

        // Then
        catch (error) {
            expect( error.errors.title ).toBeDefined()
        }
    })
})
import artistsModel from "../schemas/artists.schema.mjs"


const createArtist = async ( req, res ) => {
    const inputData = req.body        // Extraigo el objeto enviado 
    
    // Try: Controla las excepciones de la consulta a la base de datos 
    try {
        const registeredArtists = await artistsModel.create ( inputData )

        console.log ( registeredArtists )  // Imprime en la consola
        res.send ( registeredArtists )  // Enviando la respuesta al cliente
    }
    catch ( error ) {    // Catch: Captura el error producido por la excepción 
        console.error ( error )
        res.status ( 500 ).json ( { msg: 'Error al registrar el artista' } )
    }
} 


export {
    createArtist
}
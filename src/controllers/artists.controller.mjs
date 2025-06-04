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
        res.status( 500 ).json ( { msg: 'Error al registrar el artista' } )
    }
} 

const getAllArtists = async ( req, res ) => {
    
    try {
        const data = await artistsModel.find ( {} )
        res.json ( data )     
    } 
    catch (error) {
        console.error ( error )
        res.json ( { msg: 'Error: No se pudo obtener el listado de artistas' } )        
    }
    
    
}

const getArtistById = async ( req, res ) => {
    const artistId = req.params.id    // El nombre final dependerá del nombre del parámetro en la ruta 
    
    try {
        const data = await artistsModel.findById ( artistId )

        // Verifica si el artista no existe y lanza el respectivo mensaje al cliente
        if ( ! data ) {
            return res.json ( { msg: 'El artista no se encuentra registrado' } )
        }
        
        res.json ( data )
    } 
    catch (error) {
        console.error ( error )
        res.json ( { msg: 'Error: No se pudo encontrar el artista' } )
    }
}

const removeArtistById = async ( req, res ) => {
    const artistId = req.params.id
    
    try {
        const data = await artistsModel.findByIdAndDelete ( artistId )
        
        if ( ! data ) {
        return res.json ( { msg: 'El artista ya ha sido eliminado' } )
        }   
        res.json ( data )    
    } 
    catch ( error ) {
        console.error ( error )
        res.json ( { msg: 'Error: No se pudo eliminar al artista' } )
    }
    
    
}

const updateArtistById = async ( req, res ) => {
    const artistId = req.params.id  // Obtenemo el ID de la parametrización de la ruta
    const inputData = req.body   // Obtenemos el body de la petición
    
    try {
        const data = await artistsModel.findByIdAndUpdate ( artistId, inputData, { new: true } )

        res.json ( data )    
    } 
    catch (error) {
        console.error ( error )
        res.json ( { msg: 'Error: No se pudo actualizar al artista' } )
    }
}


// Exponer las funcionalidades para ser usadas por otros archivos
export {
    createArtist,
    getAllArtists,
    getArtistById,
    removeArtistById,
    updateArtistById
}
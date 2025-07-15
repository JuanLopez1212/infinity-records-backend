import albumsModel from "../schemas/albums.schema.mjs"

const createAlbum = async ( req, res ) => {
    const inputData = req.body        // Extraigo el objeto enviado 
    const { role, _id } = req.authUser;

    // Try: Controla las excepciones de la consulta a la base de datos 
    try {

        if( role !== 'artists' ) {
            res.json({ error: 'No puedes registrar album' });
        }

        inputData.userId = _id;

        console.log(req.authuser)
        const nameArtist = req.authUser
        inputData.name = nameArtist.name 
        
        const registeredAlbums = await albumsModel.create ( inputData )

        console.log ( registeredAlbums )  // Imprime en la consola
        res.send ( registeredAlbums )  // Enviando la respuesta al cliente
    }
    catch ( error ) {    // Catch: Captura el error producido por la excepción 
        console.error ( error )
        res.status( 500 ).json ( { msg: 'Error al registrar el álbum' } )
    }
}

const getAllAlbums = async ( req, res ) => {
    
    try {
        const data = await albumsModel.find ( {} ).populate(['userId']);
        res.json ( data )     
    } 
    catch (error) {
        console.error ( error )
        res.json ( { msg: 'Error: No se pudo obtener el listado de álbumes' } )        
    }
    
    
}

const getAlbumById = async ( req, res ) => {
    const albumsId = req.params.id    // El nombre final dependerá del nombre del parámetro en la ruta 
    
    try {
        const data = await albumsModel.findById ( albumsId ).populate(['userId']);

        // Verifica si el artista no existe y lanza el respectivo mensaje al cliente
        if ( ! data ) {
            return res.json ( { msg: 'El álbum no se encuentra registrado' } )
        }
        
        res.json ( data )
    } 
    catch (error) {
        console.error ( error )
        res.json ( { msg: 'Error: No se pudo encontrar el álbum' } )
    }
}

const getAlbumByArtistId = async ( req, res ) => {
    const userId = req.params.id    // El nombre final dependerá del nombre del parámetro en la ruta 
    
    try {
        const data = await albumsModel.find ({ userId});
        console.log(data);

        // Verifica si el artista no existe y lanza el respectivo mensaje al cliente
        if ( ! data ) {
            return res.json ( { msg: 'El álbum no se encuentra registrado' } )
        }
        
        res.json ( data )
    } 
    catch (error) {
        console.error ( error )
        res.json ( { msg: 'Error: No se pudo encontrar el álbum' } )
    }
}

const removeAlbumsById = async ( req, res ) => {
    const albumsId = req.params.id
    
    try {
        const data = await albumsModel.findByIdAndDelete ( albumsId )
        
        if ( ! data ) {
        return res.json ( { msg: 'El álbum ya ha sido eliminado' } )
        }   
        res.json ( data )    
    } 
    catch ( error ) {
        console.error ( error )
        res.json ( { msg: 'Error: No se pudo eliminar al álbum' } )
    }
    
    
}

const updateAlbumById = async ( req, res ) => {
    const albumId = req.params.id  // Obtenemo el ID de la parametrización de la ruta
    const inputData = req.body   // Obtenemos el body de la petición
    
    try {
        const data = await albumsModel.findByIdAndUpdate ( albumId, inputData, { new: true } )

        res.json ( data )    
    } 
    catch (error) {
        console.error ( error )
        res.json ( { msg: 'Error: No se pudo actualizar al álbum' } )
    }
}


export {
    createAlbum,
    getAllAlbums,
    getAlbumById,
    removeAlbumsById,
    updateAlbumById,
    getAlbumByArtistId
}
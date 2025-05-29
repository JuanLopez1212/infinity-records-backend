import albumsModel from "../schemas/albums.schema.mjs"

const createAlbum = async ( req, res ) => { 
    const inputData = req.body

    try {
        const data = await albumsModel.create ( inputData )
        res.status ( 201 ).json ( data )
    } 
    catch (error) {
        console.error ( error )
        // res.status ( 500 ).json ( { msg: 'Error al registrar el álbum' } )
    }
}

const getAllAlbums = async ( req, res ) => {

    try {
        const data = await albumsModel.find ( {} )
        res.json ( data )
    } 
    catch (error) {
        console.error ( error )
        res.json ( 500 ),json ( { msg: 'Error: No se puede obtener la lista de álbumes' } )
    }
}

const getAlbumById = async ( req, res ) => {
    const albumId = req.params.id 

    try {
        const data = await albumsModel.findById ( albumId )

        if (! data ) {
            return res.json ( { msg: 'El álbum no se encuentra registrado' } )
        }

        res.json ( data )
    } 
    catch (error) {
        console.error ( error )
        res.json ( 500 ).json ( { msg: 'Error: No se pudo encontrar el álbum' } )
    }
}

const removeAlbumById = async ( req, res ) => {
    const albumId = req.params.id 

    try {
        const data = await albumsModel.findByIdAndDelete ( albumId )

        if ( ! data ) {
            return res.json ( { msg: 'El álbum ya ha sido eliminado' } )
        }
        res.json ( data )
    }
    catch (error) {
        console.error ( error )
        res.json ( 500 ).json ( { msg: 'Error: No se pudo eliminar el álbum' } )
    }
}

const updateAlbumById = async ( req, res ) => {
    const albumId = req.params.id 
    const inputData = req.body

    try {
        const data = await albumsModel.findByIdAndUpdate ( albumId, inputData, { new: true } )

        if ( ! data ) {
            return res.json ( { msg: 'El álbum no se encuentra registrado' } )
        }

        res.json ( data )
    } 
    catch (error) {
        console.error ( error )
        res.json ( 500 ).json ( { msg: 'Error: No se pudo actualizar el álbum' } )
    }
}





export {
    createAlbum,
    getAllAlbums,
    getAlbumById,
    removeAlbumById,
    updateAlbumById
}
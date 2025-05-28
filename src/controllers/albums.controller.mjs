import albumsModel from "../schemas/albums.schema.mjs"

const createAlbum = async ( req, res ) => {
    const inputData = req.body

    const data = await albumsModel.create ( inputData )
    res.status ( 201 ).json ( data )
}




export {
    createAlbum,
}
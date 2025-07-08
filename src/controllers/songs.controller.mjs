import songsModel from "../schemas/songs.schema.mjs";

const createSongs = async (req, res) => {
    const inputData = req.body;
    const { role, _id } = req.authUser;
    // inputData.artistId = "6854a1a85013a70fee1d14a5";   /// Quitar solo para probar
    // CONTROLA LAS EXCEPCIONES DE LA CONSULTA A LA BASE DE DATOS

    try{

        if (role !== 'artists' ) {
        return res.status(403).json({ msg: 'No tienes permiso para subir canciones' } ) 
    } 

        inputData.userId = _id;

        console.log(req.authuser)
        const nameArtist = req.authUser
        inputData.nameArtist = nameArtist.name
        const registeredSongs = await songsModel.create( inputData); 

        console.log(registeredSongs);  //imprime en la consola
        res.status(201).json(registeredSongs); //Enviando la respuesta al cliente(

    }

    catch(error){
        console.error(error);
        res.status( 500 ).json({msg:'Error : No se pudo registar la cancion'});
    }
}


const getAllSongs = async (req, res) => {
    
    try{
    const data = await songsModel.find({}).populate(['userId']);
    res.json( data );
    }

    catch(error){
        console.error(error);
        res.json({msg: 'Error: No se pudo obtener el listado de las canciones'})
    }
}

const getSongsById = async (req, res) => {
    const songsId = req.params.id; //El nombre final dependera del nombre del parametro en la ruta 

    try{
    
        const data = await songsModel.findById(songsId).populate(['userId']);
        //  const data = await SongsModel.findOne({_id:SongsId
        //  });
        
        if(data == null){

            return res.json({msg: 'Error: La canción no se encuentra registrada'});
        }
        res.json(data); 
    }


    catch (error){
        console.error( error);
        res.json({msg: 'Error: No se pudo encontrar la canción'});
    }
}


const getSongsByArtistId = async ( req, res ) => {
    const userId = req.params.id    // El nombre final dependerá del nombre del parámetro en la ruta 
    
    try {
        const data = await songsModel.find ({ userId });

        // Verifica si el artista no existe y lanza el respectivo mensaje al cliente
        if ( ! data ) {
            return res.json ( { msg: 'la cancion de este artista no se encuentra registrado' } )
        }
        
        res.json ( data )
    } 
    catch (error) {
        console.error ( error )
        res.json ( { msg: 'Error: No se pudo encontrar el álbum' } )
    }
}

const removeSongsById = async (req, res) => {
    const songsId = req.params.id;

    try{ 

    const data = await songsModel.findByIdAndDelete (songsId);

    if(data == null){

            return res.json({msg: 'Error: La canción no existe'});
        }

    res.json(data);

    }

    catch (error){
        console.error( error);
        res.json({msg: 'Error: No se pudo encontrar la canción'});
    }
}

const updateSongsById = async (req, res) => {
    const songsId = req.params.id;  //Obteniendo el ID de la parametrizacion de la ruta
    const inputData = req.body; //Obtenemos el body de la peticion 
    try {
    const data = await songsModel.findByIdAndUpdate(songsId, inputData, { new:true} );

    res.json(data);
    }
    catch (error){
        console.error( error);
        res.json({msg: 'Error: No se pudo actualizar la canción'});
    }

}




export {
    createSongs,
    getAllSongs,
    getSongsById, 
    removeSongsById, 
    updateSongsById,
    getSongsByArtistId
}


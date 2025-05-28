import songsModel from "../schemas/songs.schema.mjs";

const createSongs = async (req, res) => {
    const inputData = req.body;
    // CONTROLA LAS EXCEPCIONES DE LA CONSULTA A LA BASE DE DATOS

    try{
    const registeredSongs = await songsModel.create( inputData); 

    console.log(registeredSongs);  //imprime en la consola
    res.status(201).json(registeredSongs); //Enviando la respuesta al cliente(

    }

    catch(error){
        console.error(error);
        res.status( 500 ).json({msg:'Error : No se pudo registar el producto'});
    }
}


const getAllSongs = async (req, res) => {
    
    try{
    const data = await songsModel.find({});
    res.json( data );
    }

    catch(error){
        console.error(error);
        res.json({msg: 'Error: No se pudo obtener el listado de producto'})
    }
}

const getSongsById = async (req, res) => {
    const songsId = req.params.id; //El nombre final dependera del nombre del parametro en la ruta 

    try{
    
        const data = await songsModel.findById(songsId);
        //  const data = await SongsModel.findOne({_id:SongsId
        //  });
        
        if(data == null){

            return res.json({msg: 'Error: El producto no se encuentra registrado'});
        }

        res.json(data); 

    }


    catch (error){
        console.error( error);
        res.json({msg: 'Error: No se pudo encontrar el producto'});
    }
}

const removeSongsById = async (req, res) => {

    const songsId = req.params.id;

    try{ 

    const data = await songsModel.findByIdAndDelete (songsId);

    if(data == null){

            return res.json({msg: 'Error: El producto no existe'});
        }

    res.json(data);

    }

    catch (error){
        console.error( error);
        res.json({msg: 'Error: No se pudo encontrar el producto'});
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
        res.json({msg: 'Error: No se pudo actualizar el producto'});
    }

}




export {
    createSongs,
    getAllSongs,
    getSongsById, 
    removeSongsById, 
    updateSongsById
}


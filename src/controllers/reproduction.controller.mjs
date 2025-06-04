import reproductionModel from "../schemas/reproduction.schema.mjs";

const createReproduction = async ( req, res ) => {
    const inputData = req.body;

    try {
        // Paso 1: Verificar si el usuario existe
        // const reproductionFound = await reproductionModel.findOne({ 
        //     cancionId: inputData.cancionId
        // });

        // if( reproductionFound ) {
        //     return res.status( 404 ).json({ msg: 'No pudo registrarse por que, la cancion ya existe.' });
        // }

        // Paso 2: Registrar el usuario
        const data = await reproductionModel.create( inputData );

        // Paso 3: Responder al cliente que se registro existosamente
        res.status( 201 ).json( data );
    } 
    catch ( error ) {
        console.error( error );
        res.status( 500 ).json({ msg: 'Error: No se pudo crear la reproducion' });
    }

}
const getAllReproduction = async (req, res) => {
    
    try {
        const data = await reproductionModel.find({});
        res.json(data);
    }
    catch (error){
        console.error(error);
        res.json({msg: "Error: No se pudo obtener las reproduciones de la canción"})

    }


    
}

const getReproductionById = async (req, res) => {
    const reproductionId = req.params.id;   //El nombre final dependera del nombre del  parametro de la ruta

    try {
        const data = await reproductionModel.findOne({_id: reproductionId});

        //verifica si el prudcto no existe y lanza el respectivo mensaje al cliente
        if( ! data ) {
            return res.json({msg:"Las reproduciones no se encuentran registradas"})
        }

        res.json(data);
    }
    catch (error){
        console.error(error);
        res.json({ msj: "Error:No se pudo encontrar las reproduciones"})
    }


    
}

const removeReproductionById = async (req, res) => {
    const reproductionId = req.params.id;
    try{
    const data = await reproductionModel.findByIdAndDelete(reproductionId)

    if( ! data ) {
            return res.json({msg:"Las reproduciones no se encuentran registradas"})
        }

    res.json(data);
    }
    catch(error){
        console.error(error)
        res.json({msg:"Error: No pudo eliminar las reproduciones de la canción "})
    }

}

const updateReproductionById = async (req, res) => {
    const reproductionId = req.params.id;
    const inputData = req.body;

    try{
        const data = await reproductionModel.findByIdAndUpdate (reproductionId, inputData,{new:true});
        res.json(data)
    }
    catch(error){
        console.error(error);
        res.json({msg: "Error: no se pudo actualizar las reproduciones"})
    }
    
    
}


//exponer las funcionalidades para ser usadas por otros archivos
export {
    createReproduction,
    getAllReproduction,
    getReproductionById,
    removeReproductionById,
    updateReproductionById
}
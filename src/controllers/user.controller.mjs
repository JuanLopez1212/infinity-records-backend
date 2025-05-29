import userModel from "../schemas/user.schema.mjs";

const createUser = async ( req, res ) => {
    const inputData = req.body;

    try {
        // Paso 1: Verificar si el usuario existe
        const userFound = await userModel.findOne({ 
            username: inputData.username,
            email: inputData.email
        });

        if( userFound ) {
            return res.status( 404 ).json({ msg: 'No pudo registrarse por que, el usuario ya existe.' });
        }

        // Paso 2: Registrar el usuario
        const data = await userModel.create( inputData );

        // Paso 3: Responder al cliente que se registro existosamente
        res.status( 201 ).json( data );
    } 
    catch ( error ) {
        console.error( error );
        res.status( 500 ).json({ msg: 'Error: No se pudo crear el usuario' });
    }

}
const getAllUser = async (req, res) => {
    
    try {
        const data = await userModel.find({});
        res.json(data);
    }
    catch (error){
        console.error(error);
        res.json({msg: "Error: No se pudo obtener el listado de usuarios"})

    }


    
}

const getUserById = async (req, res) => {
    const userId = req.params.id;   //El nombre final dependera del nombre del  parametro de la ruta

    try {
        const data = await userModel.findOne({_id: userId});

        //verifica si el prudcto no existe y lanza el respectivo mensaje al cliente
        if( ! data ) {
            return res.json({msg:"El usuario no se encuentra registrado"})
        }

        res.json(data);
    }
    catch (error){
        console.error(error);
        res.json({ msj: "Error:No se pudo encontrar el usuario"})
    }


    
}

const removeUserById = async (req, res) => {
    const userId = req.params.id;
    try{
    const data = await userModel.findByIdAndDelete(userId)

    if( ! data ) {
            return res.json({msg:"El usuario no se encuentra registrado"})
        }

    res.json(data);
    }
    catch(error){
        console.error(error)
        res.json({msg:"Error: No pudo eliminar el usuario "})
    }

}

const updateUserById = async (req, res) => {
    const userId = req.params.id;
    const inputData = req.body;

    try{
        const data = await userModel.findByIdAndUpdate (userId, inputData,{new:true});
        res.json(data)
    }
    catch(error){
        console.error(error);
        res.json({msg: "Error: no se pudo actualizar el usuario"})
    }
    
    
}


//exponer las funcionalidades para ser usadas por otros archivos
export {
    createUser,
    getAllUser,
    getUserById,
    removeUserById,
    updateUserById
}
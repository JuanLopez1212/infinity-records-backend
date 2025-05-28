import userModel from "../schemas/user.schema.mjs";

const createUser = async ( req, res ) => {
    const inputData = req.body;  //estraigo el objeto enviado

    //try:Controla las excepciones de la consulta a la base de datos 

    try {
    const registeredUser = await userModel.create(inputData);

    console.log(registeredUser)                                      //imprime en la consola
    res.send(registeredUser);                                       //enviando  la respuesta al cliente

    }
    catch (error) {
        console.error(error);
        res.json({msg:"Error: No se pudo registrar el usuario"});
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
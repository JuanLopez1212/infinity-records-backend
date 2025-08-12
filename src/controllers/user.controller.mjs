import bcrypt from 'bcrypt';

import userModel from "../schemas/user.schema.mjs";
import artistsModel from '../schemas/artists.schema.mjs';

const createUser = async ( req, res ) => {
    const inputData = req.body;

    try {
        // Paso 1: Verificar si el usuario existe
        const userFound = await userModel.findOne({ 
            username: inputData.username,
            email: inputData.email
        });

        if( userFound ) {
            return res.status( 404 ).json({ msg: 'No se pudo registrar porque el usuario ya existe.' });
        }

        //paso 2 encriptar la contrasena

        const salt = bcrypt.genSaltSync();
        console.log('salt', salt);           //genero una cadena aleatoria
        
        //mezclar y generar el hash
        const hashPassword = bcrypt.hashSync(
            inputData.password,               
            salt
        );
        console.log('hashPassword',hashPassword);
        inputData.password = hashPassword;
        
        // Paso 3: Registrar el usuario
        const data = await userModel.create( inputData );

        // Paso 4: Responder al cliente que se registro existosamente
        res.status( 201 ).json( data );
    } 
    catch ( error ) {
        console.error( error );
        res.status( 500 ).json({ msg: 'Error: No se pudo crear el usuario' });
    }

}

const getArtists = async ( req, res ) => {
    try {
        const artists = await userModel.find({ role: "artists" }).select("username")

        res.status(200).json({
            ok: true,
            artists
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({ msg: "Error: No se pudo obtener la lista de artistas"})
    }

}

const createNewUser = async (req, res) => {
    const { name, username, password, role, email, artists } = req.body;

    try {
        // 1️⃣ Verificar si ya existe usuario con mismo username o email
        const userFound = await userModel.findOne({
            $or: [{ username }, { email }]
        });
        if (userFound) {
            return res.status(400).json({ msg: 'El usuario ya existe.' });
        }

        // 2️⃣ Encriptar contraseña
        const salt = bcrypt.genSaltSync();
        const hashPassword = bcrypt.hashSync(password, salt);

        // 3️⃣ Crear usuario primero
        const newUser = await userModel.create({
            name,
            username,
            password: hashPassword,
            role,
            email
        });

        // 4️⃣ Si es artista, crear el perfil de artista con referencia a userId
        if (role === "artists" && artists) {
            const newArtist = await artistsModel.create({
                userId: newUser._id, // vínculo con el usuario
                stageName: artists.name,
                bio: artists.bio,
                genres: artists.genres,
                profileImage: artists.profileImage
            });

            // (Opcional) Si quieres guardar la referencia en el usuario
            await userModel.findByIdAndUpdate(newUser._id, { artistId: newArtist._id });
        }

        res.status(201).json({ msg: "Usuario creado correctamente", user: newUser });

    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error: No se pudo crear el usuario' });
    }
};

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
    updateUserById,
    getArtists,
    createNewUser
}
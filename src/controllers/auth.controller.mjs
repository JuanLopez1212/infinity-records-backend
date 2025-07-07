import bcrypt from 'bcrypt';

import userModel from "../schemas/user.schema.mjs";
import { generateToken } from '../helpers/jwt.helper.mjs';

const loginUser = async (req, res) => {
    // paso 1:obtener los datos del body
    const inputdata = req.body;

    // paso 2:vamos a verificar si el usuario existe (por favor registrese)
    const userFound = await userModel.findOne({ email: inputdata.email });

    if (!userFound) {
        return res.json({ msg: 'El usuario no exite. Por favor registrese' })
    }
    // paso 3: verificar la contraseña (si cohincide)
    const isAuthenticated = bcrypt.compareSync(
        inputdata.password,
        userFound.password
    );

    if (!isAuthenticated) {
        return res.json({ msg: 'contrasenia invalida' })
    }

    // paso 4:generar una credencial digital (token)
    const payload = {
        _id: userFound._id,
        name: userFound.name,
        email: userFound.email,
        role: userFound.role
    };

    const token = generateToken(payload);

    //paso 5: eliminar algunas propiedad que taren datos sensibles
    const objsUser = userFound.toObject();

    delete objsUser.password;
    delete objsUser.createdAt;
    delete objsUser.updatedAt;


    // paso 6:la respuesta al cliente
    res.json({
        token: token,
        user: objsUser
    });
}

const reNewToken = (req, res) => {
    const payload = req.authUser

    const token = generateToken(payload);

    res.json({token});
}

export {
    loginUser,
    reNewToken
}
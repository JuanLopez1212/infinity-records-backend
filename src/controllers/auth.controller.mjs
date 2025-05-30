import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import userModel from "../schemas/user.schema.mjs";

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
        name: userFound.name,
        email: userFound.email,
        role: userFound.role
    };

    const JWT_SECRET = '8oy54go87wyogewy';

    const token = jwt.sign(
        payload,
        JWT_SECRET,
        { expiresIn: '1h' }

    );

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

export {
    loginUser
}
// Estructura de datos de mi documento.

import mongoose from "mongoose";

// Definir la estructura de datos (nuestro documento) */
const userSchema = new mongoose.Schema({

    // Definir propiedades, atributos o campos (Documento)
    name: {
        type: String,
        required: [ true, 'El nombre del usuario es obligatorio' ]
    },
    // username, puede ser: un correo, # identificacion, alias */
    username: {
        type: String,
        required: [ true, 'El correo del usuario es obligatorio' ],
        unique: [ true, 'El correo ya esta registrado. Solo puede registrarse con un unico correo' ]
    },
    password: {
        type: String,
        required: [ true, 'La contraseña es obligatoria' ]
    },
    role: {
        type: String,
        default: 'registered'
    },
    email: {
        type: String,
        trim: true,
        required:[true, "El correo del usuario es obligatorio"],
        match:[/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/, 'Por favor, introduce un correo electrónico válido.']
    },

}, {
    timestamps: true, // Agrega las propiedades createdAt , updatedAt
    versionKey: false // contador __v de modificaciones del schema
});

//define el schema a una propiedad especifica
const userModel = mongoose.model(
    'users',           //Nombre de la colección a la que voy a asociar
    userSchema         //La estructura de datos a la que lo vamosa vincular
);

export default userModel   // exponemos el model para ser usado por cualquier otro archivo en mi aplicación
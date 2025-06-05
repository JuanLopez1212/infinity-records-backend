import mongoose from 'mongoose'

// Define la estructura del documento que se va a registrar 
const artistsSchema = new mongoose.Schema ( {


    name: {
        type: String,
        trim: true,
        required: [ true, 'El nombre del artista es obligatorio' ]   // Obligatorio
    },
    email: {
        type: String,
        trim: true,
        lowecase: true,
        unique: true,
        required: [ true, 'El email del artista es obligatorio' ],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Por favor, introduce un correo electrónico válido.']   // Obligatorio
    },
    password: {
        type: String,
        trim: true,
        min: [ 6, 'La contraseña debe tener al menos 6 caracteres' ],
        max: [ 20, 'La contraseña no puede tener más de 20 caracteres' ],
        required: [ true, 'La contraseña es obligatoria' ],
    },
    role: { 
        type: String,
        enum: [ 'admin', 'user', 'artist'  ],
        default: 'artist',
    },

    
}, {
    versionKey: false,
})

// Definir el modelo 
const artistsModel = mongoose.model ( 
    'artists',   // Define el nombre de la colección donde se guardarán los documentos 
    artistsSchema 
) 

// Exponemos el modelo al resto de la aplicación
export default artistsModel
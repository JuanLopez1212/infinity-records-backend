// Estructura de datos de mi documento.

import mongoose from "mongoose";

// Definir la estructura de datos (nuestro documento) */
const reproductionSchema = new mongoose.Schema({

    // Definir propiedades, atributos o campos (Documento)
    cancionId: {
        type: String,
        ref: 'song',
        unique: true,
        required: true,
        trim: true
    },
    usuarioId: {
        type: String,
        ref: 'Usuario',
        required: false,
        trim: true  // Puede ser anónimo
    },
    fecha: {
        type: Date,
        default: Date.now
    },
    dispositivo: {
        type: String,
        enum: ['web', 'mobile', 'otro'],
        default: 'web',
        trim:true
    }
    ,

}, {
    timestamps: true, // Agrega las propiedades createdAt , updatedAt
    versionKey: false // contador __v de modificaciones del schema
});

//define el schema a una propiedad especifica
const reproductionModel = mongoose.model(
    'reproduction',           //Nombre de la colección a la que voy a asociar
    reproductionSchema         //La estructura de datos a la que lo vamosa vincular
);

export default reproductionModel   // exponemos el model para ser usado por cualquier otro archivo en mi aplicación
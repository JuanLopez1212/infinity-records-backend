// Estructura de datos de mi documento.

import mongoose from "mongoose";

// Definir la estructura de datos (nuestro documento) */
const songsSchema = new mongoose.Schema({

    // Definir propiedades, atributos o campos (Documento)
    title: {
        type: String,
        required: [ true, 'El titulo de la canción es obligatorio' ]
    }, 
    // username, puede ser: un correo, # identificacion, alias */
    cover_url: {
        type: String,
        required: [ true, 'la portada de la canción es obligatoria' ]
    },
    file_url: {
        type: String,
        required: [ true, 'El archivo es obligatorio' ]
    },
    // genre: {
    //     type: String,
    //     required:[true, 'El genero es obligatorio'],
    //     trim:true
    // },
    release_date: {
        type: Date,
        trim: true,
        required:[true, "La fecha de lanzamiento es obligatoria"],  
    },
    artistId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'artists',
        required: true
    },
    albumId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'albums',
        required: false
    },



}, {
    timestamps: true, // Agrega las propiedades createdAt , updatedAt
    versionKey: false // contador __v de modificaciones del schema
});

//define el schema a una propiedad especifica
const songsModel = mongoose.model(
    'song',           //Nombre de la colección a la que voy a asociar
    songsSchema         //La estructura de datos a la que lo vamosa vincular
);

export  default songsModel  // exponemos el model para ser usado por cualquier otro archivo en mi aplicación


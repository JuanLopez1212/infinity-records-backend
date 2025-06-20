import mongoose from "mongoose";

// Define la estructura del documento que se va a registrar
const artistsSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    
    stageName:{ 
        type: String,
    },

    bio:{
       type: String,
    },

    genres:{
        type: [String]
    },

    profileImage: {
        type: String,
    },


  },

  {
    versionKey: false,
    timestamps: true
  }
);

// Definir el modelo
const artistsModel = mongoose.model(
  "artists", // Define el nombre de la colección donde se guardarán los documentos
  artistsSchema
);

// Exponemos el modelo al resto de la aplicación
export default artistsModel;

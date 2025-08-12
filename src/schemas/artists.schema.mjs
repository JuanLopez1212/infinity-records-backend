import mongoose from "mongoose";

// Define la estructura del documento que se va a registrar
const artistsSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    
    stageName:{ 
        type: String,
        required: [true, "El nombre artistico es obligatorio"]
    },

    bio:{
       type: String,
       maxlength: 500
    },

    genres:{
        type: [String],
        default: [] 
    },

    profileImage: {
        type: String,
        match: [/^https?:\/\//, "Debe ser una URL válida"] 
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

import mongoose from "mongoose";

// Define la estructura del documento que se va a registrar
const artistsSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    
    stageName: { 
      type: String,
      required: [true, "El nombre artístico es obligatorio"]
    },

    bio: {
      type: String,
      maxlength: 500,
      required: [true, "La Descripcion del artist es obligatoria"]
    },

    genres: {
      type: [String],
      default: [],
      required: [true, "El genero es obligatorio"] 
    },

    profileImage: {
      type: String,
      match: [/^https?:\/\//, "Debe ser una URL válida"] 
    },

    // Redes sociales del artista
    socials: {
      instagram: {
        type: String,
        default: null
      },
      youtube: {
        type: String,
        default: null
      },
      facebook: {
        type: String,
        default: null
      }
    }

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

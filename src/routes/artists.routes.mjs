import express from 'express'  // Importo la dependencia 
import { createArtist, getAllArtists, getArtistById } from '../controllers/artists.controller.mjs'

const router = express.Router()  // Invocando el Router de Expreess

// Definir las rutas para la entidad Product 
router.post ( '/api/artists', createArtist )
router.get ( '/api/artists', getAllArtists)
router.get ( '/api/artists/:id', getArtistById ) // :id (Parametrizar la ruta: Creamos una especie de variable) 



// Exponer el router de este archivo para ser usado por otros en la aplicación
export default router
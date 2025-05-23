import express from 'express'  // Importo la dependencia 
import { createArtist } from '../controllers/artists.controller.mjs'

const router = express.Router()  // Invocando el Router de Expreess

// Definir las rutas para la entidad Product 
router.post ( '/api/artists', createArtist )



// Exponer el router de este archivo para ser usado por otros en la aplicación
export default router
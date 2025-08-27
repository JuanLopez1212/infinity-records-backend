import express from 'express'  // Importo la dependencia 
import { createArtist, getAllArtists, getArtistById, getArtistByUserId, removeArtistById, updateArtistById } from '../controllers/artists.controller.mjs'

const router = express.Router()  // Invocando el Router de Expreess

// Definir las rutas para la entidad Product 
router.post ( '/api/artists', createArtist )
router.get ( '/api/artists', getAllArtists)
// :id (Parametrizar la ruta: Creamos una especie de variable)
router.get ( '/api/artists/:id', getArtistById ) 
router.delete ( '/api/artists/:id', removeArtistById )
router.patch ( '/api/artists/:id', updateArtistById )
router.get("/api/artists/user/:userId", getArtistByUserId);   //Actualización parcial



// Exponer el router de este archivo para ser usado por otros en la aplicación
export default router
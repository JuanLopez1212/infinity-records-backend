// File Routes: Sirve para definir los Endpoints de una entidad
import express from 'express'   
import { createSongs,getAllSongs,getPublicSongsByArtistId,getSongsByArtistId,getSongsById,removeSongsById,updateSongsById } from '../controllers/songs.controller.mjs';
import { authUser } from '../middlewares/auth-user.middleware.mjs';
// Importamos Router de express
const router = express.Router ();       // Invocando Router (preparándolo para definir rutas)

// Define las rutas de acceso 


router.post('/api/songs', authUser, createSongs);
router.get('/api/songs', getAllSongs);
router.get('/api/songs/:id', getSongsById);  //:id = Parametrizar la ruta: Creamos una especie de variable
router.delete('/api/songs/:id', authUser, removeSongsById);
router.patch('/api/songs/:id', authUser, updateSongsById);
router.get('/api/songs/users/:id', getSongsByArtistId); //Actulizacion parcial 
router.get('/api/songs/users/:id', getPublicSongsByArtistId); //Actulizacion parcial 



export default router        // Exportando todas las rutas de esta identidad para ser usadas en cualquier parte de la aplicación


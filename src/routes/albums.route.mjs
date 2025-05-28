import express from 'express' 
import { createAlbum } from '../controllers/albums.controller.mjs'

const router = express.Router ()

// Define las rutas para la entidad "albums"
router.post ( '/api/albums', createAlbum )


export default router 
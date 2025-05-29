import express from 'express' 
import { createAlbum, getAlbumById, getAllAlbums, removeAlbumById, updateAlbumById } from '../controllers/albums.controller.mjs'

const router = express.Router ()

// Define las rutas para la entidad "albums"
router.post ( '/api/albums', createAlbum )
router.get ( '/api/albums', getAllAlbums )
router.get ( '/api/albums/:id', getAlbumById )
router.delete ( '/api/albums/:id', removeAlbumById)
router.patch ( '/api/albums/:id', updateAlbumById)


export default router 
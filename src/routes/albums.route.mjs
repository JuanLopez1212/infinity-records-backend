import express from 'express' 
import { createAlbum, getAlbumById, getAllAlbums, removeAlbumsById, updateAlbumById } from '../controllers/albums.controller.mjs'
import { authUser } from '../middlewares/auth-user.middleware.mjs'

const router = express.Router ()

// Define las rutas para la entidad "albums"
router.post ( '/api/albums', authUser, createAlbum )
router.get ( '/api/albums', getAllAlbums)
router.get ( '/api/albums/:id', getAlbumById )
router.delete ( '/api/albums/:id', authUser, removeAlbumsById )
router.patch ( '/api/albums/:id', authUser, updateAlbumById )



export default router 
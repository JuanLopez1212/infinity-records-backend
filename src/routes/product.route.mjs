// File Routes: Sirve para definir los Endpoints de una entidad
import { Router } from 'express'      // Importamos Router de express
const router = Router ()       // Invocando Router (preparándolo para definir rutas)

// Define las rutas de acceso 
router.get ( '/api/products', ( req, res ) => {
    res.send ( 'Obtiene todos los productos' )
}) 
router.post ( '/api/products', ( req, res ) => {
    res.send ( 'Crear un producto' )
})
router.patch ( 'api/products', ( req, res ) => {
    res.send ( 'Actualización parcial de un producto' )
})
router.put ( '/api/products', ( req, res ) => {
    res.send ( 'Actualización total de un producto' )
})
router.delete ( '/api/products', ( req, res ) => {
    res.send ( 'Elimina un producto' )
})


export default router        // Exportando todas las rutas de esta identidad para ser usadas en cualquier parte de la aplicación

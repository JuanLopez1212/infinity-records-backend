// const express = require ( 'express' )
import express from 'express'
import product from './routes/product.route.mjs' // Importando las rutas de la entidad


const app = express ( )

app.use ( product )

app.listen ( 3000, () => {
    console.log ( 'Servidor corriendo en http//localhost:3000' )
})
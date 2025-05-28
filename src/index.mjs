// const express = require ( 'express' )
import express from 'express'
// import products from './routes/products.route.mjs' // Importando las rutas de productos
import albums from './routes/albums.route.mjs' // Importando las rutas de albums
import dbConnect from './config/mongo.config.mjs' // Importando la configuración de la base de datos


const app = express ( )

// Invocar la configuración de la conexión a la base de datos	
dbConnect ()

// Endpoint: http//localhost:3000/
// app.use ( products )
app.use ( albums )

app.listen ( 3000, () => {
    console.log ( 'Servidor corriendo en http//localhost:3000' )
})
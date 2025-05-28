// const express = require ( 'express' )
import express from 'express'
import user from './routes/user.route.mjs' // Importando las rutas de la entidad
import dbConnect from './config/mongo.config.mjs' // Importando la configuración de la base de datos


const app = express ( )

// Invocar la configuración de la conexión a la base de datos	
dbConnect ()

app.use ( express.json ( ) ) 

// Endpoint: http//localhost:3000/
app.use ( user )

app.listen ( 3000, () => {
    console.log ( 'Servidor corriendo en http//localhost:3000' )
})
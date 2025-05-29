// const express = require ( 'express' )
import express from 'express'
import reproduction from './routes/reproduction.route.mjs' // Importando las rutas de la entidad
import dbConnect from './config/mongo.config.mjs' // Importando la configuración de la base de datos


const app = express ( )

// Invocar la configuración de la conexión a la base de datos	
dbConnect ()

// Endpoint: http//localhost:3000/
app.use ( reproduction );

app.listen ( 3000, () => {
    console.log ( 'Servidor corriendo en http//localhost:3000' )
})
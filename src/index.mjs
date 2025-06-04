// const express = require ( 'express' )
import express from 'express'
import artists from './routes/artists.routes.mjs'
import albums from './routes/albums.route.mjs' // Importando las rutas de albums
import dbConnect from './config/mongo.config.mjs' // Importando la configuración de la base de datos


const app = express ()

// Invocar la configuración de la conexión a la base de datos	
dbConnect ()

app.use ( express.json () ) // Habilito el interprete de formato JSON

// Endpoint: http//localhost:3000/
app.use ( artists ) // Implementando las rutas de artistas
app.use ( albums )


app.listen ( 3000, () => {
    console.log ( 'Servidor corriendo en http://localhost:3000' )
})
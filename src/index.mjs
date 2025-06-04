// const express = require ( 'express' )
import express from 'express'

import events from "./routes/events.route.mjs"
import user from './routes/user.route.mjs' // Importando las rutas de la entidad
import artists from './routes/artists.route.mjs'
import albums from './routes/albums.route.mjs' // Importando las rutas de albums
import auth from'./routes/auth.router.mjs';


import dbConnect from './config/mongo.config.mjs' // Importando la configuración de la base de datos

const app = express()

// Invocar la configuración de la conexión a la base de datos	
dbConnect()


app.use(express.json());


// Endpoint: http//localhost:3000/

app.use(events);
app.use(artists) // Implementando las rutas de artistas
app.use(albums)
app.use ( user );
app.use(auth); //vincula las rutas para la identidad auth


app.listen ( 3000, () => {
    console.log ( 'Servidor corriendo en http//localhost:3000' )

})
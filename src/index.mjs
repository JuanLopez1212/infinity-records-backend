// const express = require ( 'express' )
import express from 'express'
import cors from 'cors'

import events from "./routes/events.route.mjs"
import user from './routes/user.route.mjs' // Importando las rutas de la entidad
import artists from './routes/artists.route.mjs'
import albums from './routes/albums.route.mjs' // Importando las rutas de albums
import auth from'./routes/auth.route.mjs';
import songs from './routes/songs.route.mjs' // Importando las rutas de la entidad
import reproduction from './routes/reproduction.route.mjs' // Importando las rutas de la entidad


import dbConnect from './config/mongo.config.mjs' // Importando la configuración de la base de datos


const app = express()
const PORT = process.env.PORT ?? 3000

dbConnect()


// Endpoint: http//localhost:3000/
app.use(cors ());
app.use(express.json());
app.use ( songs );
app.use ( reproduction );
app.use(events);
app.use(artists) // Implementando las rutas de artistas
app.use(albums)
app.use ( user );
app.use(auth); //vincula las rutas para la identidad auth


app.listen ( PORT, () => {
    console.log ( `Servidor corriendo en http//localhost:${ PORT } ${ process.env.DB_URI}` )

})


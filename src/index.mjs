// const express = require ( 'express' )
import express from 'express'

import songs from './routes/songs.mjs' // Importando las rutas de la entidad
import reproduction from './routes/reproduction.route.mjs' // Importando las rutas de la entidad
import artists from './routes/artists.routes.mjs'
import albums from './routes/albums.route.mjs'
import dbConnect from './config/mongo.config.mjs' // Importando la configuración de la base de datos


const app = express();

 // Importando las rutas de albums
 // Importando la configuración de la base de datos


// Invocar la configuración de la conexión a la base de datos	
dbConnect ()


app.use(express.json());

// Endpoint: http//localhost:3000/

app.use ( songs );
app.use ( reproduction );
app.use ( artists ) // Implementando las rutas de artistas
app.use ( albums )


app.listen ( 3000, () => {
    console.log ( 'Servidor corriendo en http//localhost:3000' )
})




// Endpoint: http//localhost:3000/






// const express = require ( 'express' )
import express from 'express'
import user from './routes/user.route.mjs' // Importando las rutas de la entidad
import dbConnect from './config/mongo.config.mjs' // Importando la configuración de la base de datos
import auth from'./routes/auth.router.mjs';

const app = express ( )

// Invocar la configuración de la conexión a la base de datos	
dbConnect ()

app.use ( express.json ( ) ) 

// Endpoint: http//localhost:3000/
app.use ( user );
app.use(auth); //vincula las rutas para la identidad auth

app.listen ( 3000, () => {
    console.log ( 'Servidor corriendo en http//localhost:3000' )
})
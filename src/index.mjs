// const express = require ( 'express' )
import express from 'express'
import events from "./routes/events.route.mjs"
import product from './routes/product.route.mjs' // Importando las rutas de la entidad
import dbConnect from './config/mongo.config.mjs' // Importando la configuración de la base de datos


const app = express ( )

// Invocar la configuración de la conexión a la base de datos	
dbConnect ()

app.use(express.json());

// Endpoint: http//localhost:3000/
app.use ( product )
app.use (events);

app.listen ( 3000, () => {
    console.log ( 'Servidor corriendo en http//localhost:3000' )
})
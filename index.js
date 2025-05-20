// const express = require ( 'express' )
import express from 'express'
const app = express ( )

app.get ( '/', ( req, res ) => {
    res.send ( '<h1>Home</h1>')
})
app.get ( '/about-us' , ( req, res ) => {
    res.send ( '<h1>About Us</h1>')
})
app.get ( '/contact' , ( req, res ) => {
    res.send ( '<h1>Contact</h1>')
})

app.listen ( 3000, () => {
    console.log ( 'Servidor corriendo en http//localhost:3000' )
})
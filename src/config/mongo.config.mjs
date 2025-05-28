import mongoose from 'mongoose'

// Define una función asincrona para definir la configuración del ODM Mongoose par usar MongoDB
async function dbConnect () {

    try {
        await mongoose.connect ( 'mongodb://localhost:27017/db-infinity-records', {} )

        console.log ( 'Base de datos conectada exitosamente' )
    }
    catch (error) {
        console.error ( error )
        console.log ( 'Error al conectarse a la base de datos' )
    }

    // mongoose.connect ( 'mongodb://127.0.0.1:27017/db-infinity-records' )
    // .then (() => console.log ( 'Conectado'))
    // .catch ( () => { console.log ( 'Error al conectarse a la base de datos' )})
}    

export default dbConnect
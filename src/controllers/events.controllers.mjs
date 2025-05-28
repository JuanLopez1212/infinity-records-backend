import eventsModel from "../schemas/events.schema.mjs";

const createEvents = async (req, res) => {
    const inputData = req.body;
    // CONTROLA LAS EXCEPCIONES DE LA CONSULTA A LA BASE DE DATOS

    try{
    const registeredEvents = await eventsModel.create( inputData); 

    console.log(registeredEvents);  //imprime en la consola
    res.status(201).json(registeredEvents); //Enviando la respuesta al cliente(

    }

    catch(error){
        console.error(error);
        res.status( 500 ).json({msg:'Error : No se pudo registar el evento'});
    }
}


const getAllEvents = async (req, res) => {
    
    try{
    const data = await eventsModel.find({});
    res.json( data );
    }

    catch(error){
        console.error(error);
        res.json({msg: 'Error: No se pudo obtener el listado de los eventos'})
    }
}

const getEventsById = async (req, res) => {
    const eventsId = req.params.id; //El nombre final dependera del nombre del parametro en la ruta 

    try{
    
        const data = await eventsModel.findById(eventsId);
        //  const data = await SongsModel.findOne({_id:SongsId
        //  });
        
        if(data == null){

            return res.json({msg: 'Error: El evento no se encuentra registrado'});
        }

        res.json(data); 

    }


    catch (error){
        console.error( error);
        res.json({msg: 'Error: No se pudo encontrar el evento'});
    }
}

const removeEventsById = async (req, res) => {

    const eventsId = req.params.id;

    try{ 

    const data = await eventsModel.findByIdAndDelete (eventsId);

    if(data == null){

            return res.json({msg: 'Error: El evento no existe'});
        }

    res.json(data);

    }

    catch (error){
        console.error( error);
        res.json({msg: 'Error: No se pudo encontrar el evento'});
    }
}

const updateEventsById = async (req, res) => {
    const eventsId = req.params.id;  //Obteniendo el ID de la parametrizacion de la ruta
    const inputData = req.body; //Obtenemos el body de la peticion 
    try {
    const data = await eventsModel.findByIdAndUpdate(eventsId, inputData, { new:true} );

    res.json(data);
    }
    catch (error){
        console.error( error);
        res.json({msg: 'Error: No se pudo actualizar el evento'});
    }

}




export {
    createEvents,
    getAllEvents,
    getEventsById, 
    removeEventsById, 
    updateEventsById
}
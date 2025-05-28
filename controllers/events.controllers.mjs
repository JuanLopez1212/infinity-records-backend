import eventsModel from "../schemas/events.schema.mjs"

const createEvents = async (req, res) => {
    const inputdata = req.body;

    const data = await eventsModel.create(inputdata);
    res.status(201).json(data);
}


export {
    createEvents
}
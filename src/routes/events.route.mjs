import express from 'express';
import { createEvents,getAllEvents,getEventsById,removeEventsById,updateEventsById } from '../controllers/events.controllers.mjs';
const router = express.Router();

router.post('/api/events',createEvents);
router.get('/api/events', getAllEvents);
router.get('/api/events/:id', getEventsById);  
router.delete('/api/events/:id', removeEventsById);
router.patch('/api/events/:id', updateEventsById)  



export default router        





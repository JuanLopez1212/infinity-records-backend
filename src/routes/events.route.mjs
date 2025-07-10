import express from 'express';
import { createEvents,getAllEvents,getEventsByArtistId,getEventsById,removeEventsById,updateEventsById } from '../controllers/events.controllers.mjs';
import { authUser } from '../middlewares/auth-user.middleware.mjs';
const router = express.Router();

router.post('/api/events', authUser, createEvents);
router.get('/api/events', getAllEvents);
router.get('/api/events/:id', getEventsById);  
router.delete('/api/events/:id',authUser, removeEventsById);
router.patch('/api/events/:id', authUser, updateEventsById) 
router.get ( '/api/events/artist/:id', getEventsByArtistId )



export default router        





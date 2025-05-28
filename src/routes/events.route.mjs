import express from "express";
import { createEvents } from "../../controllers/events.controllers.mjs";
const router = express.Router();

router.post("/api/events", createEvents );

export default router;
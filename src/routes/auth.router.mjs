import express from "express";
import { createUser } from "../controllers/user.controller.mjs";

const router = express.Router();

//define las rutas para la entidad auth
router.post('/api/login', createUser);


export default router;
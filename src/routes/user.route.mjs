import express from "express";   //importo dependencia
import { createUser, getAllUser, getUserById, removeUserById, updateUserById } from "../controllers/user.controller.mjs";

const router = express.Router(); //invocando el router de express

//Definir las rutas para la entidad Product.
router.post( "/api/user" , createUser );
router.get ("/api/user", getAllUser);
router.get("/api/user/:id", getUserById);
router.delete("/api/user/:id",removeUserById);             // id (parametrizar la ruta): creamos una especie de variable 
router.patch("/api/user/:id", updateUserById);

//exponer el router de este archivo para ser usado por otros en la aplicacion
export default router;
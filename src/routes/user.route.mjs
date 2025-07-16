import express from "express";   //importo dependencia
import { createUser, getAllUser, getArtists, getUserById, removeUserById, updateUserById } from "../controllers/user.controller.mjs";

const router = express.Router(); //invocando el router de express

//Definir las rutas para la entidad Product.
router.post( "/api/users" , createUser );
router.get ("/api/users", getAllUser);
router.get("/api/users/:id", getUserById);
router.delete("/api/users/:id",removeUserById);             // id (parametrizar la ruta): creamos una especie de variable 
router.patch("/api/users/:id", updateUserById);
router.get( "/api/users/role/artist", getArtists )

//exponer el router de este archivo para ser usado por otros en la aplicacion
export default router;
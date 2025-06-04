import express from "express";   //importo dependencia
import { createReproduction, getAllReproduction, getReproductionById, removeReproductionById, updateReproductionById } from "../controllers/reproduction.controller.mjs";

const router = express.Router(); //invocando el router de express

//Definir las rutas para la entidad Product.
router.post( "/api/reproduction" , createReproduction );
router.get ("/api/reproduction", getAllReproduction);
router.get("/api/reproduction/:id", getReproductionById);
router.delete("/api/reproduction/:id",removeReproductionById);             // id (parametrizar la ruta): creamos una especie de variable 
router.patch("/api/reproduction/:id", updateReproductionById);

//exponer el router de este archivo para ser usado por otros en la aplicacion
export default router;
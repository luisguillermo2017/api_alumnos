import { Router } from "express";

import {
    getAll,
    getById,
    deleteAlumnoFisico,
    deleteAlumnoLogico,
    create,
    update
    } from "../controllers/alumnos.controller.js";

const router = Router();

//CRUD

//C
router.post("/alumnos/create", create);

//Read simple
router.post("/alumnos/getAll", getAll );

//Read con parametro
router.post("/alumnos/getById", getById );

//U
router.post("/alumnos/update", update);

//Delete fisico
router.post("/alumnos/deleteFisico", deleteAlumnoFisico);

//Delete logico
router.post("/alumnos/deleteLogico", deleteAlumnoLogico);

export default router;

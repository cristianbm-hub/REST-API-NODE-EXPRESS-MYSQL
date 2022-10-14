import { Router } from "express";
import { getFilms, getFilm, createFilm, updateFilm, deleteFilm } from "../controllers/marvel_vs_dc.js";

const router = Router();

router.get("/films", getFilms );

router.get("/employees/:id", getFilm );

router.post("/employees", createFilm );

router.patch("/employees/:id", updateFilm );

router.delete("/employees/:id", deleteFilm );

export default router;

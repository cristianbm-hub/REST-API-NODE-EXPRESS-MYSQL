import { Router } from "express";
import { getFilms, getFilm, createFilm, updateFilm, deleteFilm } from "../controllers/marvel_vs_dc.js";

const router = Router();

router.get("/films", getFilms );

router.get("/films/:id", getFilm );

router.post("/films", createFilm );

router.patch("/films/:id", updateFilm );

router.delete("/films/:id", deleteFilm );

export default router;

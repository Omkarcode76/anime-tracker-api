import { Router } from "express";
import {
  getAnime,
  getAnimeById,
  postAnime,
  deleteAnime,
  updateAnime,
  deleteAllAnime,
} from "../controller/animeController.js";
import signUp from "../controller/userController.js";

const animeRouter = Router();

animeRouter.get("/", getAnime);
animeRouter.get("/:id", getAnimeById);

animeRouter.post("/", postAnime);
animeRouter.post("/login", signUp);

animeRouter.delete("/drop", deleteAllAnime);
animeRouter.delete("/:id", deleteAnime);

animeRouter.put("/:id", updateAnime);

export default animeRouter;

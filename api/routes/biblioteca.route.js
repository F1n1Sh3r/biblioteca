import express from "express";
import {
  obtemTodosOsLivros
} from "./../services/controllers/livros.controllers.js";

const router = express.Router();

router.route("/").get(obtemTodosOsLivros)
//.post(createNote)
;
router.route("/:id").get(getSingleNote).patch(updateNote).delete(deleteNote);

export default router;

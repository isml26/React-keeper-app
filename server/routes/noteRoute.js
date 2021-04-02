import express from "express";
const router = express.Router();
import {getNotes,createNote,deleteNote} from "../controllers/noteController.js"

router.get("/",getNotes);
router.post("/",createNote);
router.delete("/:id",deleteNote);
export default router;






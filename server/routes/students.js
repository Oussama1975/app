import express from "express";
// import {getStudents, getStudent, deleteStudents, addStudents, updateStudents } from "../controllers/students.js";
import { getStudents, getStudent, deleteStudents, createStudents, updateStudents} from "../controllers/students.js";

const router = express.Router();

// * Get students
router.get("/", getStudents);

// * Get student by id :
router.get("/:id", getStudent);

// * Delete student :
router.delete("/delete/:id", deleteStudents);

// * Add student :
router.post("/create",  createStudents);

// * Update student :
router.put("/update/:id", updateStudents);

export default router;

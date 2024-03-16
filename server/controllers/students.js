import express from "express";
import { v4 as uuidv4 } from "uuid";
import {
  Students,
  findStudents,
  findStudentsById,
  deleteStudentsById,
  updateStudentById,
  addStudent,
} from "../models/students.js";
import mongoose from "mongoose";

// * Get students:
export const getStudents = async (request, response) => {
  const students = await findStudents();
  // return students;
  response.send(students);
  // console.log(students);
};

// * Get student by id :
export const getStudent = async (request, response) => {
  try {
    const id = request.params.id;
    const student = await findStudentsById(id);
    response.send(student);
  } catch (error) {
    response.status(404).send({ error: error.message }); // Send a custom error message
  }
};

// * Delete student :
export const deleteStudents = async (request, response) => {
  try {
    const id = request.params.id;
    await deleteStudentsById(id);
    response.send(`student with id ${id} has been deleted.... `);
  } catch (err) {
    response.send(err);
  }
};

// * Create student :
export const createStudents = async (request, response) => {
  try {
    //! Find if the student already exists in the database
    const data = request.body;
    const studentobj = await addStudent(data);
    if (studentobj) {
      response.send(studentobj);
    } else {
      response.send("Student already exists with the same id");
    }
  } catch (err) {
    response.send(err);
  }
};

// * Update student :
export const updateStudents = async (request, response) => {
  try {
    const id = request.params.id;
    const data = request.body;
    await updateStudentById(id, data);
    response.send(`student with id ${id} has been updated.... `);
  } catch (err) {
    response.send(err);
  }
};

const { CREATE_NEW_MENTOR, GET_ALL_MENTORS, ASSIGN_STUDENTS, SHOW_ALL_STUDENTS } = require("../routers/router");

const mentorRouter = require("express").Router();

mentorRouter.get("/", GET_ALL_MENTORS)                 
    .post("/create", CREATE_NEW_MENTOR)                
    .get("/:id", SHOW_ALL_STUDENTS)                     
    .put("/assign/:id", ASSIGN_STUDENTS)                
module.exports = mentorRouter
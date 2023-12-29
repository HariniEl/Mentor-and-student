const { CREATE_NEW_STUDENT, GET_ALL_STUDENTS, ASSIGN_OR_CHANGE_MENTOR, PREVIOUS_MENTOR } = require("../routers/router");

const studentRouter = require("express").Router();

studentRouter.get("/", GET_ALL_STUDENTS)                  
    .post("/Create", CREATE_NEW_STUDENT)                    
    .put("/AssignorChange/:id", ASSIGN_OR_CHANGE_MENTOR)     
    .get('/previousMentor/:id', PREVIOUS_MENTOR)            
module.exports = studentRouter
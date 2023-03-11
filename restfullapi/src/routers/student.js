const express = require('express');
//1. create a new Router 
const router = new express.Router();
const Student = require('../models/students')

//2. we need to define new router.
// create a new students

// router.post("/students",(req,res) =>{
    
//     console.log(req.body);
//     const user = new Student(req.body);
//     user.save().then(() =>{
//         res.status(201).send(user);
//     }).catch((err) => {
//         res.status(400).send(err)
//     })

//     //res.send("hello from the other sides");

// })

router.post("/students", async(req,res) =>{
    try{
        const user = new Student(req.body);

        const createUser = await user.save();
        res.status(201).send(createUser);

    }catch(err){
        res.status(400).send(err);
    }
})

//read the data of student registeration by using GET method
router.get('/students/',async(req,res) =>{
    try{
      const studentsData = await Student.find()
      res.send(studentsData);
    }
    catch(err){
      res.send(err);
    }
})

// get individual student data by using id

router.get('/students/:id', async(req,res) =>{
    try{
        const _id = req.params.id;
        const studentData = await Student.findById(_id);
        res.send(studentData);

    }catch(err){
       res.send(err);
    }
})

//update detail of students by id

router.patch("/students/:id", async(req,res) =>{

    try{
        const _id = req.params.id;
        const studentUpdate = await Student.findByIdAndUpdate(_id,req.body,{
            new : true
        })
        res.send(studentUpdate);
    }catch(err){
        res.status(404).send(studentUpdate);
    }
})

// delete student by id
router.delete("/students/:id/", async(req,res) =>{
    try{
      const _id = req.params.id;
      const deleteStudent = await Student.findByIdAndDelete(_id);
      if( ! _id){
        res.status(404).send();
      }
      res.send(deleteStudent);
    }catch(err){
        res.status(500).send(err);
    }
    
})





 module.exports = router;
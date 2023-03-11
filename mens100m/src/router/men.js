const express = require('express')
const router = new express.Router();
const MensRanking = require('../models/mens');


//insert data
router.post("/mens", async (req,res) =>{
    try{
       const addRecord = new MensRanking(req.body);
       console.log(req.body);
       const insertData = await addRecord.save();

       res.status(201).send(insertData);
    }catch(e){
         res.status(400).send(e);
      }
    })

    //get data
    router.get("/mens", async (req,res) =>{
        try{
            const readData =await MensRanking.find({}).sort({"name" : 1});
           res.status(201).send(readData);
        }catch(e){
             res.status(400).send(e);
          }
    })
 
    //get data by id
    router.get("/mens/:id", async (req,res) =>{
        try{
            const _id = req.params.id;
            const getMen =await MensRanking.findById(_id);
           res.status(201).send(getMen);
        }catch(e){
             res.status(400).send(e);
          }
    })  
    
    //update data by id
    router.patch("/mens/:id", async (req,res) =>{
        try{
            const _id = req.params.id;
            const updateData =await MensRanking.findByIdAndUpdate(_id,req.body,{
                new : true   // direct updated record showing
            });
           res.status(201).send(updateData);
        }catch(e){
             res.status(500).send(e);
          }
    }) 

    //delete data by id
    router.delete("/mens/:id", async (req,res) =>{
        try{
            const _id = req.params.id;
            const deleteData =await MensRanking.findByIdAndDelete(_id);
           res.status(201).send(deleteData);
        }catch(e){
             res.status(500).send(e);
          }
    }) 


    module.exports = router;
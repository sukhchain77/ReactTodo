const express = require("express");
require("../src/database/db")
const app = express();

const port = process.env.PORT || 8000;
const MensRanking = require('../src/models/mens');

app.use(express.json());

//insert data
app.post("/mens", async (req,res) =>{
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
    app.get("/mens", async (req,res) =>{
        try{
            const readData =await MensRanking.find({});
           res.status(201).send(readData);
        }catch(e){
             res.status(400).send(e);
          }
    })
 
    //get data by id
    app.get("/mens/:id", async (req,res) =>{
        try{
            const _id = req.params.id;
            const getMen =await MensRanking.findById(_id);
           res.status(201).send(getMen);
        }catch(e){
             res.status(400).send(e);
          }
    })  
    
    //update data by id
    app.patch("/mens/:id", async (req,res) =>{
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
    app.delete("/mens/:id", async (req,res) =>{
        try{
            const _id = req.params.id;
            const deleteData =await MensRanking.findByIdAndDelete(_id);
           res.status(201).send(deleteData);
        }catch(e){
             res.status(500).send(e);
          }
    }) 

app.listen(port, () =>{
    console.log(`Connection is at port ${port}`);
})

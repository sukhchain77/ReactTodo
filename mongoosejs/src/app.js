const mongoose = require('mongoose');
const validator = require('validator');

mongoose.connect('mongodb://127.0.0.1:27017/ttchannel')
.then(() =>console.log("Success"))
.catch((err) =>console.log(err))


const playListSchema = new mongoose.Schema({
    name: {
        type:  String,
        required : true,
        //lowercase: true,
    },
    ctype: String,
    videos: {
        type :Number,
        validate(value){
        if(value < 0){
            throw new Error('videos count should not be negative')
        }
    }
    },
    author: String,
    // email: {
    //     type :String,
    //     required : true,
    //     unique : true ,
    //     validate(value){
    //         if(validator.isEmail(value)){
    //             throw new Error("Email is invalid");
    //         }
    //     }
    // },
    active: Boolean,
    date: {
        type: Date,
        default: Date.now
    }
})
 
// class strts from capital letter
// create collection
const Playlist = new mongoose.model('Playlist',playListSchema)

//create document or insert using await and async

const createDocument = async () =>{
    try{

        const jsList = new  Playlist( {
            name: "JavaScript",
            ctype: "Front End",
            videos: 12,
            author: "tt",
            active: true
        })
        const mongoList = new  Playlist( {
            name: "MongoDB",
            ctype: "Back End",
            videos: 10,
            author: "tt",
            active: true
        })
        const mongooseList = new  Playlist( {
            name: "Mongoose",
            ctype: "Back End",
            videos: 4,
            author: "tt",
            active: true
        })
        const expressList = new  Playlist( {
            name: "Express",
            ctype: "Back End",
            videos: 24,
            author: "tt",
            active: true
        })
        
        const result = await Playlist.insertMany([jsList,mongoList,mongooseList,expressList]);
        console.log(result);
    }catch(err){
        console.log(err);
    }

    
}

//createDocument();

const getDocument = async () =>{
    try{
    //const result = await Playlist.find({ctype :"Front End"}).select({name:1}).limit(1)
    const result = await Playlist.find({$or: [{ctype : "Back End"},{author:"tt"}]})
    .select({name:1})
    //.count()
    .sort({name : -1})
    console.log(result)
    }catch(err){
        console.log(err);
    }
}

//getDocument();

// update document

const updateDocument = async () =>{
    try{
        const result = await Playlist.updateOne({_id: "64088bee93dd37ce9fcaab93"},{
            $set :{
                name : "Node JS"
            }
        })
        console.log(result);
    }catch(err){
        console.log(err);
    }
    

}

//updateDocument();

//delete document
const deleteDocument = async() =>{
    try{
        const result =await Playlist.deleteOne({_id: "64088b3b33fab19419a94f30"})
        console.log(result);

    }catch(err){
        console.log(err);
    }
   

}

deleteDocument();



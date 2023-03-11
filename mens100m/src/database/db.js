const mongoose = require('mongoose');
//mongodb://127.0.0.1:27017/test
mongoose.connect("mongodb://127.0.0.1:27017/olymics")
.then(() =>{
   console.log("Connection is successfull");
}).catch(() =>{
    console.log("No Connection");
})
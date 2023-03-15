const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/youtubeRegisteration')
.then(() =>{
    console.log("Connection is successfully");
}).catch((e) =>{
    console.log("Connection is not successfully");
})


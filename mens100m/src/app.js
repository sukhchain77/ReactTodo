const express = require("express");
require("../src/database/db")
const app = express();
const router = require('../src/router/men');

const port = process.env.PORT || 8000;
const MensRanking = require('../src/models/mens');

app.use(express.json());
app.use(router);


app.listen(port, () =>{
    console.log(`Connection is at port ${port}`);
})

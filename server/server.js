const express = require('express')
const cors = require ('cors')
require('dotenv').config()
const path = require('path');

const app = express();
app.use(cors())
app.use(express.json())

app.get('/', (req,res)=>{
    res.status(200).send('Welcome to SmartShift')
})

let port=process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`Listening on ${port}`)
})
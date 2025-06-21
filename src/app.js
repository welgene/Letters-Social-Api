const express = require('express')
require('dotenv').config()
const port = process.env.port || 3000
const app = express()

app.get('/', (req,res)=>{
    res.send('this endpoint is working ')
})

app.listen(port, ()=>{
    console.log(`server is running on port : ${port}`);
})


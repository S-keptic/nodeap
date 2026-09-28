const express = require('express')

const app = express()

app.get('/',(req,res)=>{
    res.send("Coming from aws! and github actions")
})

app.listen(3000,()=>{
    console.log("server up on port 3000!")
})


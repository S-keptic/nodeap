const express = require('express')

const app = express()

app.get('/',(req,res)=>{
    res.send("Coming from aws! and github actions and from a pr branch")
})

app.listen(3000,()=>{
    console.log("server up on port 3000!")
})


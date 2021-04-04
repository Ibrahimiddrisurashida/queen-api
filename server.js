const express = require("express")

const app = express()

const port = 5000;

app.get("/", (req,res)=>{
    res.send("welcome to fashion world")
})
app.post("/api/post_req", (req,res)=>{
    res.send("welcome to my fashion world")
})
app.delete("/api/del_req", (req,res)=>{
    res.send("welcome to my fashion world")
})
app.put("/api/put_req", (req,res)=>{
    res.send("welcome to my fashion world")
})

app.listen(port, ()=>console.log(`server running ${port}`))
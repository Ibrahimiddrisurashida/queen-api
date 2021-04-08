const express = require ("express")
const mechandise = require("./store")

const app = express()



// body parser to allow updating, thus, PUT request
app.use(express.json())



// get all mechandise
app.get("/api/v3/mech", (req, res)=> {
    res.json(mechandise);
})

// single farmer
app.get("/api/v3/mech/:name", (req, res)=> {
    res.json(mechandise.filter((mech)=>mech.name === req.params.name));
})

// delete a mechandise
app.delete("/api/v3/mech/:name", (req, res)=> {
    res.json(mechandise.filter((mech)=>mech.name !== req.params.name));
})

// updating a mechandise 
app.put("/api/v3/mech/:name", (req, res)=> {
    const mechFound= mechandise.some((mech)=> mech.name === req.params.name);
    mechFound && 
        mechandise.forEach((mech)=> {
            mech.name===req.body.name &&
            (mech.name = req.body.name,
            mech.type = req.body.type,
            mech.cost = req.body.cost)
        });
        res.json(mechandise);
})

 



const PORT = 5000

app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`) )
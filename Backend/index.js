const express = require('express')
const cors = require('cors');
const { todos } = require('./database');
const { valid } = require('./Validation');
const bodyParser = require('body-parser')
const app = express()

app.use(express.json())
app.use(bodyParser.json())
app.use(cors());

app.post("/addtodo",async(req,res)=>{
    const response = valid.safeParse(req.body)
    if(!response.success){
        res.status(400).json({
            msg:"Invalid Inputs"
        })
        return
    }
    await todos.create({
        title:req.body.title,
        interest:req.body.interest
    })
    res.status(200).json({
        msg:"Todo added successfully"
    })
})

app.get("/todos", async(req,res)=>{
    const response = await todos.find({});
    res.status(200).json({
        todos:response
    })
})

app.listen(3000)
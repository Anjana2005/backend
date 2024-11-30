const express = require('express');
const StudentModel = require('./model/student');
require("./connection")
//initialize
var app = express();

//api creation
app.post("/add",async(req,res) =>{
    try {
        console.log(req.body)
        await StudentModel(req.body).save()
        res.send("Data added")
    } catch (error) {
        console.log(error)
    }
})

//view
app.get("/view",async(req,res)=>{
    try {
        const data = await StudentModel.find()
        res.json(data);
    } catch (error) {
        console.log(error)
    }

})

//delete
app.delete("/delete/:id",async(req,res) =>{
    try {
        await StudentModel.findByIdAndDelete(req.params.id)
        res.send("Data Deleted")
    } catch (error) {
        console.log(error);
    }
})

//update
app.put("/update/:id",async(req,res)=>{
    try{
    await StudentModel.findByIdAndUpdate(req.params.id,req.body)
    res.send("Data Updated")
    }catch (error){
        console.log(error);
    }
})
//port setting
app.listen(3034, () => {
    console.log("port is running");
});
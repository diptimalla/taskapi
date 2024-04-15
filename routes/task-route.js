//file : books-router.js


const { Router} = require('express');

const {Task} =require('../models/task')




const router =Router();

//GET/api/tasks
router.get('/' ,async(req,res)=>{
    let tasks=await Task.find();
    res.status(200).json(tasks);
});

//GET/api/tasks/:id
router.get('/:id' ,async(req,res)=>{
    let id=req.params.id; //or let id=req.params["id"];
    let task =await Task.findById(id);
    if(task)
        res.status(200).json(task);
    else
        res.status(404).json({message:`Task with id ${id} not found`})

    
});

//POST/api/tasks
router.post('/',async(req,res)=>{
    console.log(req.body);
    let task=new Task(req.body);
    await task.save();
    res.status(201).json(task);
});

//PUT/api/tasks/:id
router.put('/:id', async (req, res) => {
    let id = req.params.id;
    let task = await Task.findByIdAndUpdate(id, req.body);
    if (task)
        res.status(200).json(task);
    else
        res.status(404).json({ message: `Task with id ${id} not found` });

});

//DELETE/api/tasks/:id
router.delete('/:id', async (req, res) => {
    let id = req.params.id;
    let task = await Task.findByIdAndDelete(id);
    if (task)
        res.status(200).json(task);
    else
        res.status(404).json({ message: `Task with id ${id} not found` });

});






exports.tasksRouter=router; //non default export  --> here while importing curly bracket needed

//module.exports=Book; // default export   --> here while importing curly bracket NOT needed
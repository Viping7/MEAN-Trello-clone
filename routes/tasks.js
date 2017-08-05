const express=require('express');
const router=express.Router();
const tasks=require('../model/tasks');

router.get('/getTasks/:listname',function(req,res){  
     let taskItem={
        list_name:req.params.listname
    }
    tasks.getTasks(taskItem,function(err,task){
        if(err) throw err;
        else{
            res.json({success:true,task:task});
        }
    })
})

router.post('/create/:listname',function(req,res){  
    let taskItem={
        task_name:req.body.task_name
    }
    tasks.createTask(req.params.listname,taskItem,function(err,task){
        if(err) throw err;
        else{
            res.json({success:true});
        }
    })
})

module.exports=router;
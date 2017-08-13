const express = require('express');
const router = express.Router();
const tasks = require('../model/tasks');

router.get('/getTasks/:listId', function (req, res) {
    let taskItem = {
        list_id: req.params.listId
    }
    tasks.getTasks(taskItem, function (err, task) {
        if (err) throw err;
        else {
            res.json({
                success: true,
                task: task
            });
        }
    })
})

router.post('/create/:listId', function (req, res) {
    let taskItem = {
        task_name: req.body.task_name
    }
     let getTaskItem = {
        list_id: req.params.listId
    }
    tasks.getTasks(getTaskItem, function (err, task) {
        if (err) throw err;
        if (task) {
            tasks.createTask(req.params.listId, taskItem, function (err, task) {
                if (err) throw err;
                else {
                    res.json({
                        success: true,msg:"sadsa"
                    });
                }
            });
        } else {
            tasks.createTaskList(req.params.listId, function (err, task) {
                if (err) throw err
                else {
                    tasks.createTask(req.params.listId, taskItem, function (err, task) {
                        if (err) throw err;
                        else {
                            res.json({
                                success: true,msg:"treu"
                            });
                        }
                    })
                }
            })
        }
    });
})
router.put('/update/:taskId',function(req,res){
    let task_name=req.body.task_name.toLowerCase();
    tasks.updateTaskName(req.params.taskId,task_name,function(err,tasks){
        if(err) throw err;
            else{
                res.json({success:true});
            }
    })
})
router.put('/delete/:lid/:tid',function(req,res){  
     tasks.deleteTaskItem(req.params.lid,req.params.tid,function(err,tasks){
               if(err) throw err;
                else{
                            res.json({success:true});
               
                }
        });
})
module.exports = router;
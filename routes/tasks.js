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
        console.log(task);
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

module.exports = router;
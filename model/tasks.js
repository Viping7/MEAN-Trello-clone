const mongoose=require('mongoose');
var taskSchema=mongoose.Schema({
        list_id:{
            type:String
        },
        tasks:[
            {
                task_name:String
            }
        ]
});

const Task=module.exports=mongoose.model('tasks',taskSchema);
/*
module.exports.getListsById=function(boardId,callback){
    var boardData={
        board_id:boardId
    }
    List.findOne(boardData,callback);
}
*/
module.exports.getTasks=function(listid,callback){
    Task.findOne(listid,callback);
}
module.exports.createTaskList=function(listid,callback){
    let newList=new Task({
        list_id:listid});
    newList.save(callback);
}
module.exports.createTask=function(listid,taskname,callback){
    let taskData={
        tasks:taskname
    }
    let listData={
        list_id:listid
    }
        Task.update(listData,{$push:taskData},{},callback);

}
module.exports.deleteTask=function(listid,callback){
    let listData={
        list_id:listid
    }
    Task.remove(listData,callback);
}
module.exports.updateTaskName=function(taskid,task_name,callback){
   
    Task.update({tasks:{$elemMatch:{_id:taskid}}},{$set:{"tasks.$.task_name":task_name}},{},callback);
}

module.exports.deleteTaskItem=function(listid,taskid,callback){   
    Task.findOneAndUpdate({list_id:listid},{$pull:{tasks:{_id: taskid}}},{new:true},callback);
}
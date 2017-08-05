const mongoose=require('mongoose');
var taskSchema=mongoose.Schema({
        list_name:{
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
module.exports.getTasks=function(listname,callback){
    Task.findOne(listname,callback);
}
module.exports.createTaskList=function(listname,callback){
    let newList=new Task({
        list_name:listname});
    newList.save(callback);
}
module.exports.createTask=function(listname,taskname,callback){
    let taskData={
        tasks:taskname
    }
    let listData={
        list_name:listname
    }
        Task.update(listData,{$push:taskData},{},callback);

}
module.exports.deleteTask=function(listname,callback){
    let listData={
        list_name:listname
    }
    Task.remove(listData,callback);
}
/*
module.exports.updateList=function(id,list,callback){
    let listItems={
        lists:list    
    };
    let boardId={
        board_id:id
    }
    List.update(boardId,{$push:listItems},{},callback);
}
module.exports.updateListName=function(listid,list_name,callback){
   
    List.update({lists:{$elemMatch:{_id:listid}}},{$set:{"lists.$.list_name":list_name}},{},callback);
}

module.exports.deleteList=function(bid,lid,callback){   
    List.findOneAndUpdate({board_id:bid},{$pull:{lists:{_id: lid}}},{new:true},callback);
}*/
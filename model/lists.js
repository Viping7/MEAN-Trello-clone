const mongoose=require('mongoose');
var listItemSchema=mongoose.Schema({
        list_name:{
            type:String
        }
});
var listSchema=mongoose.Schema({
    board_id:{
        type:String
    },
    lists:[listItemSchema]
})
const List=module.exports=mongoose.model('lists',listSchema);

module.exports.getListsById=function(boardId,callback){
    var boardData={
        board_id:boardId
    }
    List.findOne(boardData,callback);
}
module.exports.createList=function(boardId,callback){
    let newList=new List({
        board_id:boardId});
    newList.save(callback);
}
module.exports.updateList=function(id,list,callback){
    let listItems={
        lists:list    
    };
    let boardId={
        board_id:id
    }
    List.update(boardId,{$push:listItems},{},callback);
}
module.exports.deleteList=function(bid,lid,callback){   
    List.findOneAndUpdate({board_id:bid},{$pull:{lists:{_id: lid}}},{new:true},callback);
}
const mongoose=require('mongoose');
var listItemSchema=mongoose.Schema({
        board_id:{
            type:String
        },
        list_name:{
            type:String
        },
        members:[{
            _id:false,
            mem_name:{
            type:String
            },
            mem_avatar:{
            type:String
            }
        }]  
});
var listSchema=mongoose.Schema({
    board_id:{
        type:String
    },
    lists:[listItemSchema]
})
const ListItem=module.exports=mongoose.model('items',listItemSchema);
const List=module.exports=mongoose.model('lists',listSchema);

module.exports.getListsById=function(boardId,callback){
    var boardData={
        board_id:boardId
    }
    List.findOne(boardData,callback);
}

module.exports.createListItem=function(list,callback){
    let newListItem=new ListItem(list);
    let id={board_id:newListItem.board_id}
    newListItem.save(()=>{ListItem.find(id,callback)});
}
module.exports.createList=function(boardId,callback){
    let newList=new List({
        board_id:boardId});
    newList.save(callback);
}
module.exports.updateList=function(id,list,callback){
    let listItems={
        lists:list};
    let boardId={
        _id:id
    }
    List.update(boardId,listItems,{},callback);
}
module.exports.deleteList=function(board,callback){
    Lists.remove(board,callback);
}
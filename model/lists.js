const mongoose=require('mongoose');
var listItemSchema=mongoose.Schema({
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
const List=module.exports=mongoose.model('lists',listSchema);
const ListItem=module.exports=mongoose.model('items',listItemSchema);

module.exports.getListsById=function(boardId,callback){
    var boardData={
        board_id:boardId
    }
    List.findOne(boardData,callback);
}

module.exports.createListItem=function(list,callback){
    let newListItem=new ListItem(list);
    newListItem.save(()=>{ListItem.find(callback)});
   
    
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
const mongoose=require('mongoose');

var listSchema=mongoose.Schema({
    board_id:{
        type:String,
        required:true
    },
    list_name:{
        type:String,
        required:true
    }
})

const Lists=module.exports=mongoose.model('lists',listSchema);

module.exports.getLists=function(callback){
    Lists.find(callback);
}
module.exports.createList=function(boardname,callback){
   boardname.save(callback);
}
module.exports.deleteList=function(board,callback){
   Lists.remove(board,callback);
}
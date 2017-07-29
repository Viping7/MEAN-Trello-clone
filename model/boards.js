const mongoose=require('mongoose');
var boardSchema=mongoose.Schema({
    board_name:{
        type:String,
        required:true
    }
})

const Boards=module.exports=mongoose.model('boards',boardSchema);

module.exports.getBoards=function(callback){
    Boards.find(callback);
}
module.exports.createBoard=function(boardname,callback){
    boardname.save(callback);
}
module.exports.deleteBoard=function(board,callback){
   Boards.remove(board,callback);
}
module.exports.getBoardById=function(boardId,callback){
    Boards.findById(boardId,callback)
}
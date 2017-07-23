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
    let board_name=new Boards({
        board_name:boardname
    });
    board_name.save(callback);
}
module.exports.deleteBoard=function(board,callback){
   Boards.remove(board,callback);
}
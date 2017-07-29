const express=require('express');
const router=express.Router();
const boards=require('../model/boards');
const lists=require('../model/lists');
router.get('/getBoards',function(req,res){
    boards.getBoards(function(err,boards){
        if(err) throw err;
        else{
            res.send(boards);
        }
    })
})
router.get('/getBoard/:id',function(req,res){
    boards.getBoardById(req.params.id,function(err,board){
        if(err) throw err;
        else{
            res.send(board);
        }
    })
})
router.post('/createBoard',function(req,res){
    let board=new boards({
        board_name:req.body.board_name
    });
    let boardid=board._id;
    boards.createBoard(board,function(err,boards){
        if(err) throw err;
        else{   
             lists.createList(boardid,function(err,board){
                if(err) throw err;
                else{
                    res.json({success:true})
                }
            })
        }
    })
})
router.delete('/deleteBoard/:id',function(req,res){
   let board={
       _id:req.params.id
   }
   boards.deleteBoard(board,function(err,boards){
        if(err) throw err;
        else{
            lists.deleteList({board_id:req.params.id},function(err,board){
                if(err) throw err;
                else{
                    res.json({success:true});
                }
            })
            
        }
    })    
});

module.exports=router;
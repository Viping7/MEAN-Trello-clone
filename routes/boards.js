const express=require('express');
const router=express.Router();
const boards=require('../model/boards')
router.get('/getBoards',function(req,res){
    boards.getBoards(function(err,boards){
        if(err) throw err;
        else{
            res.send(boards);
        }
    })
})
router.post('/createBoard',function(req,res){
    let boardname=new boards({
        board_name:req.body.board_name
    });
    boards.createBoard(boardname,function(err,boards){
        if(err) throw err;
        else{
            res.json({success:true});
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
            res.json({success:true});
        }
    })    
});

module.exports=router;
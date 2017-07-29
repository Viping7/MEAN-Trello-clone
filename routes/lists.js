const express=require('express');
const router=express.Router();
const lists=require('../model/lists')
router.get('/getLists',function(req,res){
    lists.getLists(function(err,lists){
        if(err) throw err;
        else{
            res.send(lists);
        }
    })
})
router.get('/getList/:id',function(req,res){
    lists.getListsById(req.params.id,function(err,lists){
        if(err) throw err;
        else{
            res.send(lists);
        }
    })
})
router.put('/create/:id',function(req,res){  
    let list={
        list_name:req.body.list_name
    }
     lists.updateList(req.params.id,list,function(err,lists){
               if(err) throw err;
                else{
                    res.json({success:true});
                }
            });
      
})
router.put('/delete/:bid/:lid',function(req,res){  
     lists.deleteList(req.params.bid,req.params.lid,function(err,lists){
               if(err) throw err;
                else{
                    res.json({success:lists});
                }
            });
      
})
module.exports=router;
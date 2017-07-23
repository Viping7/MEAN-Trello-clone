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
router.post('/createList/:id',function(req,res){
    let list={
        board_id:req.params.id,
        list_name:req.body.list_name,
        members:[{ mem_name:req.body.members.mem_name,
                 mem_avatar:req.body.members.mem_avatar
            }]
    };
    lists.createListItem(list,function(err,listItems){
        if(err) throw err;
        else{
            lists.updateList(req.params.id,listItems,function(err,lists){
               if(err) throw err;
                else{
                    res.json({success:true});
                }
            });
        }
    })
})

module.exports=router;
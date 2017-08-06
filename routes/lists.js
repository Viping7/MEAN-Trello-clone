const express=require('express');
const router=express.Router();
const lists=require('../model/lists');
const tasks=require('../model/tasks');
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
        list_name:req.body.list_name.toLowerCase()
    }
    lists.getListsByListName(list,function(err,retrievedlist){
        if(err) throw err;
        else{
            if(retrievedlist){
                res.json({success:false,msg:"name_exists"})
            }
            else{
             lists.updateList(req.params.id,list,function(err,lists){
                       if(err) throw err;
                        else{
                           res.json({success:true})
                        }
                });
            }
        }
    })
      
})
router.put('/updateList/:listid',function(req,res){  
    let list_name=req.body.list_name.toLowerCase();
    lists.getListsByListName({list_name:list_name},function(err,retrievedlist){
        if(err) throw err;
        else{
            if(retrievedlist){
                res.json({success:false,msg:"name_exists"})
            }
            else{
                
            lists.updateListName(req.params.listid,list_name,function(err,lists){
               if(err) throw err;
                else{
                    res.json({success:true});
                }
            });
            }
        }
    })
})
router.put('/delete/:bid/:lid',function(req,res){  
     lists.deleteList(req.params.bid,req.params.lid,function(err,lists){
               if(err) throw err;
                else{
                    tasks.deleteTask(req.params.lid,function(err,lists){
                        if(err) throw err;
                        else{
                            res.json({success:true});
                        }
                    })
                }
        });
})
module.exports=router;
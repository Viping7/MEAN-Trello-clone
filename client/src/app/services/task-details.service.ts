import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class TaskDetailsService {
listUrl;

listId;
constructor(private http:HttpClient) { }
setListUrl(id){
     this.listId=id;
    this.listUrl='lists/getList/'+id;
   
}   
getListDetails(list_details_url){
	return this.http.get(list_details_url);
}
createList(list_name,board_id){
    let newlist={
        list_name:list_name
    };
    return this.http.put('lists/create/'+board_id,newlist);
}
    
deleteList(board_id,list_id){
      return this.http.put('lists/delete/'+board_id+'/'+list_id,'');
    }
updateListName(list_id,list_name){
    let list={
        list_name:list_name
    }
    return this.http.put('/lists/updateList/'+list_id,list);
}
}

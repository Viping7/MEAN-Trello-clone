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
getListDetails(listDetailsUrl){
	return this.http.get(listDetailsUrl);
}
createList(listname,board_id){
    let newlist={
        list_name:listname
    };
    return this.http.put('lists/create/'+board_id,newlist);
}
    
deleteList(board_id,list_id){
      return this.http.put('lists/delete/'+board_id+'/'+list_id,'');
    }

}

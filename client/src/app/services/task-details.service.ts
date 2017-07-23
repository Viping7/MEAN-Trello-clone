import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class TaskDetailsService {
listUrl;
constructor(private http:HttpClient) { }
setListUrl(id){
    this.listUrl='lists/getList/'+id;
}   
getListDetails(listDetailsUrl){
	return this.http.get(listDetailsUrl);
}

}

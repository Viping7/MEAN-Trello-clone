import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class TaskDetailsService {
listData;
constructor(private http:HttpClient) { }
getListDetails(id){
	return this.http.get('lists/getList/'+id).subscribe(data=>{
        this.listData=data
    });
}
showLists() {
    console.log(this.listData);
    return this.listData;
}   

}

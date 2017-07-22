import { Injectable, } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Response} from '@angular/http';
@Injectable()
export class BoardService {

  constructor(private http:HttpClient) { }
getBoards(){
    return this.http.get('/boards/getBoards');
}
createBoard(board_name){
    var board={
        board_name:board_name
    }
    var headers=new HttpHeaders().set('Content-type','application/json');
    return this.http.post('boards/createBoard',board,{headers:headers});
}
deleteBoard(boardId){
    return this.http.delete('boards/deleteBoard/'+boardId);
}
}

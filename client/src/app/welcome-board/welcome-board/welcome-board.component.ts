import { Component, OnInit } from '@angular/core';
import { TaskDetailsService } from '../../services/task-details.service';
import { BoardService } from '../../services/board.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-welcome-board',
  templateUrl: './welcome-board.component.html',
  styleUrls: ['./welcome-board.component.scss']
})
export class WelcomeBoardComponent implements OnInit {
	boards;
	boardname:any;
	showCreateBoard:boolean;
    constructor(private router:Router,private taskDetails:TaskDetailsService,private boardService:BoardService) { }
    getBoards(){
        this.boardService.getBoards().subscribe(data=>{
          this.boards=data;
      })
    }
  ngOnInit() {
      this.getBoards();
  }
addBoard(){
	this.showCreateBoard=false;
	if(this.boardname){
        this.boardService.createBoard(this.boardname).subscribe(data=>{
            if(data['success']){
                this.getBoards();   
            }
        })
    }
	this.boardname='';
}
deleteBoard(board){
    let boardid=board['_id'];
        var index=this.boards.indexOf(board);
        this.boards.splice(index,index);
	this.boardService.deleteBoard(boardid).subscribe(data=>{
            if(data['success']){
            }
        });
}
getListDetails(id){
	this.taskDetails.setListUrl(id);	
this.router.navigate(['/tasks']);

}
    hideCreateBoard(){
        this.boardname='';
        this.showCreateBoard=false;
    }
}

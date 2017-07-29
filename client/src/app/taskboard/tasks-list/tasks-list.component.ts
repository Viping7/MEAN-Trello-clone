import { Component, OnInit } from '@angular/core';
import { TaskDetailsService } from '../../services/task-details.service';
import { BoardService } from '../../services/board.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent implements OnInit {
  tasks;
	taskitemOldname;showCreateLists:boolean;
	canEdit=false;
    tasksList;
    listName;
    boardName;
constructor(private taskDetails:TaskDetailsService,private boardService:BoardService,private router:Router) { }
    showLists(){
        this.boardService.getCurrentBoard(this.taskDetails.listId).subscribe(data=>{
            if(data){
                this.boardName=data['board_name'];
                 this.taskDetails.getListDetails(this.taskDetails.listUrl).subscribe(data=>{
                 console.log(data);  
                 this.tasks=data;
                 this.tasksList=this.tasks['lists'];
                });
            }
        })
       
    }
  ngOnInit() {
      if(this.taskDetails.listId){
      this.showLists();
      }
      else{
          this.router.navigate(['/']);
      }
  	}
	editTask(taskitem){
	this.taskitemOldname=taskitem;
	}
    createList(listname,board_id){
      this.taskDetails.createList(listname,board_id).subscribe(data=>{
            if(data['success']){
               this.showLists();
               this.listName='';
               this.showCreateLists=false;    
            }
      })
    }
    deleteList(board_id,list_id){
        console.log(board_id,list_id);
      this.taskDetails.deleteList(board_id,list_id).subscribe(data=>{
          if(data['success']){
               this.showLists();
            }  
      })  
    };
	cancelEdit(value){
		value='';
		return value;
	}
    
}

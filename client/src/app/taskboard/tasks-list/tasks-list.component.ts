import { Component, OnInit } from '@angular/core';
import { TaskDetailsService } from '../../services/task-details.service';
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
constructor(private taskDetails:TaskDetailsService,private router:Router) { }
    showLists(){
        this.taskDetails.getListDetails(this.taskDetails.listUrl).subscribe(data=>{
            this.tasks=data;
            this.tasksList=this.tasks['lists'];
        });
    }
  ngOnInit() {
      this.showLists();
  	}
	editTask(taskitem){
	this.taskitemOldname=taskitem;
	}
    createList(listname,board_id){
      this.taskDetails.createList(listname,board_id).subscribe(data=>{
            if(data['success']){
               this.showLists();
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

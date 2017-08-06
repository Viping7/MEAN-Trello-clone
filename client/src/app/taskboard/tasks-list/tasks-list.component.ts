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
            listOne: Array<string> = ['Coffee', 'Orange Juice', 'Red Wine', 'Unhealty drink!', 'Water'];
	taskitemOldname;showCreateLists:boolean;
	canEdit=false;
    tasksList;
    listName;
    boardName;
    updateError;
    updateErrorMsg;
    taskName;
    newTasksList=[];
    taskCard=[];
    showCreateTasks;
constructor(private taskDetails:TaskDetailsService,private boardService:BoardService,private router:Router) { }
    showLists(){
        this.boardService.getCurrentBoard(this.taskDetails.listId).subscribe(data=>{
            if(data){
                this.boardName=data['board_name'];
                 this.taskDetails.getListDetails(this.taskDetails.listUrl).subscribe(data=>{
                     
                 this.tasks=data;
                 this.tasksList=this.tasks['lists'];
                     this.newTasksList=[];
                    this.tasksList.forEach(val=>{
                        this.taskDetails.getTasks(val._id).subscribe(data=>{
                            if(data['task']){
                            val.tasks=data['task']['tasks'];
                                }
                            this.newTasksList.push(val);
                        })
                    });
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
                              this.updateError=false;
            }
          else{
              this.updateError=true;
                this.updateErrorMsg="List with the same name already exists";
                console.log(data);
          }
      })
    }
    updateListName(list_id,list_name){
        this.taskDetails.updateListName(list_id,list_name).subscribe(data=>{
            if(!data['success']){
                this.updateError=true;
                this.updateErrorMsg="List with the same name already exists";
                console.log(data);
            }
            else{
                 this.updateError=false;
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
    hideCreateList(){
        this.listName='';
        this.showCreateLists=false;
    }
    addCard(taskname,listname){
        this.taskDetails.addTask(taskname,listname).subscribe(data=>{
            if(data['success']){
                this.showCreateTasks=false;
                 this.taskName='';
                this.showLists();
            }
        })
    }
   cancelAddCard(){
       this.taskName='';
   }
}

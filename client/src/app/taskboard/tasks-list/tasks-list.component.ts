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
	taskitemOldname;
	canEdit=false;
constructor(private taskDetails:TaskDetailsService,private router:Router) { }

  ngOnInit() {
  	}
	editTask(taskitem){
	this.taskitemOldname=taskitem;
	}
	cancelEdit(value){
		value='';
		return value;
	}
    
}

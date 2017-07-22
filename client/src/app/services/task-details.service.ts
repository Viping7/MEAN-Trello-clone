import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class TaskDetailsService {
taskName;
tasksList=[{
	"taskboard1": [{
		"taskCategory": {
			"catname": "Basics",
			"tasks": [{
					"name": "taskname1",
					"members": [{
						"mem_name": "Vipin",
						"mem_avatar": "V"
					}, {
						"mem_name": "Prashant",
						"mem_avatar": "P"
					}]
				},
				{
					"name": "taskname2",
					"members": [{
						"mem_name": "Vipin",
						"mem_avatar": "V"
					}, {
						"mem_name": "Prashant",
						"mem_avatar": "P"
					}]
				},
				{
					"name": "taskname3",
					"members": [{
						"mem_name": "Vipin",
						"mem_avatar": "V"
					}, {
						"mem_name": "Prashant",
						"mem_avatar": "P"
					}]
				}
			]
		}
	}]
}, {
	"taskboard2": [{
		"taskCategory": {
			"catname": "Basics",
			"tasks": [{
					"name": "New Task 1",
					"members": [{
						"mem_name": "Vipin",
						"mem_avatar": "V"
					}, {
						"mem_name": "Prashant",
						"mem_avatar": "P"
					}]
				},
				{
					"name": "New Task 2",
					"members": [{
						"mem_name": "Vipin",
						"mem_avatar": "V"
					}, {
						"mem_name": "Prashant",
						"mem_avatar": "P"
					}]
				},
				{
					"name": "New Task 3",
					"members": [{
						"mem_name": "Vipin",
						"mem_avatar": "V"
					}, {
						"mem_name": "Prashant",
						"mem_avatar": "P"
					}]
				}
			]
		}
	}, {
		"taskCategory": {
			"catname": "Advanced",
			"tasks": [{
					"name": "New Task 1",
					"members": [{
						"mem_name": "Vipin",
						"mem_avatar": "V"
					}, {
						"mem_name": "Prashant",
						"mem_avatar": "P"
					}]
				},
				{
					"name": "New Task 2",
					"members": [{
						"mem_name": "Vipin",
						"mem_avatar": "V"
					}, {
						"mem_name": "Prashant",
						"mem_avatar": "P"
					}]
				},
				{
					"name": "New Task 3",
					"members": [{
						"mem_name": "Vipin",
						"mem_avatar": "V"
					}, {
						"mem_name": "Prashant",
						"mem_avatar": "P"
					}]
				}
			]
		}
	}]
}];
constructor(private http:HttpClient) { }
getBoardMeta(meta){
	this.taskName=meta;
	
}	
getTaskDetails(){
	console.log(this.taskName);
for(let i=0;i<this.tasksList.length;i++){
if(this.tasksList[i][this.taskName]){
	return this.tasksList[i][this.taskName];
}
}
}

}

import { Routes } from '@angular/router';
import { TasksListComponent } from './taskboard/tasks-list/tasks-list.component';
import { WelcomeBoardComponent } from './welcome-board/welcome-board/welcome-board.component';

export const routes:Routes=[{
	path:'',
	component:WelcomeBoardComponent,
},
{
	path:'tasks',
	component:TasksListComponent,
}];
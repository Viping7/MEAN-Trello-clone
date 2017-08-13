import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {DndModule} from 'ng2-dnd';
import { HttpClientModule } from '@angular/common/http';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { SortableModule } from 'ngx-bootstrap';
import { routes } from './routes';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { TasksListComponent } from './taskboard/tasks-list/tasks-list.component';
import { WelcomeBoardComponent } from './welcome-board/welcome-board/welcome-board.component';
import { TaskDetailsService } from './services/task-details.service';
import { BoardService } from './services/board.service';
import { EditTaskDirective } from './directives/edit-task.directive';
import { enableProdMode } from '@angular/core';
enableProdMode();
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TasksListComponent,
    WelcomeBoardComponent,
    EditTaskDirective
  ],
  imports: [
    BrowserModule,
	RouterModule.forRoot(
      routes,
     {useHash:true}
    ),
      BsDropdownModule.forRoot(),
	FormsModule,
	HttpClientModule ,
    DndModule.forRoot(),
      SortableModule.forRoot()
  ],
  providers: [TaskDetailsService,BoardService],
  bootstrap: [AppComponent]
})
export class AppModule {}

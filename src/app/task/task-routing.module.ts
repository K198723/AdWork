import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TaskComponent } from './task.component';
import { TaskCreateComponent } from './task-create/task-create.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { TaskShowComponent } from './task-show/task-show.component';

const routes: Routes = [
  { path: '', component: TaskComponent,
    children: [
      { path: 'task-create', component: TaskCreateComponent },
      { path: 'task-edit', component: TaskEditComponent },
      { path: 'task-show', component: TaskShowComponent },
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class TaskRoutingModule { }

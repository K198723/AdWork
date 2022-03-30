import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: ()=> import('./user/user.module').then(m => m.UserModule)},
  { path: 'task', loadChildren: ()=> import('./task/task.module').then(m => m.TaskModule)},
  { path: 'project', loadChildren: ()=> import('./project/project.module').then(m => m.ProjectModule)},
  { path: 'category', loadChildren: ()=> import('./category/category.module').then(m => m.CategoryModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

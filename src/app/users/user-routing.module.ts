import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserCreatorComponent } from './user-creator/user-creator.component';

const routes: Routes = [
  {
    path: '',
    component: UserListComponent,
  },
  { path: 'user-creator', component: UserCreatorComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserCreatorComponent } from './users/user-creator/user-creator.component';

const routes: Routes = [
  { path: 'users', component: UserListComponent },
  { path: '', component: UserCreatorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

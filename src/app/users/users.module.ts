import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserListComponent } from './user-list/user-list.component';
import { LoadingIndicatorService } from '../shared/shared/components/loading-indicator/loading-indicator.service';
import { LoadingIndicatorModule } from '../shared/shared/components/loading-indicator/loading-indicator.module';
import { UserCreatorComponent } from './user-creator/user-creator.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared/shared.module';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [UserDetailComponent, UserListComponent, UserCreatorComponent],
  imports: [
    CommonModule,
    LoadingIndicatorModule,
    ReactiveFormsModule,
    SharedModule,
    UserRoutingModule,
  ],
  exports: [UserDetailComponent, UserListComponent, UserCreatorComponent],
})
export class UsersModule {}

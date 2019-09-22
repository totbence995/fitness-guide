import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { HeaderModule } from './header/header.module';

import { StoreModule } from '@ngrx/store';
import * as fromUsers from './store/reducers/user.reducer';
import { UsersModule } from './users/users.module';
import { FittRainbowDirective } from './shared/shared/directives/fitt-rainbow.directive';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule,
    HeaderModule,
    StoreModule.forRoot({ users: fromUsers.reducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

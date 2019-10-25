import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user';
import { UserService } from '../services/user.service';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import {
  createUser,
  deleteUser,
  loadUsers,
} from '../../store/actions/user.actions';
import { GenderEnum } from '../interfaces/gender.enum';
import { LoadingIndicatorService } from 'src/app/shared/shared/components/loading-indicator/loading-indicator.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  public users: User[];
  public destroySubject$ = new Subject<void>();

  constructor(
    private store: Store<{ user: User }>,
    private loadingIndicator: LoadingIndicatorService
  ) {}

  ngOnInit() {
    // this.userService.get().pipe(takeUntil(this.destroySubject$)).subscribe(users => this.users = users);
    this.store.dispatch(loadUsers());
    this.store.pipe(select('users')).subscribe(state => {
      console.log({ users: state.users });
      this.users = state.users;
    });
    this.loadingIndicator.show();
    setTimeout(() => {
      this.loadingIndicator.hide();
    }, 3000);
  }

  deleteUser(id: string) {
    this.store.dispatch(deleteUser({ id }));
  }

  createUser() {
    this.store.dispatch(
      createUser({
        user: {
          id: (Math.random() * 1000).toString(),
          name: 'Berci',
          weight: 89,
          height: 160,
          bodyFatPercentage: 30,
          muscleRate: 34,
          age: 20,
          gender: GenderEnum.MALE,
        },
      })
    );
  }
}

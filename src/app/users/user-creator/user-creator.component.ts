import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import {
  createUser,
  deleteUser,
  loadUsers,
} from '../../store/actions/user.actions';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-user-creator',
  templateUrl: './user-creator.component.html',
  styleUrls: ['./user-creator.component.scss'],
})
export class UserCreatorComponent implements OnInit {
  profileForm = this.fb.group({
    name: [''],
    weight: [''],
    height: [''],
    bodyFatPercentage: [''],
    muscleRate: [''],
    age: [''],
    gender: [''],
  });
  constructor(private fb: FormBuilder, private store: Store<User>) {}

  ngOnInit() {}

  onSubmit() {
    console.log(this.profileForm);
    this.store.dispatch(
      createUser({
        user: {
          id: (Math.random() * 1000).toString(),
          ...this.profileForm.value,
        },
      })
    );
  }
}

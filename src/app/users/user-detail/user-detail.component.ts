import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {
  @Input() user: User;
  @Output() delete = new EventEmitter<string>();
  edit = false;

  constructor() {}

  ngOnInit() {}

  deleteUser() {
    this.delete.emit(this.user.id);
  }

  toggleEdit() {
    this.edit = true;
  }
}

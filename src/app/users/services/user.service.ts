import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import mockUsers from '../../mock-data/users/users';
import { User } from '../interfaces/user';
import { of, Observable } from 'rxjs';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { filter } from 'minimatch';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private dbPath = '/users';
  usersRef: AngularFirestoreCollection<User>;

  constructor(private db: AngularFirestore) {
    this.usersRef = this.db.collection(this.dbPath);
  }

  createUser(user: User): Observable<User> {
    this.usersRef.add(user);
    return of(user);
  }

  getUserList(): Observable<User[]> {
    return this.usersRef.valueChanges({ idField: 'id' });
  }

  deleteUser(id: string): Observable<string> {
    this.usersRef.doc(id).delete();
    return of(id);
  }
}

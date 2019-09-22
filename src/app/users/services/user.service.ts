import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import mockUsers from '../../mock-data/users/users';
import { User } from '../interfaces/user';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { 
  }

  public get(): Observable<Array<User>>{
    return of(mockUsers);
  }
}

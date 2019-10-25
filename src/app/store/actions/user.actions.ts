import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/users/interfaces/user';

export const ADD_USER = 'ADD_USER';
export const LOAD_USERS = 'LOAD_USERS';
export const LOAD_USERS_SUCCESS = 'LOAD_USERS_SUCCESS';
export const DELETE_USER = 'DELETE_USER';
export const CREATE_USER = 'CREATE_USER';
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';

export const addUser = createAction(ADD_USER);
export const loadUsers = createAction(LOAD_USERS);
export const loadUsersSuccess = createAction(
  LOAD_USERS_SUCCESS,
  props<{ users: User[] }>()
);
export const deleteUser = createAction(DELETE_USER, props<{ id: string }>());
export const deleteUserSuccess = createAction(
  DELETE_USER_SUCCESS,
  props<{ id: string }>()
);
export const createUser = createAction(CREATE_USER, props<{ user: User }>());
export const createUserSuccess = createAction(
  CREATE_USER_SUCCESS,
  props<{ user: User }>()
);

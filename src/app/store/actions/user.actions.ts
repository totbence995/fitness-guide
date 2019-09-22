import {createAction, props} from '@ngrx/store';
import { User } from 'src/app/users/interfaces/user';

const ADD_USER = 'ADD_USER';
const LOAD_USERS = 'LOAD_USERS';
const DELETE_USER = 'DELETE_USER';
const CREATE_USER = 'CREATE_USER';

export const addUser = createAction(ADD_USER);
export const loadUsers = createAction(LOAD_USERS);
export const deleteUser = createAction(DELETE_USER, props<{id: String}>());
export const createUser = createAction(CREATE_USER, props<{user: User}>());

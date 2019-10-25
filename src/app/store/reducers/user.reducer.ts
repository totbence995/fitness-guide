import { createReducer, on, Action } from '@ngrx/store';
import {
  createUser,
  loadUsers,
  deleteUser,
  addUser,
  loadUsersSuccess,
  createUserSuccess,
  deleteUserSuccess,
} from '../actions/user.actions';
import Users from '../../mock-data/users/users';
import { GenderEnum } from 'src/app/users/interfaces/gender.enum';

export const initialState = {
  users: [],
  isLoading: false,
  isLoaded: false,
};

const userReducer = createReducer(
  initialState,
  on(loadUsers, state => {
    return { ...state, isLoading: true, isLoaded: false };
  }),
  on(loadUsersSuccess, (state, { users }) => {
    return { ...state, users, isLoaded: true, isLoading: false };
  }),
  // on(createUser, (state, { user }) => {
  //   return { ...state, users: [...state.users, user] };
  // }),
  on(createUserSuccess, (state, { user }) => {
    return {
      ...state,
      users: [...state.users, user],
      isLoaded: true,
      isLoading: false,
    };
  }),
  on(deleteUserSuccess, (state, { id }) => {
    return { ...state, users: state.users.filter(user => user.id !== id) };
  })
);

export function reducer(state: any | undefined, action: Action) {
  return userReducer(state, action);
}

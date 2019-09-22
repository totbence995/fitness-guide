import {createReducer, on, Action} from '@ngrx/store';
import {createUser, loadUsers, deleteUser, addUser} from '../actions/user.actions';
import Users from '../../mock-data/users/users';
import { GenderEnum } from 'src/app/users/interfaces/gender.enum';

export const initialState = {users: [{ id: (Math.random() * 1000).toString(),
    name: 'ADAM',
    weight: 89,
    height: 160,
    bodyFatPercentage: 30,
    muscleRate: 34,
    age: 20,
    gender: GenderEnum.MALE}
   ]};

const userReducer = createReducer(initialState,
    on(createUser, (state, { user }) => {
        console.log('[USER_REDUCER]', user);
        return { ...state, users: [...state.users, user] };
    }),
    on(deleteUser, (state, {id}) => {
        return {...state, users: state.users.filter(user => user.id !== id)};
    }));

export function reducer(state: any | undefined, action: Action) {
    return userReducer(state, action);
}
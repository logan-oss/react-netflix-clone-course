import { combineReducers, createSlice } from '@reduxjs/toolkit'
import User from '../../interfaces/UserInterface';
import Users from '../../interfaces/UsersInterface';


const initUsers = new Array<User>();

const initialState: Users = {
    selectedUser: {name:"",color:""},
    users: initUsers
}

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser(state: Users, action: any) {
            console.log(state.users);
            
            state.users[state.users.length] = action.payload;
        },
        removeUser(state: Users, action) {
            state.users = state.users.filter((e) => e.name !== action.payload);
        },
        setUser(state: Users, action) {
            state.users[action.payload.index] = action.payload.user;
        }
    }
})

export const { addUser, removeUser, setUser } = userSlice.actions;

export default userSlice.reducer;
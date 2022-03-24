import { combineReducers, createSlice } from '@reduxjs/toolkit'
import User from '../../interfaces/user/UserInterface';
import Users from '../../interfaces/user/UsersInterface';


const initUsers = new Array<User>();

const initialState: Users = {
    selectedUser: {name:"",color:"", movieList: []},
    users: initUsers
}

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser(state: Users, action) {
            state.users = [...state.users, action.payload]
        },
        removeUser(state: Users, action) {
            state.users = state.users.filter((e) => e.name !== action.payload);
        },
        setUser(state: Users, action) {
            state.users[action.payload.index] = action.payload.user;
        },
        setSelectedUser(state: Users, action){
            state.selectedUser = action.payload;
        },
        addMovieList(state: Users, action){
            state.selectedUser.movieList = [...state.selectedUser.movieList, action.payload];
            state.users.map((u: User) => {
                if (u.name === state.selectedUser.name) {
                    u.movieList = state.selectedUser.movieList;
                }
                return u;
            })
        }
    }
})

export const { addUser, removeUser, setUser, setSelectedUser, addMovieList } = userSlice.actions;

export default userSlice.reducer;
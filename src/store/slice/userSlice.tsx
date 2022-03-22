import { combineReducers, createSlice } from '@reduxjs/toolkit'

interface User {
    name: string,
    color: string
}

const initialState: Array<User> = new Array<User>();

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser(state: Array<User>, action: any) {
            state.push(action.payload);
        },
        removeUser(state, action) {
            state = state.filter((e) => e.name !== action.payload);
        },
        setUser(state, action) {
            state[action.payload.index] = action.payload.user;
        }
    }
})

export const { addUser, removeUser, setUser } = userSlice.actions;

export default userSlice.reducer;
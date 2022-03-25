import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLogged: false,
} ;

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setLogin(state, action) {
            state.isLogged = action.payload;
        },
    }
})

export const { setLogin } = loginSlice.actions;

export default loginSlice.reducer;
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    authToken: ""
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.authToken = action.payload
        },
        removeToken: (state) => {
            state.authToken = ""
        }
    }
})

export const { setToken, removeToken } = authSlice.actions

export const selectToken = (state) => state.auth.authToken

export default authSlice.reducer
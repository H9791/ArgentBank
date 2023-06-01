import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    authToken: ""
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken: (state, action) => {
            console.log("state: ", state.authToken)
            console.log("payload: ", action.payload)
            state.authToken = action.payload
            console.log("state after: ", state.authToken)
        },
        removeToken: (state) => {
            state.authToken = ""
        }
    }
})

export const { setToken, removeToken } = authSlice.actions

export const selectToken = (state) => state.auth.authToken

export default authSlice.reducer
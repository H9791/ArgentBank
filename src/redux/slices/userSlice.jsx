import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    email: "",
    firstName: "",
    lastName: "",
    userName: "",
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.email = action.payload.email,
            state.firstName = action.payload.firstName,
            state.lastName = action.payload.lastName,
            state.userName = action.payload.userName || ""
        },

        /* setNameOfUser: (state, action) => {
            console.log("action.payload: ", action.payload)
            state.userName = action.payload
            // call put request to update userName
        },
 */
        removeUser: (state) => {
            state.email = "",
            state.firstName = "",
            state.lastName = "",
            state.userName = ""
        }
    }
})

export const { setUser, setNameOfUser, removeUser } = userSlice.actions

export const selectProfile = (state) => ({
    email: state.user.email,
    firstName: state.user.firstName,
    lastName: state.user.lastName,
    userName: state.user.userName
})

export default userSlice.reducer
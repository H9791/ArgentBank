import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    authToken: "",
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.authToken = action.payload;
        },
        removeToken: (state) => {
            state.authToken = "";
        },
    },
});

export const { setToken, removeToken } = authSlice.actions;
export const selectToken = (state: AuthState) => state.auth.authToken;
type AuthState = {
    auth: { authToken: string };
};

export default authSlice.reducer;

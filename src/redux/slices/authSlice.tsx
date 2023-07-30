import { createSlice } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";

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
    extraReducers: (builder) => {
        builder.addMatcher(
            apiSlice.endpoints.authorizeUser.matchFulfilled,
            (state, action) => {
                state.authToken = action.payload.body.token;
                //console.log("logging token:", state.authToken);
            }
        );
    },
});

export const { setToken, removeToken } = authSlice.actions;
export const selectToken = (state: AuthState) => state.auth.authToken;
type AuthState = {
    auth: { authToken: string };
};

export default authSlice.reducer;

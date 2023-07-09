import { createSlice } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";

const initialState: UserState = {
    email: "",
    firstName: "",
    lastName: "",
    userName: "",
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            (state.email = action.payload.email),
                (state.firstName = action.payload.firstName),
                (state.lastName = action.payload.lastName),
                (state.userName = action.payload.userName || "");
        },

        removeUser: (state) => {
            (state.email = ""),
                (state.firstName = ""),
                (state.lastName = ""),
                (state.userName = "");
        },
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            apiSlice.endpoints.fetchProfile.matchFulfilled,
            (state, action) => {
                (state.email = action.payload.email),
                    (state.firstName = action.payload.firstName),
                    (state.lastName = action.payload.lastName),
                    (state.userName = action.payload.userName || "");
            }
        );
    },
});

export const { setUser, removeUser } = userSlice.actions;

export const selectProfile = (state: SelectState) => ({
    email: state.user.email,
    firstName: state.user.firstName,
    lastName: state.user.lastName,
    userName: state.user.userName,
});

type UserState = {
    email: string;
    firstName: string;
    lastName: string;
    userName: string;
};

type SelectState = {
    user: UserState;
};

export const selectUsername = (state: SelectState) => state.user.userName;

export default userSlice.reducer;

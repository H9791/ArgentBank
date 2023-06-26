import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../../redux/slices/userSlice";
import authReducer from "../../redux/slices/authSlice";
import { apiSlice } from "../../redux/api/apiSlice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        auth: authReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
});

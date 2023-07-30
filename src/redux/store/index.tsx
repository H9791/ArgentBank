import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "../../redux/slices/userSlice";
import authReducer from "../../redux/slices/authSlice";
import { apiSlice } from "../../redux/api/apiSlice";

import storage from "redux-persist/lib/storage";

import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";

const persistConfig = {
    key: "root",
    version: 1,
    storage,
};

const combinedReducers = combineReducers({
    user: userReducer,
    auth: authReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, combinedReducers);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }).concat(apiSlice.middleware),
});

/*
//implementation without redux persist
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


*/

import { configureStore } from '@reduxjs/toolkit'
import userReducer from 'src/redux/slices/userSlice'
import authReducer from 'src/redux/slices/authSlice'

import { apiSlice }  from 'src/redux/api/apiSlice'

export const store = configureStore({
    reducer: {
        user : userReducer,
        auth : authReducer,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(apiSlice.middleware)
})
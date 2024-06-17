import { configureStore } from "@reduxjs/toolkit";
import userReducer from './slice/user.slice.js';


export const Store = configureStore({
    reducer : {user: userReducer},
    middleware : (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
})
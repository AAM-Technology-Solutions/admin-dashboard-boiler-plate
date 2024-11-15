import { configureStore } from "@reduxjs/toolkit"
import { authReducer } from "../libs/auth/store/auth.slice"
import { appApi } from "./app.api";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        [appApi.reducerPath]: appApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false}).concat(appApi.middleware)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
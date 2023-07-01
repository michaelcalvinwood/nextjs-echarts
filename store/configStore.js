import { configureStore } from "@reduxjs/toolkit";
import msgReducer from "./sliceMsg";

export const store = configureStore({
    reducer: {
        msg: msgReducer,
    },
});

   
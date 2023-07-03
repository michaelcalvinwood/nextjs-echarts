import { configureStore } from "@reduxjs/toolkit";
import msgReducer from "./sliceMsg";
import echartReducer from "./sliceEchartsOptions";

export const store = configureStore({
    reducer: {
        msg: msgReducer,
        echartsOptions: echartReducer,
    },
});

   
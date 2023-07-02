import { configureStore } from "@reduxjs/toolkit";
import msgReducer from "./sliceMsg";
import echartReducer from "./sliceEcharts";

export const store = configureStore({
    reducer: {
        msg: msgReducer,
        echarts: echartReducer,
    },
});

   
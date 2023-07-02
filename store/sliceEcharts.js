import { createSlice } from '@reduxjs/toolkit';

const sliceEcharts = createSlice({
    name: 'echarts',
    initialState: [],
    reducers: {
        addEchart: (state, action) => {
            const { selector } = action.payload;
            const test = initialState.find(echart => echart.selector === selector);
            if (!test) {
                state.push({
                    selector,
                    option: {}
                })
            }
            return state;
        }
    }
})

export const { initializeEchart } = sliceEcharts.actions;
export default sliceEcharts.reducer;
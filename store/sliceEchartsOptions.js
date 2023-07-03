import { createSlice } from '@reduxjs/toolkit';
import * as echarts from 'echarts'

const initOption = {
    meta: {
        orientation: 'horizontal'
    },
    title: {},
    xAxis: [{
        type: 'value'
    }],
    yAxis: [{
        type: 'category'
    }],
    grid: [
        
    ]
}

const sliceEchartsOptions = createSlice({
    name: 'echarts',
    initialState: [],
    reducers: {
        addEchart: (state, action) => {
            const { selector } = action.payload;
            const test = state.find(echart => echart.selector === selector);
            if (!test) {
                state.push({
                    selector,
                    option: initOption
                })
            }
            return state;
        },
        setTitle: (state, action) => {
            const { selector, title } = action.payload;
            const el = state.find(echart => echart.selector === selector);
            if (!el) return state;
            if (el.option.title.text !== title) el.option.title.text = title;
           
            return state;
        }
    }
})

export const { addEchart, initializeEchart, setTitle } = sliceEchartsOptions.actions;
export default sliceEchartsOptions.reducer;
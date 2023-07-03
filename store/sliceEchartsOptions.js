import { createSlice } from '@reduxjs/toolkit';
import * as echarts from 'echarts'

const initOption = {
    meta: {
        orientation: 'horizontal'
    },
    title: {},
    xAxis: [
        {
            type: 'value'
        }
    ],
    yAxis: [
        {
            type: 'category',
            data: []
        }
    ],
    grid: [ 
        {

        }
    ],
    series: [
       
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
        },
        addSeries: (state, action) => {
            //console.log('addSeries action', JSON.stringify(action, null, 4));
            const { selector, series } = action.payload;
            const el = state.find(echart => echart.selector === selector);
            if (!el) return state;

            // if (!series.id || !series.type || !series.xAxisIndex || !series.yAxisIndex || !series.data.length) {
            //     console.error('sliceEchartsOptions addSeries ERROR: Missing info');
            //     return state;
            // }
           
            const test = el.option.series.find(entry => entry.id === series.id);
            if (!test) el.option.series.push(series);
            return state;
        },
        // Later use lodash to check if current categories is equal
        addCategories: (state, action) => {
            const { selector, index, categories } = action.payload;
            const el = state.find(echart => echart.selector === selector);
            if (!el) return state;

            if (el.option.meta.orientation === 'horizontal') {
                if (!el.option.yAxis[index].data) el.option.yAxis[index].data = [];
                if (!el.option.yAxis[index].data.length) el.option.yAxis[index].data = [...categories];
            }
            else {
                if (!el.option.xAxis[index].data) el.option.xAxis[index].data = [];
                if (!el.option.xAxis[index].data.length) el.option.xAxis[index].data = [...categories];
            }
            return state;
        }
        
    }
})

export const { addEchart, initializeEchart, setTitle, addSeries, addCategories } = sliceEchartsOptions.actions;
export default sliceEchartsOptions.reducer;
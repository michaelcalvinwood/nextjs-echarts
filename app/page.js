'use client'

import Image from 'next/image'
import styles from './page.module.css'
import { useSelector, useDispatch } from "react-redux";
import { setMsg } from '@/store/sliceMsg';
import { useEffect } from 'react';
import { Box, Button, Text } from '@chakra-ui/react';
import * as socketService from './socketService';
import BarChart from '@/components/BarChart';
import { addCategories, addEchart, addSeries, setTitle } from '@/store/sliceEchartsOptions';
import * as echarts from 'echarts'

export default function Home() {
  const msg = useSelector(state => state.msg);
  const echartsOptions = useSelector(state => state.echartsOptions);

  const dispatch = useDispatch();

  const buildChart = () => {
    const selector = '#echart1'
    let el = echartsOptions.find(echart => echart.selector === selector);
    let chartEl = document.querySelector(selector);
    let chart = echarts.init(chartEl);
    dispatch(setTitle({selector, title: "Test Title"}));
    dispatch(addCategories({selector, index: 0, categories: [
      'sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'
    ]}))
    dispatch(addSeries({selector, series: {
        id: 'attendance',
        xAxisIndex: 0,
        yAxisIndex: 0,
        data: [
          {value: 120}, 
          {value: 200, label: {show: true}, itemStyle: {color: 'red'}}, 
          {value: 150}, 
          {value: 80}, 
          {value: 70}, 
          {value: 110}, 
          {value: 130}],
        type: 'bar'
      
    }}))

   
    chart.setOption(el.option);
    
  }

  useEffect(() => {
    let el = echartsOptions.find(echart => echart.selector === '#echart1');
    dispatch(addEchart({selector: '#echart1'}));
    if (el) buildChart();
    
  })
  return (
    <Box display="flex" justifyContent={'center'} alignItems={'center'} height="100vh" width='100vw'>
      <Box id="echart1" height="50vh" width="50vw">

      </Box>
    </Box>
  )
}

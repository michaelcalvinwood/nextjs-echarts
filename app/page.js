'use client'

import Image from 'next/image'
import styles from './page.module.css'
import { useSelector, useDispatch } from "react-redux";
import { setMsg } from '@/store/sliceMsg';
import { useEffect } from 'react';
import { Box, Button, Text } from '@chakra-ui/react';
import * as socketService from './socketService';
import BarChart from '@/components/BarChart';
import { addEchart, addSeries, setTitle } from '@/store/sliceEchartsOptions';
import * as echarts from 'echarts'

const option = {
  title: {text: "My Chart Title", left: 'center'},
  series: [
    {
      data: [
        {value: 120, label: {show: true}, name: 'hola'}, 
        {value: 200, itemStyle: {color: 'red'}}, 
        {value: 150}, 
        {value: 80}, 
        {value: 70}, 
        {value: 110}, 
        {value: 130}],
      type: 'bar'
    }
  ]
}; 

export default function Home() {
  const msg = useSelector(state => state.msg);
  const echartsOptions = useSelector(state => state.echartsOptions);

  const dispatch = useDispatch();

  const buildChart = () => {
    let el = echartsOptions.find(echart => echart.selector === '#echart1');
    let chartEl = document.querySelector('#echart1');
    let chart = echarts.init(chartEl);
    dispatch(setTitle({selector: '#echart1', title: "Test Title"}));
    chart.setOption(el.option);
    
    dispatch(addSeries({selector: '#echart1', series: {
        id: 'attendance',
        xAxisIndex: 0,
        yAxisIndex: 0,
        data: [
          {value: 120}, 
          {value: 200}, 
          {value: 150}, 
          {value: 80}, 
          {value: 70}, 
          {value: 110}, 
          {value: 130}],
        type: 'bar'
      
    }}))
    
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

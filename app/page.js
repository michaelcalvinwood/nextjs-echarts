'use client'

import Image from 'next/image'
import styles from './page.module.css'
import { useSelector, useDispatch } from "react-redux";
import { setMsg } from '@/store/sliceMsg';
import { useEffect } from 'react';
import { Box, Button, Text } from '@chakra-ui/react';
import * as socketService from './socketService';
import Echart from '@/components/Echart';

const option = {
  title: {text: "My\nChart\nTitle\nIs\nHere", left: 'center'},
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  yAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  xAxis: {
    type: 'value'
  },
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
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      socketService.emit('echo', {msg: 'echo this'});
    }, 5000);
  })
  return (
    <Box display="flex" justifyContent={'center'} alignItems={'center'} height="100vh" width='100vw'>
      <Echart 
        id='echartDiv1'
        option={option}
        height='50vh'
        width="50vw"
      />
    </Box>
  )
}

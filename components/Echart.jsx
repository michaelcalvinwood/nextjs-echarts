'use client'
import React, { useEffect } from 'react'
import * as echarts from 'echarts'

const Echart = ({id, option, width, height}) => {

  useEffect(() => {
    const chartEl = document.querySelector(`.${id}`);
    chartEl.style.width = width;
    chartEl.style.height = height;
    let chart = echarts.init(chartEl);
    chart.setOption(option);
  })
  return (
    <div className={id} style={{height: 'fit-content', width: 'fit-content'}}></div>
  )
}

export default Echart
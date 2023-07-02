'use client'
import React, { useEffect } from 'react'
import * as echarts from 'echarts'

const BarChart = ({id, option, width, height, category, orientation}) => {
  if (orientation !== 'vertical') orientation = 'horizontal';

  if (orientation === 'horizontal') {
    option.yAxis = {
      type: 'category',
      data: category
    }
    option.xAxis = {
      type: 'value'
    }
  } else {
    option.xAxis = {
      type: 'category',
      data: category
    }
    option.yAxis = {
      type: 'value'
    }
  }

  const getTitleHeight = () => {
    const { title } = option;
    let height = 0;
    if (typeof title === 'undefined') return 0;
    if (typeof title.text !== 'undefined' && title.text) {
        const lines = title.text.split("\n").length;
        if (typeof title.textStyle === 'undefined') title.textStyle = {}
        const fontSize = title.textStyle.fontSize ? title.textStyle.fontSize : 18;
        if (typeof title.textStyle.lineHeight === 'undefined') title.textStyle.lineHeight = Math.ceil(fontSize * 1.5);
        height += lines * title.textStyle.lineHeight;
    }

    return height;
  }

  useEffect(() => {
    const titleHeight = getTitleHeight();
    if (typeof option.grid === 'undefined') option.grid = {};
    option.grid.top = titleHeight;

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

export default BarChart
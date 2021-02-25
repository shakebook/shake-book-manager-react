import React, { useState, useEffect } from 'react';
import { Waterfall, DualAxes } from '@ant-design/charts';

const DemoWaterfall: React.FC = () => {
  var data = [
    {
      month: '2019',
      value: 23000000,
    },
    {
      month: 'Jan',
      value: 2200000,
    },
    {
      month: 'Feb',
      value: -4600000,
    },
    {
      month: 'Mar',
      value: -9100000,
    },
    {
      month: 'Apr',
      value: 3700000,
    },
    {
      month: 'May',
      value: -2100000,
    },
    {
      month: 'Jun',
      value: 5300000,
    },
    {
      month: 'Jul',
      value: 3100000,
    },
    {
      month: 'Aug',
      value: -1500000,
    },
    {
      month: 'Sep',
      value: 4200000,
    },
    {
      month: 'Oct',
      value: 5300000,
    },
    {
      month: 'Nov',
      value: -1500000,
    },
    {
      month: 'Dec',
      value: 5100000,
    },
  ];
  var config = {
    data: data,
    padding: 10,
    appendPadding: [20, 0, 0, 0],
    xField: 'month',
    yField: 'value',
    meta: {
      month: { alias: '月份' },
      value: {
        alias: '销售量',
        formatter: function formatter(v: number) {
          const s: string = (v / 10000000).toString()
          return ''.concat(s, ' 亿');
        },
      },
    },
    total: { label: '2020' },
    color: function color(_ref: any) {
      var month = _ref.month,
        value = _ref.value;
      if (month === '2019' || month === '2020') {
        return '#96a6a6';
      }
      return value > 0 ? '#f4664a' : '#30bf78';
    },
    // legend: {
    //   custom: true,
    //   items: [
    //     {
    //       name: 'Increase',
    //       value: 'increase',
    //       marker: {
    //         symbol: 'square',
    //         style: {
    //           r: 5,
    //           fill: '#f4664a',
    //         },
    //       },
    //     },
    //     {
    //       name: 'Decrease',
    //       value: 'decrease',
    //       marker: {
    //         symbol: 'square',
    //         style: {
    //           r: 5,
    //           fill: '#30bf78',
    //         },
    //       },
    //     },
    //     {
    //       name: 'Total',
    //       value: 'total',
    //       marker: {
    //         symbol: 'square',
    //         style: {
    //           r: 5,
    //           fill: '#96a6a6',
    //         },
    //       },
    //     },
    //   ],
    // },
    label: {
      style: { fontSize: 10 },
      layout: [{ type: 'interval-adjust-position' }],
      background: {
        style: {
          fill: '#f6f6f6',
          stroke: '#e6e6e6',
          strokeOpacity: 0.65,
          radius: 2,
        },
        padding: 1.5,
      },
    },
    waterfallStyle: function waterfallStyle() {
      return { fillOpacity: 0.85 };
    },
  };
  return <>
    <DemoDualAxes></DemoDualAxes>
    <Waterfall {...config} />
  </>;
};

const DemoDualAxes: React.FC = () => {
  var uvBillData = [
    {
      time: '2019-03',
      value: 350,
      type: 'uv',
    },
    {
      time: '2019-04',
      value: 900,
      type: 'uv',
    },
    {
      time: '2019-05',
      value: 300,
      type: 'uv',
    },
    {
      time: '2019-06',
      value: 450,
      type: 'uv',
    },
    {
      time: '2019-07',
      value: 470,
      type: 'uv',
    },
    {
      time: '2019-03',
      value: 220,
      type: 'bill',
    },
    {
      time: '2019-04',
      value: 300,
      type: 'bill',
    },
    {
      time: '2019-05',
      value: 250,
      type: 'bill',
    },
    {
      time: '2019-06',
      value: 220,
      type: 'bill',
    },
    {
      time: '2019-07',
      value: 362,
      type: 'bill',
    },
  ];
  var transformData = [
    {
      time: '2019-03',
      count: 800,
      name: 'a',
    },
    {
      time: '2019-04',
      count: 600,
      name: 'a',
    },
    {
      time: '2019-05',
      count: 400,
      name: 'a',
    },
    {
      time: '2019-06',
      count: 380,
      name: 'a',
    },
    {
      time: '2019-07',
      count: 220,
      name: 'a',
    },
    {
      time: '2019-03',
      count: 750,
      name: 'b',
    },
    {
      time: '2019-04',
      count: 650,
      name: 'b',
    },
    {
      time: '2019-05',
      count: 450,
      name: 'b',
    },
    {
      time: '2019-06',
      count: 400,
      name: 'b',
    },
    {
      time: '2019-07',
      count: 320,
      name: 'b',
    },
    {
      time: '2019-03',
      count: 900,
      name: 'c',
    },
    {
      time: '2019-04',
      count: 600,
      name: 'c',
    },
    {
      time: '2019-05',
      count: 450,
      name: 'c',
    },
    {
      time: '2019-06',
      count: 300,
      name: 'c',
    },
    {
      time: '2019-07',
      count: 200,
      name: 'c',
    },
  ];
  var config = {
    data: [uvBillData, transformData],
    xField: 'time',
    yField: ['value', 'count'],
    geometryOptions: [
      {
        geometry: 'column',
        isStack: true,
        seriesField: 'type',
        columnWidthRatio: 0.4,
      },
      {
        geometry: 'line',
        seriesField: 'name',
        lineStyle: function lineStyle(_ref: any) {
          var name = _ref.name;
          if (name === 'a') {
            return {
              lineDash: [1, 4],
              opacity: 1,
            };
          }
          return { opacity: 0.5 };
        },
      },
    ],
  };
  return <DualAxes {...config} />;
};

export default DemoWaterfall;
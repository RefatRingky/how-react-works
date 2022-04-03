import React from 'react';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const MyLineChart = () => {
    const data = [
        {
          "name": "Product-A ",
          "price": 4000,
          "Sales": 2400,
          "amt": 2400
        },
        {
          "name": "Product-B ",
          "price": 3000,
          "Sales": 1398,
          "amt": 2210
        },
        {
          "name": "Product-C ",
          "price": 2000,
          "Sales": 9800,
          "amt": 2290
        },
        {
          "name": "Product-D ",
          "price": 2780,
          "Sales": 3908,
          "amt": 2000
        },
        {
          "name": "Product-E ",
          "price": 1890,
          "Sales": 4800,
          "amt": 2181
        },
        {
          "name": "Product-F ",
          "price": 2390,
          "Sales": 3800,
          "amt": 2500
        },
        {
          "name": "Product-G ",
          "price": 3490,
          "Sales": 4300,
          "amt": 2100
        },
      ];
    return (
      <LineChart width={730} height={250} data={data}>
       <Line dataKey={'price'}></Line>
       <Line dataKey={'Sales'}></Line>
       <XAxis dataKey='name'></XAxis>
       <Tooltip></Tooltip>
       <YAxis></YAxis>
      </LineChart>
    );
};

export default MyLineChart;
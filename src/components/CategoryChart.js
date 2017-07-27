import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const CategoryChart = ({ data }) => {
  return (
    <LineChart
      width={480}
      height={240}
      data={data}
      margin={{ top: 30, right: 30, left: 0, bottom: 0 }}>
    {/* <defs>
      <linearGradient id="colorRest" x1="0" y1="0" x2="0" y2="1">
        <stop offset="5%" stopColor="#3F51B5" stopOpacity={0.8}/>
        <stop offset="95%" stopColor="#3F51B5" stopOpacity={0}/>
      </linearGradient>
      <linearGradient id="colorNutrition" x1="0" y1="0" x2="0" y2="1">
        <stop offset="5%" stopColor="#54b3a7" stopOpacity={0.8}/>
        <stop offset="95%" stopColor="#54b3a7" stopOpacity={0}/>
      </linearGradient>
      <linearGradient id="colorSweat" x1="0" y1="0" x2="0" y2="1">
        <stop offset="5%" stopColor="#2b2b2b" stopOpacity={0.8}/>
        <stop offset="95%" stopColor="#2b2b2b" stopOpacity={0}/>
      </linearGradient>
      <linearGradient id="colorPersonal" x1="0" y1="0" x2="0" y2="1">
        <stop offset="5%" stopColor="#f27474" stopOpacity={0.8}/>
        <stop offset="95%" stopColor="#f27474" stopOpacity={0}/>
      </linearGradient>
    </defs> */}
  <XAxis dataKey="date" />
  <YAxis />
  <Tooltip />
  <Line type="monotone" dataKey="rest" stroke="#3F51B5" />
  <Line type="monotone" dataKey="nutrition" stroke="#54b3a7" />
  <Line type="monotone" dataKey="sweat" stroke="#2b2b2b" />
  <Line type="monotone" dataKey="personal" stroke="#f27474" />
</LineChart>
  )
}

export default CategoryChart;

import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const CategoryChart = ({ data }) => {
  return (
    <AreaChart
      width={480}
      height={240}
      data={data}
      margin={{ top: 30, right: 30, left: 0, bottom: 0 }}>
    <defs>
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
    </defs>
  <XAxis dataKey="date" />
  <YAxis />
  <Tooltip />
  <Area type="monotone" dataKey="rest" stroke="#3F51B5" fillOpacity={1} fill="url(#colorRest)" />
  <Area type="monotone" dataKey="nutrition" stroke="#54b3a7" fillOpacity={1} fill="url(#colorNutrition)" />
  <Area type="monotone" dataKey="sweat" stroke="#2b2b2b" fillOpacity={1} fill="url(#colorSweat)" />
  <Area type="monotone" dataKey="personal" stroke="#f27474" fillOpacity={1} fill="url(#colorPersonal)" />
</AreaChart>
  )
}

export default CategoryChart;

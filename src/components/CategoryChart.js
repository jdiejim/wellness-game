import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const data = [
      {name: 'Jul 25', uv: 1500, pv: 2400, amt: 2400},
      {name: 'Jul 24', uv: 3000, pv: 1398, amt: 2210},
      {name: 'Jul 23', uv: 2500, pv: 9800, amt: 2290},
      {name: 'Jul 22', uv: 2780, pv: 3908, amt: 2000},
      {name: 'Jul 21', uv: 1890, pv: 4800, amt: 2181},
      {name: 'Jul 20', uv: 2390, pv: 3800, amt: 2500},
      {name: 'Jul 19', uv: 3490, pv: 4300, amt: 2100},
];

const CategoryChart = () => {
  return (
    <AreaChart
      width={480}
      height={240}
      data={data}
      margin={{ top: 30, right: 30, left: 0, bottom: 0 }}>
    <defs>
      <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
        <stop offset="5%" stopColor="#3F51B5" stopOpacity={0.8}/>
        <stop offset="95%" stopColor="#3F51B5" stopOpacity={0}/>
      </linearGradient>
      <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
        <stop offset="5%" stopColor="#54b3a7" stopOpacity={0.8}/>
        <stop offset="95%" stopColor="#54b3a7" stopOpacity={0}/>
      </linearGradient>
    </defs>
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Area type="monotone" dataKey="uv" stroke="#3F51B5" fillOpacity={1} fill="url(#colorUv)" />
  <Area type="monotone" dataKey="pv" stroke="#54b3a7" fillOpacity={1} fill="url(#colorPv)" />
</AreaChart>
  )
}

export default CategoryChart;

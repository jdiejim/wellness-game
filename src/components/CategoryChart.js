import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

const CategoryChart = ({ data }) => {
  return (
    <LineChart
      width={480}
      height={240}
      data={data}
      margin={{ top: 60, right: 30, left: 0, bottom: 0 }}>
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

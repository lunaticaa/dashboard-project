import React from 'react'
import './chart.css'
import { LineChart, ResponsiveContainer, XAxis, Line, CartesianGrid, Tooltip } from 'recharts'
function Chart({ title, data, dataKey, grid }) {
  return (
    <div className='chart'>
      <h3 className='chart-title'>{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke='#00b578' />
          <Line type="monotone" dataKey={dataKey} stroke="#00b578" />
          <Tooltip />
          {grid && <CartesianGrid stroke='#e0dfdf' strokeDasharray=" 5 5" />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart

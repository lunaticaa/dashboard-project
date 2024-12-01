import React from 'react'
import './home.css'
import FeatureInfo from '../../FeatureInfo/FeatureInfo'
import Chart from '../../Chart/Chart'
import WidgetSM from '../../WidgetSm/WidgetSM'
import WidgetLG from '../../WidgetLG/WidgetLG'
import { UserData } from '../../../Data'

function Home() {
  return (
    <div className='home'>
      <FeatureInfo />
      <Chart title="User Analytics" data={UserData} dataKey="User" grid />
      <div className="widget-home">
        <WidgetSM />
        <WidgetLG />
      </div>
    </div>
  )
}

export default Home

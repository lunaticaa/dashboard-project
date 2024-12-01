import React from 'react'
import './featureInfo.css'
import { ArrowDownward, ArrowUpward } from '@mui/icons-material'
function FeatureInfo() {
  return (
    <div className='featured'>
      <div className="feature-item">
        <span className="featured-title">Revenue</span>
        <div className="featured-money-container">
          <span className="featured-money">$2.415</span>
          <span className='featured-money-rate'>
            -11.4 <ArrowDownward className="featured-icon negative" />
          </span>
        </div>
        <span className="featured-sub">Compered to last month</span>
      </div>

      <div className="feature-item">
        <span className="featured-title">Sale</span>
        <div className="featured-money-container">
          <span className="featured-money">$7.415</span>
          <span className='featured-money-rate'>
            -11.4 <ArrowDownward className="featured-icon negative" />
          </span>
        </div>
        <span className="featured-sub">Compered to last month</span>
      </div>

      <div className="feature-item">
        <span className="featured-title">Cost</span>
        <div className="featured-money-container">
          <span className="featured-money">$1.15</span>
          <span className='featured-money-rate'>
            +4.4 <ArrowUpward className="featured-icon" />
          </span>
        </div>
        <span className="featured-sub">Compered to last month</span>
      </div>
    </div>
  )
}

export default FeatureInfo

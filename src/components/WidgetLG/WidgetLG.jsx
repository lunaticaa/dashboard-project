import React from 'react'
import './widgetLG.css'
function widgetLG() {
  const Btn = ({ type }) => {
    return <button className={"widget-lg-button " + type}>{type}</button>
  }
  return (
    <div className='widgetLg'>
      <h3 className='widget-lg-title'>
        latest dealing
      </h3>
      <table className='widget-lg-table'>
        <tr className='widget-lg-tr'>
          <th className="widget-lg-th">Customer</th>
          <th className="widget-lg-th">Data</th>
          <th className="widget-lg-th">Amount</th>
          <th className="widget-lg-th">Status</th>
        </tr>
        <tr className='widget-lg-tr'>
          <td className='widget-lg-user'>
            <img src="./src/assets/imgs/prof2.webp" alt="user" className='widget-lg-img' />
            <span className='widget-lg-name'>sara goodarzi</span>
          </td>
          <td className="widget-lg-date">1403/08/13</td>
          <td className="widget-lg-amount">$220.00</td>
          <td className='widget-lg-status'>
            <Btn type="Approved" />
          </td>
        </tr>
        <tr className='widget-lg-tr'>
          <td className='widget-lg-user'>
            <img src="./src/assets/imgs/prof2.webp" alt="user" className='widget-lg-img' />
            <span className='widget-lg-name'>sara goodarzi</span>
          </td>
          <td className="widget-lg-date">1403/08/13</td>
          <td className="widget-lg-amount">$220.00</td>
          <td className='widget-lg-status'>
            <Btn type="Pending" />
          </td>
        </tr>
        <tr className='widget-lg-tr'>
          <td className='widget-lg-user'>
            <img src="./src/assets/imgs/prof2.webp" alt="user" className='widget-lg-img' />
            <span className='widget-lg-name'>sara goodarzi</span>
          </td>
          <td className="widget-lg-date">1403/08/13</td>
          <td className="widget-lg-amount">$220.00</td>
          <td className='widget-lg-status'>
            <Btn type="Declined" />
          </td>
        </tr>
        <tr className='widget-lg-tr'>
          <td className='widget-lg-user'>
            <img src="./src/assets/imgs/prof2.webp" alt="user" className='widget-lg-img' />
            <span className='widget-lg-name'>sara goodarzi</span>
          </td>
          <td className="widget-lg-date">1403/08/13</td>
          <td className="widget-lg-amount">$220.00</td>
          <td className='widget-lg-status'>
            <Btn type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  )
}

export default widgetLG

import React from 'react'
import veg from '../../ASSETS/veges.png';
import './Footer1.css'

const Footer1 = () => {
  return (
    <div className='footer1'>
        <div className='left'>
            <img src={veg} alt='veg' />
        </div>
        <div className='right'>
            <h1>Fresh vegetables and fruits at your doorstep</h1>
            <p>Vegetables and fruits are an important part of a healthy diet, and variety is as important as quantity.</p>
        </div>
    </div>
  )
}

export default Footer1

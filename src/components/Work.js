import React, { useState } from 'react';
import '../styles/Work.scss'
import meishi from '../images/meishi.png';
import nba from '../images/nbaBuild.png';
import urbanBottle from '../images/urbanBottle.png';

const Work = (props) => {
  return(
    <div className='container'>
      <div className='card'>
        <h3>Recent Work</h3>
        <p>This is my most recent work. Other projects can be found on my <a href='github.com/tayorbcool'>GitHub</a>.</p>
        
        <div className='work'>
          <img className='work-img' src={meishi} alt='Meishi business card react app landing page' />
          <h5>Meishi</h5>
          <p>A react app in which users can create and share their personal business card by scanning QR codes associated with their card.</p>
        </div>
        
        <div className='work'>
          <img className='work-img' src={nba} alt='NBA Career Longevity Predictor react app landing page' />
          <h5>NBA Career Longevity Predictor</h5>
          <p>A react app that takes a given NBA player and estimates the outcome of the given player's career, as well as comparing them to other NBA players.</p>
        </div>
        
        <div className='work'>
          <img className='work-img' src={urbanBottle} alt='Homepage for Urban Bottle Wine and Spirits' />
          <h5>{`Urban Bottle Wine & Spirits`}</h5>
          <p>A marketing page for a Casper, WY based liquor store and bar.</p>
        </div>
      </div>
    </div>
  )
}  
  export default Work;
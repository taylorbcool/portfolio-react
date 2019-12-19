import React from 'react';
import '../styles/Work.scss'
import meishi from '../images/meishi.png';
import nba from '../images/nbaBuild.png';
import urbanBottle from '../images/urbanBottle.png';
import reactWars from '../images/react-wars.png'

const Work = () => {
  return(
    <div className='container'>
      <div className='card'>
        <h3>Recent Work</h3>
        <p>This is my most recent work. Other projects can be found on my <a href='github.com/tayorbcool'>GitHub</a>.</p>
        
        <div className='work'>
          <a href='https://agitated-pike-14fa1c.netlify.com/login'><img className='work-img' src={meishi} alt='Meishi business card react app landing page' /></a>
          <h5>Meishi</h5>
          <p>A react app in which users can create and share their personal business card by scanning QR codes associated with their card.</p>
        </div>
        
        <div className='work'>
          <a href='https://build-nba-career-longevity-predictor.github.io/user-interface/'><img className='work-img' src={nba} alt='NBA Career Longevity Predictor react app landing page' /></a>
          <h5>NBA Career Longevity Predictor</h5>
          <p>A react app that takes a given NBA player and estimates the outcome of the given player's career, as well as comparing them to other NBA players.</p>
        </div>
        
        <div className='work'>
          <a href='http://34.223.222.100/'><img className='work-img' src={urbanBottle} alt='Homepage for Urban Bottle Wine and Spirits' /></a>
          <h5>{`Urban Bottle Wine & Spirits`}</h5>
          <p>A marketing page for a Casper, WY based liquor store and bar.</p>
        </div>

        <div className='work'>
          <a href='https://starwars-umber-alpha.now.sh/'><img className='work-img' src={reactWars} alt='Homepage for React Wars App' /></a>
          <h5>React Wars</h5>
          <p>A small React app to fetch and display Star Wars characters from SWAPI.</p>
        </div>
      </div>
    </div>
  )
}  
  export default Work;
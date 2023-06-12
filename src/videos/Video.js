import React from 'react'
import {Link} from 'react-router-dom'
import './VideoStyles.css'

import globeVideo from '../assets/globe.mp4'

const Video = () => {
  return (
    <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src={globeVideo} type='video/mp4' />
            </video>
            <div className='content'>
                <h1>The Slap.</h1>
                {/* <p>The Place To Connect With Other Slap Users World Wide.</p> */}
                <p>Immerse yourself into the Slap Timeline. Connect with friends and strangers world wide.</p>
            
            <div>
                <Link to='/aboutUs' className='btn'>About Us</Link>
                <Link to='/timeline' className='btn btn-light'>Launch onto Slap Timeline</Link>
                {/* make this subrina's log in page*/}
            </div>
        </div>
    </div>
  )
}

export default Video
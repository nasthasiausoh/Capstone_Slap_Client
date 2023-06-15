import React from 'react'
import '../AboutUsStyles.css'
import zaynahAvatar from './avatar-assets/zaynah-avatar.png'
const AboutUs = () => {

  return (
    <div className='about-us'>
        <div className='card-container'>
            <div className='card'>
                <h3> - Natasha-</h3>
                <span className='team-member'> </span>
                <p className='person'> Natasha</p>
                <p>- abc -</p>
                <p>- abc -</p>
                <p>- abc -</p>
                <p>- abc -</p>
             </div>
            <div className='card'>
                <h3> - Rada- </h3>
                <span className='team-member'> </span>
                <p className='person'> Rada</p>
                <p>- abc -</p>
                <p>- abc -</p>
                <p>- abc -</p>
                <p>- abc -</p>
             </div>
            <div className='card'>
                <h3> - Zaynah- </h3>
                <img src = {zaynahAvatar}  alt = "cartoon rendition of Zaynah"/>
                <span className='team-member'> </span>
                <p className='person'> Zaynah</p>
                <p>- abc -</p>
                <p>- abc -</p>
                <p>- abc -</p>
                <p>- abc -</p>
             </div>
            <div className='card'>
                <h3> - Subrina- </h3>
                <span className='team-member'> </span>
                <p className='person'> Subrina</p>
                <p>- abc -</p>
                <p>- abc -</p>
                <p>- abc -</p>
                <p>- abc -</p>
             </div>

        </div>
    </div>
  )
}

export default AboutUs
import React from 'react'
import '../AboutUsStyles.css'
import zaynahAvatar from './avatar-assets/zaynah-avatar.png'
import radaAvatar from './avatar-assets/rada-avatar.png'
import natashaAvatar from './avatar-assets/natasha-avatar.png'
import subrinaAvatar from './avatar-assets/subrina-avatar.png'
const AboutUs = () => {

  return (
    <div className='about-us'>
        <div className='card-container'>
            <div className='card'>
                <h3> - Natasha-</h3>
                <img src = {natashaAvatar}  alt = "cartoon rendition of Natasha"/>
                <span className='team-member'> </span>
                <p className='person'> Natasha</p>
                <p>Fatal flaw: works too much</p>
                <p>- abc -</p>
                <p>- abc -</p>
                <p>- abc -</p>
             </div>
             <div className='card'>
                <h3> - Zaynah- </h3>
                <img src = {zaynahAvatar}  alt = "cartoon rendition of Zaynah"/>
                <span className='team-member'> </span>
                <p className='person'> Zaynah</p>
                <p>Fatal flaw: has Hayfever</p>
                <p>- abc -</p>
                <p>- abc -</p>
                <p>- abc -</p>
             </div>
            <div className='card'>
                <h3> - Rada- </h3>
                <img src = {radaAvatar}  alt = "cartoon rendition of Rada"/>
                <span className='team-member'> </span>
                <p className='person'> Rada</p>
                <p>Fatal flaw: none, just good vibes</p>
                <p>- abc -</p>
                <p>- abc -</p>
                <p>- abc -</p>
             </div>
           
            <div className='card'>
                <h3> - Subrina- </h3>
                <img src = {subrinaAvatar}  alt = "cartoon rendition of Subrina"/>
                <span className='team-member'> </span>
                <p className='person'> Subrina</p>
                <p>Fatal flaw: underestimates herself</p>
                <p>- abc -</p>
                <p>- abc -</p>
                <p>- abc -</p>
             </div>

        </div>
    </div>
  )
}

export default AboutUs
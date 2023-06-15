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
            <h3> - Keyboard Warrior 1 - </h3>
                <img src = {natashaAvatar}  alt = "cartoon rendition of Natasha"/>
                <span className='team-member'> </span>
                <p className='person'> Natasha</p>
                <p>Unofficial ambassador of going the extra mile, the ultimate MVP</p>
                <p className='flaw'>Fatal flaw: works too much</p>
          
             </div>
             <div className='card'>
                <h3> - Keyboard Warrior 2 - </h3>
                <img src = {zaynahAvatar}  alt = "cartoon rendition of Zaynah"/>
                <span className='team-member'> </span>
                <p className='person'> Zaynah</p>
                <p>Never runs out of things to say, a black belt in conversation</p>
                <p className='flaw'>Fatal flaw: has Hayfever</p>
  
             </div>
            <div className='card'>
            <h3> - Keyboard Warrior 3 -</h3>
                <img src = {radaAvatar}  alt = "cartoon rendition of Rada"/>
                <span className='team-member'> </span>
                <p className='person'> Rada</p>
                <p>If sunshine was a person, it would be Rada</p>
                <p className='flaw'>Fatal flaw: none, just good vibes</p>
             </div>
           
            <div className='card'>
            <h3>- Keyboard Warrior 4 - </h3>
                <img src = {subrinaAvatar}  alt = "cartoon rendition of Subrina"/>
                <span className='team-member'> </span>
                <p className='person'> Subrina</p>
                <p> From internet breaker to internet creator, a real life cheat-code</p>
                <p className='flaw'>Fatal flaw: underestimates herself</p>
          
             </div>

        </div>
    </div>
  )
}

export default AboutUs
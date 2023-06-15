import React from 'react'
import '../SlapStyles.css'
import { Link } from 'react-router-dom'


const Slap = ({slap}) => {

  return (
    <div className='timeline-list-of-slaps'>
     <div className='timeline-slap-component'>
        <div className='timeline-user-profile-details'>
          <Link to={`/profile/${slap.user.id}`}>
            <img src={slap.user.profilePicture} width={170} />
          </Link>
           <div className='timeline-user-slap-contents'>

            <Link to={`/profile/${slap.user.id}`}>
              <p><b>{slap.user.username}</b></p>
            </Link>

            <p>{slap.message}</p>
            <p><b>Mood: </b> {slap.mood}</p>
            <p><b>Time Posted:</b> {slap.dateTime}</p>
           </div>
        </div>
    </div>
    </div>
  )
}

export default Slap
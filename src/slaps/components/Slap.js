import React from 'react'
import '../SlapStyles.css'
import { Link } from 'react-router-dom'


const Slap = ({slap}) => {

  return (
    <>
     <div className='slap-component'>
        <div className='user-profile-details'>
          <Link to={`/profile/${slap.user.id}`}>
            <img src={slap.user.profilePicture} width={170} />
          </Link>
          <Link to={`/profile/${slap.user.id}`}>
            <p>{slap.user.username}</p>
          </Link>
        </div>
        <p>{slap.message}</p>
        <p><b>Mood:</b> {slap.mood}</p>
        <p><b>Time Posted:</b> {slap.dateTime}</p>
      </div>
    </>
  )
}

export default Slap
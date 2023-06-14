import React from 'react'
import '../SlapStyles.css'
import Player from './Player'

const Slap = ({slap}) => {

  return (
    <>
      <div className='slap-component'>
        <div className='user-profile-details'>
            <img src={slap.user.profilePicture} width={170} />
            <p>{slap.user.username}</p>
          </div>
          <p>{slap.message}</p>
          <p> Mood: {slap.mood}</p> 
          <p>Time Posted: {slap.dateTime}</p>
          <p>Hello buddies</p>
      </div>
    </>
  )
}

export default Slap
import React from 'react'
import '../SlapStyles.css'


const Slap = ({slap}) => {

  return (
    <>
      <div className='slap-component'>
        <div className='user-profile-details'>
            <img src={slap.user.profilePicture} width={170} />
            <p>{slap.user.username}</p>
        </div>
          <p>{slap.message}</p>
          <p> <b>Mood:</b> {slap.mood}</p> 
          <p> <b>Time Posted: </b>{slap.dateTime}</p>
      </div>
    </>
  )
}

export default Slap
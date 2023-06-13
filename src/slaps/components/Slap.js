import React from 'react'
import '../SlapStyles.css'


const Slap = ({slap, listOfSlaps, setListOfSlaps}) => {

  return (
    <>
      <div className='slap-component'>
          <p>{slap.user.username}</p>
          <p>{slap.message}</p>
          <p> Mood: {slap.mood}</p> 
          <p>{slap.dateTime}</p>
      </div>
    </>
  )
}

export default Slap
import React from 'react'
import '../TimelineStyles.css'
import Timeline from '../components/Timeline'
import '../TimelineStyles.css'
import Player from '../components/Player'
import '../PlayerStyles.css'

const TimelineContainer = ({listOfSlaps, setListOfSlaps, listOfUsers, setListOfUsers, loggedInUser}) => {


  return (
    <>

      <div className='timeline-container '>
          <Timeline listOfSlaps={listOfSlaps} setListOfSlaps={setListOfSlaps} listOfUsers={listOfUsers} setListOfUsers={setListOfUsers} loggedInUser={loggedInUser}/>
      </div>
    </>
  )
}

export default TimelineContainer
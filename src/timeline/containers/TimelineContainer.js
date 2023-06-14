import React from 'react'
import '../TimelineStyles.css'
import Timeline from '../components/Timeline'
import '../TimelineStyles.css'

const TimelineContainer = ({listOfSlaps, setListOfSlaps, loggedInUser, setLoggedInUser}) => {


  return (
    <div className='timeline-container '>
        <Timeline listOfSlaps={listOfSlaps} setListOfSlaps={setListOfSlaps} loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} />
    </div>
  )
}

export default TimelineContainer
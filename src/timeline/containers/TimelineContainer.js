import React from 'react'
import '../TimelineStyles.css'
import Timeline from '../components/Timeline'
import '../TimelineStyles.css'

const TimelineContainer = ({listOfSlaps, setListOfSlaps}) => {


  return (
    <div className='timeline-container '>
        <Timeline listOfSlaps={listOfSlaps} setListOfSlaps={setListOfSlaps} />
    </div>
  )
}

export default TimelineContainer
import React from 'react'
import Navbar from '../../navbar/Navbar'
import TimelineContainer from '../containers/TimelineContainer'
import Footer from '../../footer/Footer'

const TimelineRoute = ({listOfSlaps, setListOfSlaps}) => {
  return (
    <div>
        <Navbar />
        <TimelineContainer 
        listOfSlaps={listOfSlaps} 
        setListOfSlaps={setListOfSlaps} />
        <Footer />
        
    </div>
  )
}

export default TimelineRoute
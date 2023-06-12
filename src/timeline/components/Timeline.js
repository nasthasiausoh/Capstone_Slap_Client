import React from 'react'
import Slap from '../../slaps/components/Slap'
import '../TimelineStyles.css'

const Timeline = ({listOfSlaps, setListOfSlaps}) => {

    const slapComponents = listOfSlaps.map((slap) => {
        return (
            <Slap slap = {slap} 
            listOfSlaps={listOfSlaps} 
            setListOfSlaps={setListOfSlaps} />
        );
    })


  return (
    <div>
        <h1>Timeline</h1>
         {slapComponents}
    </div>
  )
}

export default Timeline
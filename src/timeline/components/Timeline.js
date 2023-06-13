import React from 'react'
import Slap from '../../slaps/components/Slap'


const Timeline = ({listOfSlaps, setListOfSlaps}) => {

    const slapComponents = listOfSlaps.map((slap) => {
        return (
            <Slap slap = {slap} 
            listOfSlaps={listOfSlaps} 
            setListOfSlaps={setListOfSlaps} />
        );
    })


  return (
    <div className='tl-header'>
        <h1>Timeline</h1>
         {slapComponents}
    </div>
  )
}

export default Timeline
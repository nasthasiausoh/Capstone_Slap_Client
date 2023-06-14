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
    <section className='tl-section'>
        <h1>Timeline</h1>
        <div>
          {slapComponents}
        </div>
         
    </section>
  )
}

export default Timeline
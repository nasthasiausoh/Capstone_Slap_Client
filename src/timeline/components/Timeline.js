import React from 'react'
import Slap from '../../slaps/components/Slap'


const Timeline = ({listOfSlaps, setListOfSlaps, loggedInUser, setLoggedInUser}) => {

    const slapComponents = listOfSlaps.map((slap) => {
        return (
            <Slap slap = {slap} 
            listOfSlaps={listOfSlaps} 
            setListOfSlaps={setListOfSlaps} />
        );
    })


  return (
    <section className='tl-section'>
       {loggedInUser ? <h1><i>{loggedInUser.username}</i> 's Timeline </h1> : <h1>Timeline</h1> }
        <div>
          {slapComponents}
        </div>
         
    </section>
  )
}

export default Timeline
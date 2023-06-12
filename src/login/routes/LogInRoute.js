import React from 'react'
import Navbar from '../../navbar/Navbar'
import Footer from '../../footer/Footer'
import LogIn from '../components/LogIn'

const LogInRoute = ({loggedInUser, setLoggedInUser}) => {
  return (
    <div>
        <Navbar />
        <LogIn loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser}/>
        <Footer />
    </div>
  )
}

export default LogInRoute
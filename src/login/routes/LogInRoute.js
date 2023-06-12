import React from 'react'
import Navbar from '../../navbar/Navbar'
import Footer from '../../footer/Footer'
import LogIn from '../components/LogIn'

const LogInRoute = () => {
  return (
    <div>
        <Navbar />
        <LogIn />
        <Footer />
    </div>
  )
}

export default LogInRoute
import React from 'react'
import Navbar from '../../navbar/Navbar'
import Footer from '../../footer/Footer'
import HeroImage from '../../hero/HeroImage'
import AboutUs from '../components/AboutUs'
const AboutUsRoute = () => {
  return (
    <div>
        <Navbar />
        <HeroImage heading='ABOUT US' text='The Slap is a social media platform designed to allow users to express their thoughts in a fun and concise manner. Browse through The Slap Feed, connect with friends and strangers, and join The Slap Nation.
'/>
        {/* HeroImage is where we would insert our avatars */}
        <AboutUs />
        <Footer />
    </div>
  )
}

export default AboutUsRoute;
import React from 'react'
import './FooterStyles.css'
import { FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaSearchLocation size={40} style={{color: '#ffffff', marginRight: '2rem'}}/>
                    <div>
                        <p>10 Upping Street</p>
                        <h4>London, England</h4>
                    </div>
                </div>

                <div className='phone'>
                    <h4><FaPhone size={40} style={{color: '#ffffff', marginRight: '2rem'}}/> 0208-123-4567</h4>
                </div>

                <div className='email'>
                    <h4><FaMailBulk size={40} style={{color: '#ffffff', marginRight: '2rem'}}/> theslap@slap.net</h4>
                </div> 

            </div>
            <div className='right'>
                <h4>Our Terms and Conditions </h4>
                <h4> Privacy </h4>
                <h4> Accessibility </h4>
                <p>We are better than:</p>
                <div className='social'>
                    <FaFacebook size={40} style={{color: '#ffffff', marginRight: '1rem'}}/>
                    <FaTwitter size={40} style={{color: '#ffffff', marginRight: '1rem'}}/>
                    <FaLinkedin size={40} style={{color: '#ffffff', marginRight: '1rem'}}/>
                    

                </div>

            </div>

        </div>

    </div>
  )
}

export default Footer
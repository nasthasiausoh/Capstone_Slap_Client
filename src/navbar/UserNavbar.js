import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'
import slapLogo from '../assets/the-blue-slap-logo.png'

import './UserNavbarStyles.css'

const UserNavbar = ({loggedInUser, setLoggedInUser}) => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

  return (
    <div className='user-header'>
      <div className='slap-logo'> 
         <Link to ='/'><img src={slapLogo} alt='slapLogo'/></Link> 
       {/* whenever we click on that h1 tag, it will link us back to the Home page. */}
      </div>

      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li>
          <Link to='/'>Home</Link>
        </li>

        <li>
          <Link to={`/timeline/${loggedInUser.id}`}>Timeline</Link>
        </li>

        <li>
          <Link to={`/profile/${loggedInUser.id}`}>My Profile</Link>
          </li>

        <li>
          <Link to="/">Log out</Link>
        </li>
      </ul>

      <div className='hamburger' onClick={handleClick}>
        {click ? (<FaTimes size={50} style={{color: '#fff'}} />) : (<FaBars size={50} style={{color: '#fff'}} /> )}
        {/* if the hamburger menu is clicked then show FaTimes (X button), if not then show the FaBars (hamburger menu icon) */}
      </div>
        
    </div>
  )
}

export default UserNavbar
import React from 'react'
import { Link } from 'react-router-dom'

const ProfileSlapList = ({user, userSlap}) => {
  return (
    <div className='slap-component'>
        <div className='user-profile-details'>
            <img src={user.profilePicture} alt='user-profile-picture'/>
            <Link to ={`/profile/${userSlap.id}`}>
              <p>{userSlap.username}</p>
            </Link>
            <p>{userSlap.message}</p>
            <p>{userSlap.mood}</p>
            <p>{userSlap.dateTime}</p>
        </div>
    </div>
  )
}
{/* <Link to={`/profile/${slap.user.id}`}>
            <p>{slap.user.username}</p>
          </Link> */}
export default ProfileSlapList
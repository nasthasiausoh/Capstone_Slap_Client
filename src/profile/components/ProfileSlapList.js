import React from 'react'
import { Link } from 'react-router-dom'

const ProfileSlapList = ({user, userSlap, loggedInUser}) => {


  return (
    <div className='slap-component'>
        <div className='user-profile-details'>
          <Link to ={`/profile/${userSlap.id}`}>
            <img src={user.profilePicture} alt='user-profile-picture' width={200}/>
          </Link>
            <div className='user-slap-contents'>

              <Link to ={`/profile/${userSlap.id}`}>
                <p><b>{user.username}</b></p>
              </Link>

              <p>{userSlap.message}</p>
              <p><b>Mood: </b>{userSlap.mood}</p>
              <p><b>Time Posted: </b>{userSlap.dateTime}</p>
              <button>Delete</button>
          </div>
        </div>
    </div>
  )
}

export default ProfileSlapList
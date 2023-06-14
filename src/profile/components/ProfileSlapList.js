import React from 'react'

const ProfileSlapList = ({user, userSlap}) => {
  return (
    <div className='slap-component'>
        <div className='user-profile-details'>
            <img src={user.profilePicture}/>
            <p>{userSlap.username}</p>
            <p>{userSlap.message}</p>
            <p>{userSlap.mood}</p>
            <p>{userSlap.dateTime}</p>
        </div>
    </div>
  )
}

export default ProfileSlapList
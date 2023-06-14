import React, { useEffect, useState } from 'react';
import '../ProfileStyles.css';
import ProfileSlapList from './ProfileSlapList';

const Profile = ({user, loggedInUser}) => {

  const userSlapComponents = user.slaps.map((userSlap) => {
    return (
        <ProfileSlapList userSlap = {userSlap}
         user={user} loggedInUser={loggedInUser}  />
    );
})

    return (
      <div>
        <section className='profile-bio-component'>
            <div className='profile-details'>
                <div className='profile-slap-picture'>
                   <img src={user.profilePicture} alt='user-profile-picture' width={300}/>
                </div>
                <div className='profile-username-follow-bio'>
                  <h1>{user.username}</h1>
                  <button id='follow-button'>Following</button>
                  <p id='user-bio'>"{user.bio}" <button className='bio-button'> Update Bio</button></p>
                </div>
            </div>
        </section>

        <div>
           {userSlapComponents}
        </div>

        </div>
      );
    };

export default Profile;

import React, { useEffect, useState } from 'react';
import '../ProfileStyles.css'
import ProfileSlapList from './ProfileSlapList';
import Player from './Player';

const Profile = ({user}) => {

  const userSlapComponents = user.slaps.map((userSlap) => {
    return (
        <ProfileSlapList userSlap = {userSlap}
         user={user}  />
    );
})

    return (
      <div>
        <section className='bio-component'>
            <div className='profile-details'>
                <div className='bio-profile-picture'>
                   <img src={user.profilePicture} alt='user-profile-picture' width={300}/>
                </div>
                <div className='username-follow-bio'>
                  <h1>{user.username}</h1>
                  <button id='follow-button'>Following</button>
                  <p id='user-bio'>"{user.bio}" <button className='bio-button'> Update Bio</button></p>
                </div>
            </div>
        </section>

        <Player />

        <div>
           {userSlapComponents}
        </div>

            {/* ADD LIST OF SLAPS HERE */}
            {/* <p>{user.slaps}</p> */}
            {/* <ul>{user.followers}</ul>
            <ul>{user.following}</ul> */}

        </div>
      );
    };

export default Profile;

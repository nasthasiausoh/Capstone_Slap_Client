import React, { useEffect, useState } from 'react';
import '../ProfileStyles.css'

const Profile = ({user}) => {

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

            {/* ADD LIST OF SLAPS HERE */}
            {/* <p>{user.slaps}</p> */}
            {/* <ul>{user.followers}</ul>
            <ul>{user.following}</ul> */}

        </div>
      );
    };

export default Profile;

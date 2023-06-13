import React, { useEffect, useState } from 'react';
import '../ProfileStyles.css'
import Player from '../../profile/components/Player'
import SlapForm from '../../slaps/components/SlapForm';

const Profile = ({user}) => {

    return (
        <div className='bio-component'>
          <img src='data:image/jpeg;base64,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' alt='slapLogo' />
          <h1>{user.username}</h1>
          <p>{user.bio} <button className='bio-button'> Update Bio</button></p>
          {/* <p>{user.password}</p>
          <p>{user.email}</p> */}
          <p>{user.slaps[0].mood}</p>
          {/* <ul>{user.followers}</ul>
          <ul>{user.following}</ul> */}
          <Player/>
          <SlapForm user={user}/>
          
          
        </div>
      );
    };

export default Profile;

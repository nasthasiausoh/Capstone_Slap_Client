import React from 'react';
import '../ProfileStyles.css';
import ProfileSlapList from './ProfileSlapList';
import FollowButton from '../../follow/FollowButton';

const Profile = ({ user, loggedInUser }) => {
  const isCurrentUser = loggedInUser && loggedInUser.id === user.id;
  const initialFollowing = loggedInUser && loggedInUser.following.some(followedUser => followedUser.id === user.id);

  const userSlapComponents = user.slaps.map((userSlap) => {
    return (
      <ProfileSlapList
        userSlap={userSlap}
        user={loggedInUser.id === user.id ? loggedInUser : user}
      />
    );
  });

  return (
    <div>
      <section className='bio-component'>
        <div className='profile-details'>
          <div className='bio-profile-picture'>
            <img src={user.profilePicture} alt='user-profile-picture' width={300} />
          </div>
          <div className='username-follow-bio'>
            <h1>{user.username}</h1>
            {isCurrentUser ? (
              <button id='follow-button'>Following</button>
            ) : (
              <FollowButton loggedInUser={loggedInUser} user={user} initialFollowing={initialFollowing} />
            )}
            <p id='user-bio'>
              "{user.bio}" <button className='bio-button'>Update Bio</button>
            </p>
          </div>
        </div>
      </section>

      <div>{userSlapComponents}</div>
    </div>
  );
};

export default Profile;
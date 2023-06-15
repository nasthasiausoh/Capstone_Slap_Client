import React, { useState } from 'react';
import '../ProfileStyles.css';
import ProfileSlapList from './ProfileSlapList';
import FollowButton from '../../follow/FollowButton';
import ConnectionsModal from '../../modals/ConnectionsModal';
import SlapForm from '../../slaps/components/SlapForm';

const Profile = ({ user, loggedInUser }) => {
  const isCurrentUser = loggedInUser && loggedInUser.id === user.id;
  const initialFollowing = loggedInUser && loggedInUser.following.some((followedUser) => followedUser.id === user.id);

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const userSlapComponents = user.slaps.map((userSlap) => {
    return <ProfileSlapList userSlap={userSlap} user={loggedInUser.id === user.id ? loggedInUser : user} />;
  });

  return (
    <div>
      <section className="bio-component">
        <div className="profile-details">
          <div className="bio-profile-picture">
            <img src={user.profilePicture} alt="user-profile-picture" width={400} />
          </div>
          <div className="username-follow-bio">
            <h1>{user.username}</h1>
            {isCurrentUser ? (
              <button id="follow-unfollow-update-bio-button">Update Bio</button>
            ) : (
              <FollowButton loggedInUser={loggedInUser} user={user} initialFollowing={initialFollowing} />
            )}
            <button id="connections-button" onClick={openModal}>
              Connections
            </button>
            <p id="user-bio">
              <i>{user.bio}</i>
            </p>
          </div>
        </div>
      </section>

      <div className="profile-list-of-slaps">{userSlapComponents}</div>

      {showModal && <ConnectionsModal loggedInUser={loggedInUser} user={user} onClose={closeModal} />}
      <SlapForm />
    </div>
  );
};

export default Profile;


// import React from 'react';
// import '../ProfileStyles.css';
// import ProfileSlapList from './ProfileSlapList';
// import FollowButton from '../../follow/FollowButton';

// const Profile = ({ user, loggedInUser }) => {
//   const isCurrentUser = loggedInUser && loggedInUser.id === user.id;
//   const initialFollowing = loggedInUser && loggedInUser.following.some(followedUser => followedUser.id === user.id);

//   const userSlapComponents = user.slaps.map((userSlap) => {
//     return (
//       <ProfileSlapList
//         userSlap={userSlap}
//         user={loggedInUser.id === user.id ? loggedInUser : user}
//       />
//     );
//   });

//   return (
//     <div>
//       <section className='bio-component'>
//         <div className='profile-details'>
//           <div className='bio-profile-picture'>
//             <img src={user.profilePicture} alt='user-profile-picture' width={400} />
//           </div>
//           <div className='username-follow-bio'>
//             <h1>{user.username}</h1>
//              {isCurrentUser ? (
//             <button id='follow-unfollow-update-bio-button'>Update Bio</button>
//              ) : (
//               <FollowButton loggedInUser={loggedInUser} user={user} initialFollowing={initialFollowing} /> 
//              )}
//               <button id='connections-button'>Connections</button>
//             <p id='user-bio'> <i>"{user.bio}"</i></p>
           
//           </div>
//         </div>
//       </section>

//       <div className='profile-list-of-slaps'>{userSlapComponents}</div>
//     </div>
//   );
// };

// export default Profile;
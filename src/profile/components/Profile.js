import React, { useState, useEffect } from 'react';
import '../ProfileStyles.css';
import ProfileSlapList from './ProfileSlapList';
import FollowButton from '../../follow/FollowButton';
import ConnectionsModal from '../../modals/ConnectionsModal';
import { BioModal, UsernameModal } from './BioModal';
import SlapForm from '../../slaps/components/SlapForm';

const Profile = ({ user, loggedInUser, listOfSlaps, addNewSlap}) => {
  const isCurrentUser = loggedInUser && loggedInUser.id === user.id;
  const initialFollowing = loggedInUser && loggedInUser.following.some((followedUser) => followedUser.id === user.id);

  const [showModal, setShowModal] = useState(false);
  const [updatedBio, setUpdatedBio] = useState(loggedInUser.bio); // Keep the updated bio in state
  const [showBioModal, setShowBioModal] = useState(false);
  const [showUsernameModal, setShowUsernameModal] = useState(false);
  useEffect(() => {
    setUpdatedBio(loggedInUser.bio); // Update the bio when the loggedInUser prop changes
  }, [loggedInUser.bio]);

  useEffect(() => {
    if (isCurrentUser) {
      setUpdatedBio(loggedInUser.bio); // Update the bio for the logged-in user on their own profile page
    }
  }, [isCurrentUser, loggedInUser.bio]);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect( ()=> 
  {
  }, [listOfSlaps])

  const userSlapComponents = user.slaps.map((userSlap) => {
    return <ProfileSlapList userSlap={userSlap} user={loggedInUser.id === user.id ? loggedInUser : user} />;

  });

  const handleUpdateBio = async (newBio) => {
    try {
      const response = await fetch(`http://localhost:8080/users/${loggedInUser.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ bio: newBio }),
      });

      if (response.ok) {
        setUpdatedBio(newBio); // Update the updatedBio state with the new bio
        setShowBioModal(false); // Close the modal after successful update
      } else {
        console.log('Error updating bio');
      }
    } catch (error) {
      console.log('Error updating bio', error);
    }
  };

  const handleUpdateUsername = async (newUsername) => {
    try {
      const response = await fetch(`http://localhost:8080/users/${loggedInUser.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: newUsername }),
      });

      if (response.ok) {
        loggedInUser.username = newUsername; // Update the loggedInUser directly
        setShowUsernameModal(false); // Close the modal after successful update
      } else {
        console.log('Error updating username');
      }
    } catch (error) {
      console.log('Error updating username', error);
    }
  };

  const openBioModal = () => {
    setShowBioModal(true);
  };

  const closeBioModal = () => {
    setShowBioModal(false);
  };

  const openUsernameModal = () => {
    setShowUsernameModal(true);
  };

  const closeUsernameModal = () => {
    setShowUsernameModal(false);
  };

  return (
    <>
    <div>
      <section className="bio-component">
        <div className="profile-details">
          <div className="bio-profile-picture">
            <img src={user.profilePicture} alt="user-profile-picture" width={400} />
          </div>
          <div className="username-follow-bio">
            <h1>{user.username}</h1>
            {isCurrentUser ? (
              <button id="follow-unfollow-update-bio-button" onClick={openBioModal}>
                Update Bio
              </button>
            ) : (
              <FollowButton loggedInUser={loggedInUser} user={user} initialFollowing={initialFollowing} />
            )}
            <button id="connections-button" onClick={openModal}>
              Connections
            </button>
            <p id="user-bio">
              <i>{isCurrentUser ? updatedBio : user.bio}</i> {/* Use updatedBio for loggedInUser, user.bio for other users */}
            </p>
          </div>
        </div>
      </section>

      <div className="profile-list-of-slaps">{userSlapComponents}</div>

      {showModal && <ConnectionsModal loggedInUser={loggedInUser} user={user} onClose={closeModal} />}

      {showBioModal && (
        <div className="modal-background">
          <BioModal loggedInUser={loggedInUser} onClose={closeBioModal} onUpdateBio={handleUpdateBio} />
        </div>
      )}

      {showUsernameModal && (
        <div className="modal-background">
          <UsernameModal loggedInUser={loggedInUser} onClose={closeUsernameModal} onUpdateUsername={handleUpdateUsername} />
        </div>
      )}
    </div>
    <SlapForm loggedInUser={loggedInUser} addNewSlap={addNewSlap}/>
    </>
  );
};

export default Profile;






// import React, { useState } from 'react';
// import '../ProfileStyles.css';
// import ProfileSlapList from './ProfileSlapList';
// import FollowButton from '../../follow/FollowButton';
// import ConnectionsModal from '../../modals/ConnectionsModal';

// const Profile = ({ user, loggedInUser }) => {
//   const isCurrentUser = loggedInUser && loggedInUser.id === user.id;
//   const initialFollowing = loggedInUser && loggedInUser.following.some((followedUser) => followedUser.id === user.id);

//   const [showModal, setShowModal] = useState(false);

//   const openModal = () => {
//     setShowModal(true);
//   };

//   const closeModal = () => {
//     setShowModal(false);
//   };

//   const userSlapComponents = user.slaps.map((userSlap) => {
//     return <ProfileSlapList userSlap={userSlap} user={loggedInUser.id === user.id ? loggedInUser : user} />;
//   });

//   return (
//     <div>
//       <section className="bio-component">
//         <div className="profile-details">
//           <div className="bio-profile-picture">
//             <img src={user.profilePicture} alt="user-profile-picture" width={400} />
//           </div>
//           <div className="username-follow-bio">
//             <h1>{user.username}</h1>
//             {isCurrentUser ? (
//               <button id="follow-unfollow-update-bio-button">Update Bio</button>
//             ) : (
//               <FollowButton loggedInUser={loggedInUser} user={user} initialFollowing={initialFollowing} />
//             )}
//             <button id="connections-button" onClick={openModal}>
//               Connections
//             </button>
//             <p id="user-bio">
//               <i>{user.bio}</i>
//             </p>
//           </div>
//         </div>
//       </section>

//       <div className="profile-list-of-slaps">{userSlapComponents}</div>

//       {showModal && <ConnectionsModal loggedInUser={loggedInUser} user={user} onClose={closeModal} />}
//     </div>
//   );
// };

// export default Profile;
import React, { useState, useEffect } from 'react';
import '../ProfileStyles.css';
import ProfileSlapList from './ProfileSlapList';
import FollowButton from '../../follow/FollowButton';
import ConnectionsModal from '../../modals/ConnectionsModal';
import { BioModal, UsernameModal } from './BioModal';
import { useNavigate } from 'react-router';
import SlapForm from '../../slaps/components/SlapForm';

const Profile = ({ user, loggedInUser, setLoggedInUser, listOfSlaps, setListOfSlaps, addNewSlap}) => {
  const isCurrentUser = loggedInUser && loggedInUser.id === user.id;
  const initialFollowing = loggedInUser && loggedInUser.following.some((followedUser) => followedUser.id === user.id);

  const [showModal, setShowModal] = useState(false);
  const [updatedBio, setUpdatedBio] = useState(loggedInUser ? loggedInUser.bio : ""); // Keep the updated bio in state
  const [showBioModal, setShowBioModal] = useState(false);
  const [showUsernameModal, setShowUsernameModal] = useState(false);
  const [showDeleteAccountModal, setShowDeleteAccountModal] = useState(false);

const openDeleteAccountModal = () => {
  setShowDeleteAccountModal(true);
};

const closeDeleteAccountModal = () => {
  setShowDeleteAccountModal(false);
};


const navigate = useNavigate();

const handleDeleteAccount = async (id) => {
  try {
    const response = await fetch(`http://localhost:8080/users/${loggedInUser.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}),
    });

    if (response.ok) {

      // Remove the deleted user's slaps from the listOfSlaps state
      const updatedSlaps = listOfSlaps.filter(slap => slap.user.id !== loggedInUser.id);
      setListOfSlaps(updatedSlaps);

      // Redirect to the home page or any other desired page
      // window.location.href = '/'; // Replace '/' with the desired URL
      // Clear the loggedInUser state
      setLoggedInUser(null);
    } else {
      console.log('Error deleting user account');
    }
  } catch (error) {
    console.log('Error deleting user account', error);
  }
};

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
    if(loggedInUser) {
      return <ProfileSlapList userSlap={userSlap} user={loggedInUser.id === user.id ? loggedInUser : user} />;
    } else {
      return <h3>Please log in</h3>
    }
    });

  const bio = isCurrentUser ? loggedInUser.bio : user.bio || '';

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
        const updatedUser = { ...loggedInUser, bio: newBio };
        setLoggedInUser(updatedUser); // Update the loggedInUser state with the updated bio
        setShowBioModal(false); // Close the modal after successful update
      } else {
        console.log('Error updating bio');
      }
    } catch (error) {
      console.log('Error updating bio', error);
    }
  };
  
  // Updating user's username on the profile page:

  const username = isCurrentUser ? loggedInUser.username : user.username || '';

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
        const updatedUser = { ...loggedInUser, username: newUsername };
        setLoggedInUser(updatedUser); // Update the loggedInUser state with the updated username
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

  if(loggedInUser) {
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
  
              <div className='profile-button-list'>
                {isCurrentUser && (
                  <button id="follow-unfollow-update-bio-button" onClick={openDeleteAccountModal}>
                    Delete Account
                  </button>
                )}
  
                  {isCurrentUser ? (
                    <button id="follow-unfollow-update-bio-button" onClick={openBioModal}>
                      Update Bio
                    </button>
                  ) : (
                    <FollowButton loggedInUser={loggedInUser} user={user} initialFollowing={initialFollowing} />
                  )}
  
                  {isCurrentUser ? (
                    <button id="follow-unfollow-update-bio-button" onClick={openUsernameModal}>
                      Update Username </button>) : ( "" )}
  
                    <button id="connections-button" onClick={openModal}>
                      Connections
                    </button>
                  </div>
              <p id="user-bio">
                <i>{isCurrentUser ? updatedBio : user.bio}</i> {/* Use updatedBio for loggedInUser, user.bio for other users */}
              </p>
            </div>
          </div>
        </section>
  
        <div className="profile-list-of-slaps">{userSlapComponents}</div>
        
        {showDeleteAccountModal && (
          <div className="modal-background">
            <div className="modal-content">
            <div className="delete-account-modal">
              <p>Confirm you want to delete your account</p>
              <button onClick={() => handleDeleteAccount(loggedInUser.id)}>Confirm</button>
              <button onClick={closeDeleteAccountModal}>Cancel</button>
            </div>
            </div>
          </div>
        )}
  
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
  } else {
    return <h3>Please log in</h3>
  }

};

export default Profile;

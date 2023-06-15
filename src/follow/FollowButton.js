import React, { useState } from 'react';

const FollowButton = ({ loggedInUser, user }) => {
  const [isFollowing, setIsFollowing] = useState(loggedInUser.following.some(u => u.id === user.id));

  const handleFollow = async () => {
    try {
      let response;
      if (isFollowing) {
        // Unfollow the user
        response = await fetch(`http://localhost:8080/users/${loggedInUser.id}/unfollowing/${user.id}`, {
          method: 'PATCH',
        });
      } else {
        // Follow the user
        response = await fetch(`http://localhost:8080/users/${loggedInUser.id}/following/${user.id}`, {
          method: 'PATCH',
        });
      }

      if (response.ok) {
        setIsFollowing(!isFollowing);
        // Update the loggedInUser's following list
        const updatedUser = await response.json();
        loggedInUser.following = updatedUser.following;
      } else {
        console.log('Error following/unfollowing user');
      }
    } catch (error) {
      console.log('Error following/unfollowing user', error);
    }
  };

  // Check if loggedInUser is viewing their own profile
  const isCurrentUser = loggedInUser && loggedInUser.id === user.id ? true : false

  return (
    !isCurrentUser && (
      <button onClick={handleFollow} id='follow-unfollow-update-bio-button'>
        {isFollowing ? 'Unfollow' : 'Follow'}
      </button>
    )
  );
};

export default FollowButton;
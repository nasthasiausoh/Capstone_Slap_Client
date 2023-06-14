import React, { useState } from 'react';
import Slap from '../../slaps/components/Slap';

const Timeline = ({ listOfSlaps, setListOfSlap, listOfUsers, setListOfUsers, loggedInUser }) => {
  const [showOnlyFollowing, setShowOnlyFollowing] = useState(false);

  const handleFilterByFollowing = () => {
    setShowOnlyFollowing(!showOnlyFollowing);
  };

  const slapComponents = listOfSlaps
    .filter(slap => (showOnlyFollowing ? loggedInUser.following.some(user => user.id === slap.user.id) : true))
    .map(slap => (
      <Slap
        key={slap.id}
        slap={slap}
        listOfSlaps={listOfSlaps}
        setListOfSlap={setListOfSlap}
      />
    ));

  return (
    <section className="tl-section">
      {loggedInUser ? (
        <h1>
          <i>{loggedInUser.username}</i>'s Timeline
        </h1>
      ) : (
        <h1>Timeline</h1>
      )}
      {loggedInUser && loggedInUser.following.length > 0 && (
        <button onClick={handleFilterByFollowing}>
          {showOnlyFollowing ? 'Show All Slaps' : 'Filter by Friends'}
        </button>
      )}
      <div>{slapComponents}</div>
    </section>
  );
};

export default Timeline;


import React, { useState } from "react";
import Slap from "../../slaps/components/Slap";

const Timeline = ({
  listOfSlaps,
  setListOfSlap,
  listOfUsers,
  setListOfUsers,
  loggedInUser
}) => {
  const [showOnlyFollowing, setShowOnlyFollowing] = useState(false);

  const handleFilterByFollowing = () => {
    setShowOnlyFollowing(!showOnlyFollowing);
  };

  console.log(loggedInUser);

  const slapComponents = listOfSlaps
  .filter((slap) => !showOnlyFollowing || slap.user.followers.map(follower => follower.id).includes(loggedInUser.id))
  .map((slap) => {
      return <Slap
        slap={slap}
        listOfSlaps={listOfSlaps}
        setListOfSlap={setListOfSlap}
      />;
    });

  return (
    <section className='tl-section'>
        {loggedInUser ? <h1><i>{loggedInUser.username}</i> 's Timeline </h1> : <h1>Timeline</h1> }
          <div>
            {slapComponents}
          </div>
          
      <section className="tl-section">
        <h1>Timeline</h1>
        <button onClick={handleFilterByFollowing}>
          {showOnlyFollowing ? "Show All Slaps" : "Filter by Friends"}
        </button>
        <div>{slapComponents}</div>
      </section>
    </section>

  );
};

export default Timeline;

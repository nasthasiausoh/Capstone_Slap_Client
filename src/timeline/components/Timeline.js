import React, { useState } from "react";
import Slap from "../../slaps/components/Slap";
import Player from "./Player";

const Timeline = ({ listOfSlaps, setListOfSlap, listOfUsers, setListOfUsers, loggedInUser }) => {
  const [showOnlyFollowing, setShowOnlyFollowing] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleFilterByFollowing = () => {
    setShowOnlyFollowing(!showOnlyFollowing);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredSlaps = listOfSlaps
    .filter((slap) =>
      showOnlyFollowing
        ? loggedInUser.following.some((user) => user.id === slap.user.id)
        : true
    )
    .filter((slap) =>
      slap.user.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
      slap.message.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <section className="tl-section">
      <div className="timeline-heading-contents">
        {loggedInUser ? (
          <h1>
            <i>{loggedInUser.username}'s</i> Timeline
          </h1>
        ) : (
          <h1>Timeline</h1>
        )}
        <div className="timeline-filters">
          {loggedInUser && loggedInUser.following.length > 0 && (
            <button onClick={handleFilterByFollowing} id="filter-timeline-slaps-button">
              {showOnlyFollowing ? 'General Slap Feed' : 'Slaps For You'}
            </button>
          )}
          <div className="user-search">
            <input
              id="search-input"
              type="text"
              placeholder="Search by Username or Slap"
              onInput={handleSearch}
            />
          </div>
        </div>
      </div>

      <div>
        {filteredSlaps.map((slap) => (
          <Slap
            key={slap.id}
            slap={slap}
            loggedInUser={loggedInUser}
            listOfSlaps={listOfSlaps}
            setListOfSlap={setListOfSlap}
          />
        ))}
      </div>
    </section>
  );
};

export default Timeline;



// import React, { useState } from 'react';
// import Slap from '../../slaps/components/Slap';

// const Timeline = ({ listOfSlaps, setListOfSlap, listOfUsers, setListOfUsers, loggedInUser }) => {
//   const [showOnlyFollowing, setShowOnlyFollowing] = useState(false);

//   const handleFilterByFollowing = () => {
//     setShowOnlyFollowing(!showOnlyFollowing);
//   };

//   const slapComponents = listOfSlaps
//     .filter(slap => (showOnlyFollowing ? loggedInUser.following.some(user => user.id === slap.user.id) : true))
//     .map(slap => (
//       <Slap
//         key={slap.id}
//         slap={slap}
//         listOfSlaps={listOfSlaps}
//         setListOfSlap={setListOfSlap}
//       />
//     ));

//   return (
//     <section className="tl-section">
//       <div className='timeline-heading-contents'>
//         {loggedInUser ? (
//           <h1>
//             <i>{loggedInUser.username}</i>'s Timeline
//           </h1>
//         ) : (
//           <h1>Timeline</h1>
//         )}
//         {loggedInUser && loggedInUser.following.length > 0 && (
//           <button onClick={handleFilterByFollowing} id='filter-timeline-slaps-button'>
//             {showOnlyFollowing ? 'General Slap Feed' : 'Slaps For You'} 
//           </button>
//         )}
//       </div>

//       <div>
//         {slapComponents}
//       </div>
      
//     </section>
//   );
// };

// export default Timeline;


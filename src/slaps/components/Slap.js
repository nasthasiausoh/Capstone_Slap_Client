import React from 'react'
import '../SlapStyles.css'
import { Link } from 'react-router-dom'

const Slap = ({ slap, loggedInUser }) => {
  const updatedUsername = slap.user.id === loggedInUser.id ? loggedInUser.username : slap.user.username;

  const date = slap.dateTime.slice(0, 10).split("-").reverse().join("-");
  const time = slap.dateTime.slice(11, 16);

  return (
    <div className='"player-component"'>
    <div className="timeline-list-of-slaps">
      <div className="timeline-slap-component">
        <div className="timeline-user-profile-details">
          <Link to={`/profile/${slap.user.id}`}>
            <img src={slap.user.profilePicture} width={170} />
          </Link>
          <div className="timeline-user-slap-contents">
            <Link to={`/profile/${slap.user.id}`}>
              <p>
                <b>{updatedUsername}</b>
              </p>
            </Link>
            <p>{slap.message}</p>
            <p><b>Mood: </b> {slap.mood}</p>
            <p><b>Time Posted: </b>{date} at {time}</p>
           </div>
        </div>
      </div>
    </div>
    </div>
  );
};
export default Slap
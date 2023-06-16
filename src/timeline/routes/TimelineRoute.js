import React from 'react';
import Navbar from '../../navbar/Navbar';
import TimelineContainer from '../containers/TimelineContainer';
import UserNavbar from '../../navbar/UserNavbar';
import Player from '../components/Player';

const TimelineRoute = ({ listOfSlaps, setListOfSlaps, loggedInUser, setLoggedInUser, listOfUsers, setListOfUsers}) => {
  return (
    <div className='whole-timeline'>
      {/* <div className='header'> */}
        {loggedInUser ? <UserNavbar user={loggedInUser} setUser={setLoggedInUser} loggedInUser={loggedInUser}/> : <Navbar />}
      {/* </div> */}

      <div className='player'>
        <h2>Trending Songs</h2>
        <Player />
      </div>

      <div className='timeline-in-route'>
      <TimelineContainer listOfSlaps={listOfSlaps} setListOfSlaps={setListOfSlaps} listOfUsers={listOfUsers} setListOfUsers={setListOfUsers} loggedInUser={loggedInUser}/>
      </div>
    </div>
  );
};

export default TimelineRoute;

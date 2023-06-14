import React from 'react';
import Navbar from '../../navbar/Navbar';
import TimelineContainer from '../containers/TimelineContainer';
import UserNavbar from '../../navbar/UserNavbar';

const TimelineRoute = ({ listOfSlaps, setListOfSlaps, loggedInUser, setLoggedInUser }) => {
  return (
    <div>
      {loggedInUser ? <UserNavbar loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser}/> : <Navbar />}
      <TimelineContainer listOfSlaps={listOfSlaps} setListOfSlaps={setListOfSlaps} loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} />
    </div>
  );
};

export default TimelineRoute;

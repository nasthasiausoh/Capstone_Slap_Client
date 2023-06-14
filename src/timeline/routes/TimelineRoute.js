import React from 'react';
import Navbar from '../../navbar/Navbar';
import TimelineContainer from '../containers/TimelineContainer';
import UserNavbar from '../../navbar/UserNavbar';

const TimelineRoute = ({ listOfSlaps, setListOfSlaps, loggedInUser, setLoggedInUser }) => {
  return (
    <div>
      {loggedInUser ? <UserNavbar user={loggedInUser} setUser={setLoggedInUser} loggedInUser={loggedInUser} /> : <Navbar />}
      <TimelineContainer listOfSlaps={listOfSlaps} setListOfSlaps={setListOfSlaps} />
    </div>
  );
};

export default TimelineRoute;

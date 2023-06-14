import React from 'react';
import Navbar from '../../navbar/Navbar';
import TimelineContainer from '../containers/TimelineContainer';
import UserNavbar from '../../navbar/UserNavbar';

const TimelineRoute = ({ listOfSlaps, setListOfSlaps, loggedInUser, setLoggedInUser, listOfUsers, setListOfUsers}) => {
  return (
    <div>
      {loggedInUser ? <UserNavbar user={loggedInUser} setUser={setLoggedInUser} loggedInUser={loggedInUser}/> : <Navbar />}
      <TimelineContainer listOfSlaps={listOfSlaps} setListOfSlaps={setListOfSlaps} listOfUsers={listOfUsers} setListOfUsers={setListOfUsers} loggedInUser={loggedInUser}/>
    </div>
  );
};

export default TimelineRoute;

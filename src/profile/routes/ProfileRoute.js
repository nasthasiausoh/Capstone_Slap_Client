import React, { useEffect, useState } from 'react'
import Footer from '../../footer/Footer';
import Profile from '../components/Profile';
import UserNavbar from '../../navbar/UserNavbar';
import { useParams } from 'react-router';

const ProfileRoute = ({ loggedInUser, setLoggedInUser, listOfSlaps, setListOfSlaps, addNewSlap,  deleteSlap}) => {
  
    const [user, setUser] = useState(null);
    const {id} = useParams()
  
    useEffect(() => {
      const fetchUser = async () => {
        try {
          const response = await fetch(`http://localhost:8080/users/${id}`);
          if (response.ok) {
            const userData = await response.json();
            setUser(userData);
          } else {
          console.log('Error fetching user data');
        }
      } catch (error) {
        console.log('Error fetching user data', error);
      }
    };

    if (loggedInUser) {
        fetchUser();
      }
    }, [loggedInUser,id, listOfSlaps]);

    return (
        <div>
          <UserNavbar user={user} setUser={setUser} loggedInUser={loggedInUser}/>
            {user ? <Profile user={user} loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} listOfSlaps={listOfSlaps} setListOfSlaps={setListOfSlaps} addNewSlap={addNewSlap} deleteSlap={deleteSlap}/> : <p>Loading user profile...</p>}
          <Footer/>
        </div>
      );
    };

export default ProfileRoute;
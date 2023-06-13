import React, { useEffect, useState } from 'react'
import Footer from '../../footer/Footer';
import Profile from '../components/Profile';
import Navbar from '../../navbar/Navbar';

const ProfileRoute = ({ loggedInUser }) => {
    const [user, setUser] = useState(null);
  
    useEffect(() => {
      const fetchUser = async () => {
        try {
          const response = await fetch(`http://localhost:8080/users/${loggedInUser.id}`);
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
    }, [loggedInUser]);

    return (
        <div>
          <Navbar />
            {user ? <Profile user={user} /> : <p>Loading user profile...</p>}
            < Footer/>
        </div>
      );
    };

export default ProfileRoute;
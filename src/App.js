import './App.css';
import {Routes, Route} from 'react-router-dom'
import { useEffect, useState } from 'react'

import AboutUsRoute from './aboutUs/routes/AboutUsRoute';
import LogInRoute from './login/routes/LogInRoute';
import HomeRoute from './home/routes/HomeRoute';
import SignUpRoute from './signup/routes/SignUpRoute';
import TimelineRoute from './timeline/routes/TimelineRoute';
import ProfileRoute from './profile/routes/ProfileRoute';

// we use routes to wrap around the individual Route we have and then we give them a path name and the associated element attached to it.
// I also put the baseline router-dom information in the index.js file. same for the css stuff in the index.css

function App() {

  const [loggedInUser, setLoggedInUser] = useState (null);
  const [listOfUsers, setListOfUsers] = useState([]);
  const [userById, setUserById] = useState ("");
  const [listOfSlaps, setListOfSlaps] = useState([]);
  const [newSlap, setNewSlap] = useState({});

  const addNewSlap = async (newSlap) => {
    await fetch('http://localhost:8080/slaps', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newSlap)
    });
    const slapsByUser = await fetch(`http://localhost:8080/slaps/slapFromUser/${loggedInUser.id}`)
    const updatedSlaps = await slapsByUser.json();
    const updatedLoggedInUser = {...loggedInUser};
    updatedLoggedInUser.slaps = updatedSlaps;
    setLoggedInUser(updatedLoggedInUser);
    // const data = await response.json()
    // const updatedSlaps = [...listOfSlaps, data]
    // setListOfSlaps(updatedSlaps)
    fetchListOfUsers();
    fetchListOfSlaps();
  }

  useEffect(() => {
    fetchListOfUsers();
    fetchListOfSlaps();
  }, []);

  const fetchListOfUsers = async () => {
    const response = await fetch("http://localhost:8080/users");
    const data = await response.json();
    setListOfUsers(data);
  };

  const fetchListOfSlaps = async () => {
    const response = await fetch("http://localhost:8080/slaps");
    const data = await response.json();
    setListOfSlaps(data);
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<HomeRoute />} />

        <Route path="/aboutUs" element={<AboutUsRoute />} />

        <Route
          path="/logIn"
          element={
            <LogInRoute
              loggedInUser={loggedInUser}
              setLoggedInUser={setLoggedInUser}
            />
          }
        />

        <Route
          path="/signUp"
          element={
            <SignUpRoute
              loggedInUser={loggedInUser}
              setLoggedInUser={setLoggedInUser}
              listOfUsers={listOfUsers}
              setListOfUsers={setListOfUsers}
            />
          }
        />

        <Route
          path={loggedInUser ? "/timeline/:id" : "/timeline"}
          element={
            <TimelineRoute
              listOfSlaps={listOfSlaps}
              setListOfSlaps={setListOfSlaps}
              loggedInUser={loggedInUser}
              setLoggedInUser={setLoggedInUser}
              listOfUsers={listOfUsers}
              setListOfUsers={setListOfUsers}
            />
          }
        />

        <Route
          path="/profile/:id"
          element={<ProfileRoute loggedInUser={loggedInUser} listOfSlaps={listOfSlaps} addNewSlap={addNewSlap}/>}
        />
      </Routes>
    </>
  );
}



  // const fetchListOfUsers = async () => {
  //   const response = await fetch ("http://localhost:8080/users");
  //   const data = await response.json();
  //   setListOfUsers(data);
  // } 
  // useEffect(() =>{
  //   fetchListOfUsers()
  // }, []);


  // const fetchUserById = async (id) => {
  //   const response = await fetch (`http://localhost:8080/users/${id}`)
  //   const data = await response.json();
  //   setUserById(data);
  // }
  // useEffect(() => {
  //   fetchUserById()
  // },[]);


//   return (
//    <>
//     <Routes> 
//       <Route path='/' element={<HomeRoute/> } />

//       <Route path='/aboutUs' element={<AboutUsRoute />} />

//       <Route path='/logIn' element={<LogInRoute 
//         loggedInUser={loggedInUser} 
//         setLoggedInUser={setLoggedInUser}/>} />

//       <Route path='/signUp' element={<SignUpRoute
//         loggedInUser={loggedInUser} 
//         setLoggedInUser={setLoggedInUser}
//         listOfUsers={listOfUsers}
//         setListOfUsers={setListOfUsers} 
//         newUser={newUser}
//         setNewUser={setNewUser} />} />

//       <Route path='/timeline' element={<TimelineRoute 
//         listOfSlaps={listOfSlaps} setListOfSlaps={setListOfSlaps} />} />

//     </Routes>
//    </>
//   );
// }

export default App;



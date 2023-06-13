import './App.css';
import {Routes, Route} from 'react-router-dom'
import { useEffect, useState } from 'react'

import AboutUsRoute from './aboutUs/routes/AboutUsRoute';
import LogInRoute from './login/routes/LogInRoute';
import HomeRoute from './home/routes/HomeRoute';
import SignUpRoute from './signup/routes/SignUpRoute';
import TimelineRoute from './timeline/routes/TimelineRoute';

// we use routes to wrap around the individual Route we have and then we give them a path name and the associated element attached to it.
// I also put the baseline router-dom information in the index.js file. same for the css stuff in the index.css

function App() {

  const [loggedInUser, setLoggedInUser] = useState ("");
  const [newUser, setNewUser] = useState("");
  const [listOfUsers, setListOfUsers] = useState([]);
  const [userById, setUserById] = useState ("");
  const [listOfSlaps, setListOfSlaps] = useState([]);
  const [newSlap, setNewSlap] = useState({});


  const fetchListOfSlaps = async () => {
    const response = await fetch ("http://localhost:8080/slaps");
    const data = await response.json();
    setListOfSlaps(data);
  } 
  useEffect(() =>{
    fetchListOfSlaps()
  }, []);

  
  const fetchListOfUsers = async () => {
    const response = await fetch ("http://localhost:8080/users");
    const data = await response.json();
    setListOfUsers(data);
  } 
  useEffect(() =>{
    fetchListOfUsers()
  }, []);



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


  return (
   <>
    <Routes> 
      <Route path='/' element={<HomeRoute/> } />

      <Route path='/aboutUs' element={<AboutUsRoute />} />

      <Route path='/logIn' element={<LogInRoute 
        loggedInUser={loggedInUser} 
        setLoggedInUser={setLoggedInUser}/>} />

      <Route path='/signUp' element={<SignUpRoute
        loggedInUser={loggedInUser} 
        setLoggedInUser={setLoggedInUser}
        listOfUsers={listOfUsers}
        setListOfUsers={setListOfUsers} 
        newUser={newUser}
        setNewUser={setNewUser} />} />

      <Route path='/timeline' element={<TimelineRoute 
        listOfSlaps={listOfSlaps} setListOfSlaps={setListOfSlaps} />} />

    </Routes>
   </>
  );
}

export default App;



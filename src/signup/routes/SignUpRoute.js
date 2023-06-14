import React from 'react'
import SignUp from '../components/SignUp'
import Navbar from '../../navbar/Navbar'
import Footer from '../../footer/Footer'

const SignUpRoute = ({loggedInUser, setLoggedInUser, listOfUsers, setListOfUsers}) => {
  return (
    <div>
        <Navbar />
        <SignUp loggedInUser={loggedInUser} 
        setLoggedInUser={setLoggedInUser}
        listOfUsers={listOfUsers}
        setListOfUsers={setListOfUsers} />
        <Footer />
    </div>
  )
}

export default SignUpRoute
import './App.css';
import {Routes, Route} from 'react-router-dom'

import AboutUsRoute from './aboutUs/routes/AboutUsRoute';
import LogInRoute from './login/routes/LogInRoute';
import HomeRoute from './home/routes/HomeRoute';
import SignUpRoute from './signup/routes/SignUpRoute';
import TimelineRoute from './timeline/routes/TimelineRoute';

// we use routes to wrap around the individual Route we have and then we give them a path name and the associated element attached to it.
// I also put the baseline router-dom information in the index.js file. same for the css stuff in the index.css

function App() {
  return (
   <>
    <Routes> 
      <Route path='/' element={<HomeRoute />} />
      <Route path='/aboutUs' element={<AboutUsRoute />} />
      <Route path='/logIn' element={<LogInRoute/>} />
      <Route path='/signUp' element={<SignUpRoute/>} />
      <Route path='/timeline' element={<TimelineRoute/>} />
    </Routes>
   </>
  );
}

export default App;

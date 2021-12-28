// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
// import SplashScreen from './components/layouts/SplashScreen/SplashScreen';
import Login from './components/layouts/Login/Login';
import PreferencesSurvey from './components/layouts/PreferencesSurvey/PreferencesSurvey';
import Dashboard from './components/layouts/Dashboard/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        {/* <SplashScreen/> */}
        <Route path='/login' element={<Login />} />
        <Route path='/survey' element={<PreferencesSurvey />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;

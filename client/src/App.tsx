// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
// import SplashScreen from './components/layouts/SplashScreen/SplashScreen';
import Login from './components/layouts/Login/Login';

function App() {
  return (
    <Router>
      <Routes>
        {/* <SplashScreen/> */}
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;

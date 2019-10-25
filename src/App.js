import React from 'react';
import './App.css';
import Student from './components/Student'
import Header from './components/Header'
import Profile from './components/Profile'
function App() {
  return (
    <div className="App">
      <Header />
      <Profile />
      {/* <Student /> */}
    </div>
  );
}

export default App;

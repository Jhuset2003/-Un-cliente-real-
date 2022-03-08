import React from 'react'
import './App.css';
import NavBar from './Components/Nav/NavBar';
import SectionHome from './Components/SectionHome/SectionHome'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      <NavBar/>
      <SectionHome/>
    </div>
  );
}

export default App;

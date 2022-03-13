import React from 'react'
import './App.css';
import NavBar from './Components/Nav/NavBar';
import SectionHome from './Components/SectionHome/SectionHome'
import 'bootstrap/dist/css/bootstrap.min.css';
import SectionMap from './Components/SectionMap/SectionMap';
import Info from './Components/SectionCarousels/Info';





function App() {
  return (
    <div>
      <NavBar/>
      <SectionHome/>
      <SectionMap/>
      <Info/>
    </div>
  );
}

export default App;

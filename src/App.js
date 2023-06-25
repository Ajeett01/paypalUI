import React from 'react'
import Navbar from './components/Navbar/Navbar';
import Activity from './components/Activity';


const App = () => {
  return (
    <div className="nav-center">
      <Navbar />
      <Activity/>
    </div>
  );
}

export default App
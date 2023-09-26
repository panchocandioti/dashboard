import React from 'react';
import './App.css';
import DashboardTiempo from './Components/DashboardTiempo';
import DashboardTransporte from './Components/DashboardTransporte';

function App() {
  return (
    <div className="App">
      <div className="mitad1">
        <DashboardTiempo />
      </div>
      <div className="mitad2">
        <DashboardTransporte />
      </div>
    </div>
  );
};

export default App;

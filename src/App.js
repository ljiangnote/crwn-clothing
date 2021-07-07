import './App.css';
import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import { Switch, Route } from 'react-router-dom';



const HatsPage =() =>(
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

function App() {
  return (
    <div>
      <Route exact path = '/' component ={HomePage} />
      <Route path = '/hats' component ={HatsPage} />
    </div>
  );
}

export default App;

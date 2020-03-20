import React from 'react';
//import logo from './logo.svg';
import './App.css';
import About from './About';
import Nav from './Nav';
import Shop from './Shop';
import {BrowserRouter as Router, Switch,Route } from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <switch>
      
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      
      <Route path="/shop" component={Shop} />
      </switch>
    
    </div>
    </Router>
  );
}
const Home = () =>(
  <div>
    <h1>Home Pages</h1>
  </div>
)
export default App;

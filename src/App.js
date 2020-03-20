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
  <h1>Home page</h1>
);

export default App;

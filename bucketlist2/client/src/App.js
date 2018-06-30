import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./components/pages/Home";
import Register from './components/pages/Register';
import Login from './components/pages/Login';


const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Login}/>
    </div>
  </Router>
);

export default App;

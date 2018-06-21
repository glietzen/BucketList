import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./components/pages/Home";


const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home};
    </div>
  </Router>
);

export default App;

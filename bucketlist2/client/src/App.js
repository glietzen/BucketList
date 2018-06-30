import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./components/pages/Home";
import Register from './components/pages/Register';
import Login from './components/pages/Login';
import {Provider} from 'react-redux';
import store from './store';

const App = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={Home}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/register" component={Register}/>
      </div>
    </Router>
  </Provider>
);

export default App;

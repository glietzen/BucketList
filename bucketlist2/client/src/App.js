import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./components/pages/Home";
import Register from './components/pages/Register';
import Login from './components/pages/Login';
import {Provider} from 'react-redux';
import store from './store';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import {setCurrentUser} from './actions/authActions'

// CHECK FOR TOKEN
if(localStorage.jwtToken) {
  // SET AUTH TOKEN HEADER AUTH
  setAuthToken(localStorage.jwtToken);
  // DECODE TOKEN AND GET USER INFO
  const decoded = jwt_decode(localStorage.jwtToken);
  // SET USER AND ISAUTHENTICATED
  store.dispatch(setCurrentUser(decoded))
}

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

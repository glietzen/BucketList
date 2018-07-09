import React from "react";
import Modalform from "../Modal/Modal";
import "./NavBar.css";
import {Navbar, NavItem} from 'react-materialize';
import img from './bucket.png';


const Nav = () => (
    <Navbar className="nav-bar teal lighten-2">
        <div>
            <span className="title">BucketList</span>
            <img className="logo" src={img} height="25px" width="25px" />
            <NavItem className="nav-item" href='get-started.html'><Modalform /></NavItem>
            <NavItem className="nav-item" href='components.html'>COMPONENTS</NavItem>
        </div>
    </Navbar>
);

export default Nav;
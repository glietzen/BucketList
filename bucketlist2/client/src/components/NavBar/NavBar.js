import React from "react";
import Modalform from "../Modal/Modal";
import "./NavBar.css";
import {Navbar, NavItem} from 'react-materialize';
import img from './bucket.png';


const Nav = () => (
    <Navbar className="nav-bar teal lighten-2" brand='BucketList'>
        <NavItem><img className="logo" src={img} height="20px" width="20px"/></NavItem>
        <NavItem className="nav-item" href='get-started.html'><Modalform /></NavItem>
        <NavItem className="nav-item" href='components.html'>COMPONENTS</NavItem>
    </Navbar>
);

export default Nav;
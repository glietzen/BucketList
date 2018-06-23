import React from "react";
import Modalform from "../Modal/Modal"
import {Navbar, NavItem} from 'react-materialize';


const Nav = () => (
    <Navbar className= "teal lighten-2" brand='Bucket List' right>
        <NavItem href='get-started.html'><Modalform /></NavItem>
        <NavItem href='components.html'>Components</NavItem>
    </Navbar>
);

export default Nav;
import React from "react";
import {Navbar, NavItem} from 'react-materialize'

const Nav = () => (
    <Navbar className= "teal lighten-2" brand='Bucket List' right>
        <NavItem href='get-started.html'>Add</NavItem>
        <NavItem href='components.html'>Components</NavItem>
    </Navbar>
);

export default Nav;
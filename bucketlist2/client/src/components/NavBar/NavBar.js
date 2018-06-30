import React from "react";
import {Component} from 'react';
import Modalform from "../Modal/Modal"
import {Navbar, NavItem} from 'react-materialize';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {logoutUser} from './../../actions/authActions';


class Nav extends Component {

    onLogoutClick(e) {
        e.preventDefault();
        this.props.logoutUser();

    }

    render() {
        const {isAuthenticated, user} = this.props.auth;

        const authLinks = (
            <span>
                <NavItem href="#" onClick={this.onLogoutClick.bind(this)}>
                    Logout
                </NavItem>
                <NavItem>
                    {user.name}
                </NavItem>
            </span>
        );

        const guestLinks = (
            <NavItem href="/login">
                Login
            </NavItem>
        );

        return(
        <Navbar className= "teal lighten-2" brand='Bucket List' right>
            <NavItem href='get-started.html'><Modalform /></NavItem>
            <NavItem href='components.html'>Components</NavItem>
            {isAuthenticated ? authLinks : guestLinks}
        </Navbar>
        )
    }
}

Nav.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, {logoutUser})(Nav);
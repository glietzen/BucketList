import React from "react";
import Nav from "../NavBar/NavBar";
import Cardlist from "../Cardlist/Cardlist"
import {Component} from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';

class Dashboard extends Component {

    componentDidMount() {
        if(this.props.auth.isAuthenticated) {
            this.props.history.push('/dashboard')
        }
    }


    render() {

        const {isAuthenticated} = this.props.auth;

        const authContent = (
            <div className="container">
                <Cardlist />
                <Cardlist />
                <Cardlist />
            </div>
        )

        const guestContent = (
            <div className="container">
                <p>You must be logged in to see your bucket list!</p>
            </div>
        )

        return (
            <div>
                <Nav />
                {isAuthenticated ? authContent : guestContent}
            </div>
        )
    }
}

Dashboard.propTypes = {
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps)(Dashboard);
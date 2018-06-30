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
        return (
            <div>
                <Nav />
                <div className="container">
                    <Cardlist />
                    <Cardlist />
                    <Cardlist />
                </div>
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
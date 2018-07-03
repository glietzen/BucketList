import React from "react";
import Nav from "../../NavBar/NavBar";
import Cardlist from "../../Cardlist/Cardlist";
import {Component} from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {Row, Col} from 'react-materialize';
import './Home.css';

class Home extends Component {

    componentDidMount() {
        if(this.props.auth.isAuthenticated) {
            this.props.history.push('/home')
        }
    }


    render() {

        const {isAuthenticated} = this.props.auth;

        const authContent = (
            <div className="container">
                <Col s={6} m={6} l={4}><Cardlist /></Col>
                <Col s={6} m={6} l={4}><Cardlist /></Col>
                <Col s={6} m={6} l={4}><Cardlist /></Col>
        
                <Col s={6} m={6} l={4}><Cardlist /></Col>
                <Col s={6} m={6} l={4}><Cardlist /></Col>
                <Col s={6} m={6} l={4}><Cardlist /></Col>
        
                <Col s={6} m={6} l={4}><Cardlist /></Col>
                <Col s={6} m={6} l={4}><Cardlist /></Col>
                <Col s={6} m={6} l={4}><Cardlist /></Col>
            </div>
        )

        const guestContent = (
            <div className="notLoggedContainer">
                <p>You must be logged in to see your bucket list!</p>
            </div>
        )

        return (
            <div className="background-color">
                <Nav />
                    <Row>
                {isAuthenticated ? authContent : guestContent}
                    </Row>
            </div>
        )
    }
}

Home.propTypes = {
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps)(Home);
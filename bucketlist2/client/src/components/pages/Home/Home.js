import React from "react";
import Nav from "../../NavBar/NavBar";
import Cardlist from "../../Cardlist/Cardlist";
import {Component} from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {Row, Col} from 'react-materialize';
import './Home.css';
import Axios from "axios";
import {logoutUser} from './../../../actions/authActions';

class Home extends Component {

    componentDidMount() {
        if(this.props.auth.isAuthenticated) {
            this.props.history.push('/home')
        }
    }


    render() {
        
        let itemsArrary = [];

        let getUserList = (userID) => {

            console.log(userID)
            Axios.get(`/api/lists/${userID}`)
                .then((res) => {
                   if(res.data.items.length > 0) {
                    console.log(res.data.items.length)
                    itemsArrary = res.data.items;
                    console.log(itemsArrary)
                   } 
                });        
        }

        const {isAuthenticated, user} = this.props.auth;

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
                {user.list ? getUserList(user.list) : null}
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
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, {logoutUser})(Home);